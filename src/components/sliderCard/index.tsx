import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "../card";

import { Product } from "../../modules/sections/newArrivals/slice/types";

import styles from "./SliderCard.module.scss";
import "swiper/scss";

// Define props type for the SliderCard component
type Props = {
   arrayToRender: Product[];
};

// SliderCard component displaying a swiper slider with product cards
export const SliderCard: React.FC<Props> = ({ arrayToRender }) => {
   return (
      <Swiper spaceBetween={16} slidesPerView={"auto"}>
         {arrayToRender.map((item: Product, i: number) => (
            <SwiperSlide className={styles.slide} key={item.id}>
               <Card
                  duration={300 + i * 100} // Animate each card with increasing duration
                  category={"new_arrivals"} // Set card category
                  {...item} // Pass all product properties to Card component
               />
            </SwiperSlide>
         ))}
      </Swiper>
   );
};
