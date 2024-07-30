import { useSelector } from "react-redux";
import ReactDOM from "react-dom";
import { useEffect, useRef } from "react";
import { useAppDispatch } from "../../../../../store";
import { useParams } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { v4 as uuidv4 } from "uuid";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";

import { Button } from "../../../../../ui/button/Button";

import { postReview } from "../../slice/slice";
import { postFetchReview } from "../../slice/slice";
import {
   setFormRating,
   setFormText,
   setFormStatus,
   setFormAuthor,
} from "../../slice/slice";

import { selectorProductAbout } from "../../slice/slice";

import styles from "./ReviewForm.module.scss";

const validationSchema = Yup.object({
   author: Yup.string().required("Name is required"),
   review: Yup.string().required("Review is required"),
   rating: Yup.number()
      .required("Rating is required")
      .min(1, "Rating must be greater than or equal to 1")
      .max(5),
});

export const ReviewForm: React.FC = () => {
   const { formText, formRating, formAuthor } =
      useSelector(selectorProductAbout);

   const { id } = useParams<{ id: string }>();

   const reviewRef = useRef<HTMLFormElement>(null);

   const dispatch = useAppDispatch();

   const handleClose = async (values: {
      author: string;
      review: string;
      rating: number;
   }) => {
      const date = new Date();
      const options: Intl.DateTimeFormatOptions = {
         year: "numeric",
         month: "long",
         day: "numeric",
      };
      const formattedDate = date.toLocaleDateString("en-US", options);

      const review = {
         id: uuidv4(),
         rating: values.rating,
         author: values.author,
         review: values.review,
         date: formattedDate,
      };

      if (id) {
         try {
            // Dispatch actions sequentially
            dispatch(postReview(review));
            await dispatch(postFetchReview({ id, review }));
            dispatch(setFormStatus(false));

            // Clear form fields
            dispatch(setFormRating(0));
            dispatch(setFormText(""));
            dispatch(setFormAuthor(""));
         } catch (error) {
            console.error("Error handling review:", error);
         }
      }
      document.body.classList.remove("lock");
   };

   const handleClickOutsideReview = (e: MouseEvent) => {
      if (
         reviewRef.current &&
         e.target instanceof Node &&
         !reviewRef.current.contains(e.target)
      ) {
         dispatch(setFormStatus(false));
         document.body.classList.remove("lock");
      }
   };

   useEffect(() => {
      document.addEventListener("mousedown", handleClickOutsideReview);
      return () => {
         document.removeEventListener("mousedown", handleClickOutsideReview);
      };
   }, []);

   const portal = document.getElementById("portal");
   if (!portal) return null;

   return ReactDOM.createPortal(
      <Formik
         initialValues={{
            author: formAuthor,
            review: formText,
            rating: formRating,
         }}
         validationSchema={validationSchema}
         onSubmit={handleClose}
      >
         {({ setFieldValue }) => (
            <Form ref={reviewRef} className={styles.form}>
               <Rating
                  size={32}
                  allowFraction
                  onClick={rating => setFieldValue("rating", rating)}
               />
               <ErrorMessage
                  name="rating"
                  component="p"
                  className={styles.error}
               />
               <Field type="text" placeholder="Your name" name="author" />
               <ErrorMessage name="author" component="p" />
               <Field
                  as="textarea"
                  placeholder="Write a review"
                  name="review"
               />
               <ErrorMessage name="review" component="p" />
               <Button text="Submit" type="submit" />
            </Form>
         )}
      </Formik>,
      portal,
   );
};
