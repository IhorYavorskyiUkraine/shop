import { useDispatch, useSelector } from "react-redux";
import { useMemo, useEffect } from "react";
import { SelectedFilter, Option } from "../../slice/types";

import { ReviewCard } from "../../../../../components/reviewCard";
import { ReviewForm } from "../reviewForm";
import { CustomSelect } from "../../../../../components/customSelect";
import { Button } from "../../../../../ui/button/Button";

import {
   setSelectedFilter,
   setFormStatus,
   setVisibleData,
} from "../../slice/slice";

import { selectorProductAbout } from "../../slice/slice";

import styles from "./ReviewsTab.module.scss";

export const ReviewsTab: React.FC = () => {
   // Get the product details, selected filter, and form status from Redux store
   const { product, selectedFilter, formStatus, visibleData, status } =
      useSelector(selectorProductAbout);

   const dispatch = useDispatch();

   // Options for the review filter select dropdown
   const options: Option[] = [
      { value: "latest", label: "Latest" },
      { value: "newest", label: "Newest" },
   ];

   // Handle filter option change
   const handleChange = (option: SelectedFilter) => {
      dispatch(setSelectedFilter(option));
   };

   const loadMore = () => {
      dispatch(setVisibleData(visibleData + 4));
   };

   const openReviewPopup = () => {
      dispatch(setFormStatus(true)); // Remove lock class when menu is closed
      document.body.classList.add("lock"); // Add lock class when menu is open
   };

   // Set default filter on component mount
   useEffect(() => {
      dispatch(setSelectedFilter("latest"));
   }, [dispatch]);

   // Memoized sorted reviews based on the selected filter
   const sortedReviews = useMemo(() => {
      if (!product?.reviews) return [];

      let sorted = [...product.reviews];

      const isValidDate = (dateString: string) => {
         const date = new Date(dateString);
         return !isNaN(date.getTime());
      };

      // Sort reviews based on the selected filter
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
      <>
         <div
            className={styles.wrapper}
            data-aos="fade-up"
            data-aos-duration="500"
         >
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
                  {formStatus === false && (
                     <button
                        onClick={openReviewPopup}
                        className={styles.writeBtn}
                     >
                        Write a Review
                     </button>
                  )}
                  {formStatus && <ReviewForm />}
               </div>
            </div>
            <div className={styles.reviews}>
               {/* Render sorted reviews */}
               {sortedReviews.slice(0, visibleData).map(review => (
                  <ReviewCard key={review.id} review={review} productReview />
               ))}
            </div>
            {/* Show load more button if there are more reviews to load */}
            {visibleData < sortedReviews.length && (
               <div className={`d-flex justify-center ${styles.loadMore}`}>
                  <Button
                     disabled={status === "loading"}
                     onClick={loadMore}
                     text="Load More Reviews"
                  />
               </div>
            )}
         </div>
         {formStatus && <div className={styles.overlay}></div>}
      </>
   );
};
