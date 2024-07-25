import { useState, useEffect, useRef } from "react";

import { Rating } from "react-simple-star-rating";

import btn from "/images/reviewCard/btn.svg";

import styles from "./ReviewCard.module.scss";

export type Review = {
   id: string;
   author: string;
   rating: number;
   review: string;
   date?: string;
};

interface Props {
   review: Review;
   productReview?: boolean;
}

export const ReviewCard: React.FC<Props> = ({ review, productReview }) => {
   const [active, setActive] = useState(false);

   const popupRef = useRef<HTMLDivElement>(null);

   const handleClickOutsidePopup = (e: MouseEvent) => {
      if (
         popupRef.current &&
         e.target instanceof Node &&
         !popupRef.current.contains(e.target)
      ) {
         setActive(false);
      }
   };

   useEffect(() => {
      document.addEventListener("mousedown", handleClickOutsidePopup);
      return () => {
         document.removeEventListener("mousedown", handleClickOutsidePopup);
      };
   }, []);

   return (
      <div className={styles.reviewCard}>
         <div className={styles.wrapper}>
            <Rating
               className={styles.rating}
               readonly
               allowFraction
               size={20}
               initialValue={review.rating}
            />
            {productReview && (
               <div className={styles.popup} ref={popupRef}>
                  <button onClick={() => setActive(!active)}>
                     <img src={btn} alt="btn" />
                  </button>
                  {active && (
                     <div>
                        <button>
                           <span>Report Review</span>
                        </button>
                     </div>
                  )}
               </div>
            )}
         </div>
         <h4>{review.author}</h4>
         <p className="text">"{review.review}"</p>
         {productReview && <p className="text">{review.date}</p>}
      </div>
   );
};
