import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useSelector } from "react-redux";
import { fetchReviews } from "../slice/slice";
import { RootState, useAppDispatch } from "../../../../store";

import { ReviewCard } from "../../../../components/reviewCard";
import { Skeleton } from "../../../../components/skeleton";

import { Review } from "../../../../components/reviewCard";

import styles from "./Slider.module.scss";
import "swiper/css";

export const Slider: React.FC = () => {
   const { reviews, status, error } = useSelector(
      (state: RootState) => state.happyCustomersSlice,
   );

   const dispatch = useAppDispatch();

   useEffect(() => {
      dispatch(fetchReviews());
   }, []);

   return (
      <Swiper
         modules={[Navigation, Pagination]}
         spaceBetween={20}
         slidesPerView={"auto"}
         navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
         }}
      >
         {error && <h2>{error}</h2>}
         {status === "loading" ? (
            <Skeleton length={4} />
         ) : (
            reviews.map((review: Review) => (
               <SwiperSlide className={styles.slide} key={review.id}>
                  <ReviewCard review={review} />
               </SwiperSlide>
            ))
         )}
      </Swiper>
   );
};
