import { Swiper, SwiperSlide } from "swiper/react";

import { Card } from "../card";

import styles from "./SliderCard.module.scss";
import "swiper/scss";

export function SliderCard({ arrayToRender }) {
   return (
      <Swiper spaceBetween={16} slidesPerView={"auto"}>
         {arrayToRender.map(item => (
            <SwiperSlide className={styles.slide} key={item.id}>
               <Card {...item} />
            </SwiperSlide>
         ))}
      </Swiper>
   );
}
