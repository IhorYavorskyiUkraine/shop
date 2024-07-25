import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { v4 as uuidv4 } from "uuid";

import {
   setFormRating,
   setFormText,
   setFormStatus,
   setFormAuthor,
} from "../../slice/slice";

// import { postReview } from "../../slice/slice";

import { selectorProductAbout } from "../../slice/slice";

import styles from "./ReviewForm.module.scss";

export const ReviewForm: React.FC = () => {
   const { formText, formRating, formAuthor } =
      useSelector(selectorProductAbout);

   const { id } = useParams();

   const dispatch = useDispatch();

   // const handleClose = () => {
   //    const review = {
   //       id: uuidv4(),
   //       rating: formRating,
   //       author: formAuthor,
   //       review: formText,
   //       date: new Date(),
   //    };
   //    console.log(review);
   //    dispatch(setFormStatus(false));
   //    dispatch(postReview(id, review));

   //    dispatch(setFormAuthor(""));
   //    dispatch(setFormRating(0));
   //    dispatch(setFormText(""));
   // };

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
         <Rating onClick={e => dispatch(setFormRating(e))} />
         {/* <button onClick={() => dispatch(handleClose())}>Ok</button> */}
      </form>
   );
};
