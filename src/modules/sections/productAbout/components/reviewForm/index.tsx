import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../../../store";
import { useParams } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { v4 as uuidv4 } from "uuid";

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

export const ReviewForm: React.FC = () => {
   const { formText, formRating, formAuthor } =
      useSelector(selectorProductAbout);

   const { id } = useParams<{ id: string }>();

   const dispatch = useAppDispatch();

   const handleClose = async (e: React.FormEvent) => {
      // Prevent form submission
      e.preventDefault();

      const date = new Date();
      const options: Intl.DateTimeFormatOptions = {
         year: "numeric",
         month: "long",
         day: "numeric",
      };
      const formattedDate = date.toLocaleDateString("en-US", options);

      const review = {
         id: uuidv4(),
         rating: formRating,
         author: formAuthor,
         review: formText,
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
   };

   return (
      <form>
         <input
            type="text"
            placeholder="Your name"
            name="author"
            value={formAuthor}
            onChange={e => dispatch(setFormAuthor(e.target.value))}
         />
         <input
            type="text"
            placeholder="Write a review"
            name="review"
            value={formText}
            onChange={e => dispatch(setFormText(e.target.value))}
         />
         <Rating onClick={rating => dispatch(setFormRating(rating))} />
         <button type="submit" onClick={e => handleClose(e)}>
            Submit
         </button>
      </form>
   );
};
