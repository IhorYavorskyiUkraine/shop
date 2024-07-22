import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useSelector, useDispatch } from "react-redux";
import { fetchReviews } from "../slice/slice";

import { ReviewCard } from "../../../../components/reviewCard";
import { Skeleton } from "../../../../components/skeleton";

import styles from "./Slider.module.scss";
import "swiper/css";

export function Slider() {
   const { reviews, status, error } = useSelector(
      state => state.happyCustomersSlice,
   );

   const dispatch = useDispatch();

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
            reviews.map(review => (
               <SwiperSlide className={styles.slide} key={review.id}>
                  <ReviewCard review={review} />
               </SwiperSlide>
            ))
         )}
      </Swiper>
   );
}
