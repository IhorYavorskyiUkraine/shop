import { useDispatch, useSelector } from "react-redux";
import { useMemo, useEffect } from "react";

import { selectorProductAbout } from "../../slice/slice";
import { ReviewCard } from "../../../../../components/reviewCard";

import filterIcon from "/images/productAbout/filterIcon.svg";

import { setSelectedFilter } from "../../slice/slice";

import { CustomSelect } from "../../../../../components/customSelect";

import styles from "./ReviewsTab.module.scss";

export function ReviewsTab() {
   const { product, selectedFilter } = useSelector(selectorProductAbout);

   const dispatch = useDispatch();

   const options = [
      { value: "latest", label: "Latest" },
      { value: "newest", label: "Newest" },
   ];

   const handleChange = option => {
      dispatch(setSelectedFilter(option));
   };

   useEffect(() => {
      dispatch(setSelectedFilter("latest"));
   }, []);

   const sortedReviews = useMemo(() => {
      if (!product?.reviews) return [];

      let sorted = [...product.reviews];

      switch (selectedFilter) {
         case "latest":
            sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
            break;
         case "newest":
            sorted.sort((a, b) => new Date(a.date) - new Date(b.date));
            break;
         case "all":
         default:
            break;
      }

      return sorted;
   }, [product?.reviews, selectedFilter]);

   return (
      <div className={styles.wrapper}>
         <div className={styles.top}>
            <h3>
               All Reviews<span>({product?.reviews.length})</span>
            </h3>
            <div className={styles.buttons}>
               <button>
                  <img src={filterIcon} alt="filterIcon" />
               </button>
               <CustomSelect
                  options={options}
                  selectedValue={selectedFilter}
                  onClick={handleChange}
               />
            </div>
         </div>
         <div className={styles.reviews}>
            {sortedReviews.map(review => (
               <ReviewCard key={review.id} review={review} productReview />
            ))}
         </div>
      </div>
   );
}
