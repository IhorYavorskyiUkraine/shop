import { useDispatch, useSelector } from "react-redux";
import { useMemo, useEffect } from "react";
import { SelectedFilter } from "../../slice/slice";

import { selectorProductAbout } from "../../slice/slice";
import { ReviewCard } from "../../../../../components/reviewCard";
import { ReviewForm } from "../reviewForm";

import { setSelectedFilter, setFormStatus } from "../../slice/slice";

import { CustomSelect } from "../../../../../components/customSelect";

import styles from "./ReviewsTab.module.scss";

export const ReviewsTab: React.FC = () => {
   const { product, selectedFilter, formStatus } =
      useSelector(selectorProductAbout);

   const dispatch = useDispatch();

   const options = [
      { value: "latest", label: "Latest" },
      { value: "newest", label: "Newest" },
   ];

   const handleChange = (option: SelectedFilter) => {
      dispatch(setSelectedFilter(option));
   };

   useEffect(() => {
      dispatch(setSelectedFilter("latest"));
   }, []);

   const sortedReviews = useMemo(() => {
      if (!product?.reviews) return [];

      let sorted = [...product.reviews];

      const isValidDate = (dateString: string) => {
         const date = new Date(dateString);
         return !isNaN(date.getTime());
      };

      switch (selectedFilter) {
         case "newest":
            sorted.sort((a, b) => {
               const dateA = isValidDate(a.date)
                  ? new Date(a.date).getTime()
                  : 0;
               const dateB = isValidDate(b.date)
                  ? new Date(b.date).getTime()
                  : 0;
               return dateB - dateA;
            });
            break;
         case "latest":
            sorted.sort((a, b) => {
               const dateA = isValidDate(a.date)
                  ? new Date(a.date).getTime()
                  : 0;
               const dateB = isValidDate(b.date)
                  ? new Date(b.date).getTime()
                  : 0;
               return dateA - dateB;
            });
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
               <CustomSelect
                  options={options}
                  selectedValue={selectedFilter}
                  handleChange={handleChange}
               />
               <button
                  onClick={() => dispatch(setFormStatus(true))}
                  className={styles.writeBtn}
               >
                  Write a Review
               </button>
               {formStatus && <ReviewForm />}
            </div>
         </div>
         <div className={styles.reviews}>
            {sortedReviews.map(review => (
               <ReviewCard key={review.id} review={review} productReview />
            ))}
         </div>
      </div>
   );
};
