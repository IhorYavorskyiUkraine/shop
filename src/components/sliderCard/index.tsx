import { Swiper, SwiperSlide } from "swiper/react";
import { Product } from "../../modules/sections/newArrivals/slice/slice";

import { Card } from "../card";

import styles from "./SliderCard.module.scss";
import "swiper/scss";

type Props = {
   arrayToRender: Product[];
};

export const SliderCard: React.FC<Props> = ({ arrayToRender }) => {
   return (
      <Swiper spaceBetween={16} slidesPerView={"auto"}>
         {arrayToRender.map((item, i) => (
            <SwiperSlide className={styles.slide} key={item.id}>
               <Card
                  duration={item.duration}
                  category={item.category}
                  {...item}
               />
            </SwiperSlide>
         ))}
      </Swiper>
   );
};
