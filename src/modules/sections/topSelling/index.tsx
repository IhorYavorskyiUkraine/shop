import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../store";
import { fetchTopSelling } from "./slice/slice";
import { RootState } from "../../../store";

import { Card } from "../../../components/card";
import { Skeleton } from "../../../components/skeleton";
import { Button } from "../../../ui/button/Button";
import { SliderCard } from "../../../components/sliderCard";

import { setVisibleData } from "./slice/slice";

import styles from "./TopSelling.module.scss";
import { Product } from "../newArrivals/slice/slice";

export const TopSelling: React.FC = () => {
   const { topSelling, visibleData, status, error } = useSelector(
      (state: RootState) => state.topSellingSlice,
   );

   const dispatch = useAppDispatch();

   const loadMore = () => {
      dispatch(setVisibleData(visibleData + 4));
   };

   useEffect(() => {
      dispatch(fetchTopSelling());
   }, [dispatch]);
   return (
      <section
         data-aos="fade-up"
         data-aos-duration="500"
         className={styles.topSelling}
      >
         <div className="container">
            <h2 className="title">Top Selling</h2>
            <div className={styles.items}>
               {error && <h2>{error}</h2>}
               {status === "loading" ? (
                  <Skeleton length={4} />
               ) : window.innerWidth <= 768 ? (
                  <SliderCard arrayToRender={topSelling} />
               ) : (
                  topSelling
                     .slice(0, visibleData)
                     .map((item: Product, i: number) => (
                        <Card
                           key={item.id}
                           duration={300 + i * 100}
                           category="top_selling"
                           {...item}
                        />
                     ))
               )}
            </div>
            {visibleData < topSelling.length && (
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
