import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../../store";

import { ReviewCard } from "../../../../components/reviewCard";
import { Skeleton } from "../../../../components/skeleton";

import { Review } from "../slice/types";

import { fetchReviews } from "../slice/slice";

import styles from "./Slider.module.scss";
import "swiper/css";

// Slider component displaying customer reviews
const Slider: React.FC = () => {
   // Extracting reviews, status, and error from Redux state
   const { reviews, status, error } = useSelector(
      (state: RootState) => state.happyCustomersSlice,
   );

   // Hook to dispatch actions
   const dispatch = useAppDispatch();

   // Fetch reviews when the component mounts
   useEffect(() => {
      dispatch(fetchReviews());
   }, [dispatch]);

   return (
      <Swiper
         // Swiper modules for navigation and pagination
         modules={[Navigation, Pagination]}
         spaceBetween={20} // Space between slides
         slidesPerView={"auto"} // Number of slides to show at a time
         navigation={{
            nextEl: ".swiper-button-next", // Next button selector
            prevEl: ".swiper-button-prev", // Previous button selector
         }}
      >
         {/* Display error message if there is an error */}
         {error && <h2>{error}</h2>}
         {/* Display a skeleton loader if data is loading */}
         {status === "loading" ? (
            <Skeleton length={4} />
         ) : (
            // Map over reviews and display each review in a SwiperSlide
            reviews.map((review: Review) => (
               <SwiperSlide className={styles.slide} key={review.id}>
                  <ReviewCard review={review} />
               </SwiperSlide>
            ))
         )}
      </Swiper>
   );
};

export default Slider;
