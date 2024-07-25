import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchNewArrives, Product } from "./slice/slice";
import { RootState, useAppDispatch } from "../../../store";

import { Card } from "../../../components/card";
import { Skeleton } from "../../../components/skeleton";
import { Button } from "../../../ui/button/Button";
import { SliderCard } from "../../../components/sliderCard";

import { setVisibleData } from "./slice/slice";

import styles from "./NewArrivals.module.scss";

export const NewArrivals: React.FC = () => {
   const { newArrivals, visibleData, status, error } = useSelector(
      (state: RootState) => state.newArrivalsSlice,
   );

   console.log(newArrivals);

   const dispatch = useAppDispatch();

   const loadMore = () => {
      dispatch(setVisibleData(visibleData + 4));
   };

   useEffect(() => {
      dispatch(fetchNewArrives());
   }, [dispatch]);

   return (
      <section
         data-aos="fade-up"
         data-aos-duration="500"
         className={styles.newArrivals}
      >
         <div className="container">
            <h2 className="title">New Arrivals</h2>
            <div className={styles.items}>
               {error && <h2>{error}</h2>}
               {status === "loading" ? (
                  <Skeleton length={4} />
               ) : window.innerWidth <= 768 ? (
                  <SliderCard arrayToRender={newArrivals} />
               ) : (
                  newArrivals
                     .slice(0, visibleData)
                     .map((item: Product, i: number) => (
                        <Card
                           key={item.id}
                           duration={300 + i * 100}
                           category="new_arrivals"
                           {...item}
                        />
                     ))
               )}
            </div>
            {visibleData < newArrivals.length && (
               <div className="d-flex justify-center">
                  <Button
                     disabled={status === "loading"}
                     onClick={loadMore}
                     text="View All"
                  />
               </div>
            )}
         </div>
      </section>
   );
};
