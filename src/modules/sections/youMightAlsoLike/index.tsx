import { useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState, useAppDispatch } from "../../../store";

import { Skeleton } from "../../../components/skeleton";
import { SliderCard } from "../../../components/sliderCard";
import { Product } from "../newArrivals/slice/types";
import { Card } from "../../../components/card";

import { fetchYouMightAlsoLike } from "./slice/slice";

import styles from "./YouMightAlsoLike.module.scss";

export const YouMightAlsoLike: React.FC = () => {
   const { youMightAlsoLike, status, error } = useSelector(
      (state: RootState) => state.youMightAlsoLikeSlice,
   );

   const dispatch = useAppDispatch();

   useEffect(() => {
      dispatch(fetchYouMightAlsoLike());
   }, [dispatch]);

   return (
      <section
         data-aos="fade-up"
         data-aos-duration="500"
         className={styles.youMightAlsoLike}
      >
         <div className="container">
            <h2 className="title">You might also like</h2>
            <div className={styles.items}>
               {/* Show error message if there is an error */}
               {error && <h2>{error}</h2>}
               {/* Show loading skeleton while data is being fetched */}
               {status === "loading" ? (
                  <Skeleton length={4} />
               ) : window.innerWidth <= 768 ? (
                  // Display slider for mobile view
                  <SliderCard arrayToRender={youMightAlsoLike} />
               ) : (
                  // Display cards for desktop view
                  youMightAlsoLike.map((item: Product, i: number) => (
                     <Card
                        key={item.id}
                        duration={300 + i * 100}
                        category="top_selling"
                        {...item}
                     />
                  ))
               )}
            </div>
         </div>
      </section>
   );
};
