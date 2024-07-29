import { useState, useEffect, useRef } from "react";

import { Review } from "../../modules/sections/happyCustomers/slice/types";
import { Rating } from "react-simple-star-rating";

import btn from "/images/reviewCard/btn.svg";

import styles from "./ReviewCard.module.scss";

// Define props type for the ReviewCard component
interface Props {
   review: Review; // Review data
   productReview?: boolean; // Optional flag for product reviews
}

// ReviewCard component displaying a review with optional popup
export const ReviewCard: React.FC<Props> = ({ review, productReview }) => {
   const [active, setActive] = useState(false); // State for popup visibility
   const popupRef = useRef<HTMLDivElement>(null); // Ref for popup container

   // Handle click outside the popup to close it
   const handleClickOutsidePopup = (e: MouseEvent) => {
      if (
         popupRef.current &&
         e.target instanceof Node &&
         !popupRef.current.contains(e.target)
      ) {
         setActive(false);
      }
   };

   // Add and remove event listener for outside clicks
   useEffect(() => {
      document.addEventListener("mousedown", handleClickOutsidePopup);
      return () => {
         document.removeEventListener("mousedown", handleClickOutsidePopup);
      };
   }, []);

   return (
      <div className={styles.reviewCard}>
         <div className={styles.wrapper}>
            {/* Display star rating */}
            <Rating
               className={styles.rating}
               readonly
               allowFraction
               size={20}
               initialValue={review.rating}
            />
            {/* Conditionally render popup for product reviews */}
            {productReview && (
               <div className={styles.popup} ref={popupRef}>
                  <button onClick={() => setActive(!active)}>
                     <img src={btn} alt="btn" /> {/* Button to toggle popup */}
                  </button>
                  {active && (
                     <div>
                        <button>
                           <span>Report Review</span>{" "}
                           {/* Button inside popup */}
                        </button>
                     </div>
                  )}
               </div>
            )}
         </div>
         {/* Display review details */}
         <h4>{review.author}</h4>
         <p className="text">"{review.review}"</p>
         {productReview && <p className="text">{review.date}</p>}
      </div>
   );
};
