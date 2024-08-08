import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../store";
import { RootState } from "../../../store";

import { Card } from "../../../components/card";
import { Skeleton } from "../../../components/skeleton";
import { Button } from "../../../ui/button/Button";
import { SliderCard } from "../../../components/sliderCard";

import { Product } from "../newArrivals/slice/types";

import { fetchTopSelling } from "./slice/slice";
import { setVisibleData } from "./slice/slice";

import styles from "./TopSelling.module.scss";

export const TopSelling: React.FC = () => {
   // Get top-selling products and other state data from Redux store
   const { topSelling, visibleData, status, error } = useSelector(
      (state: RootState) => state.topSellingSlice,
   );

   // Initialize dispatch function
   const dispatch = useAppDispatch();

   // Load more products when button is clicked
   const loadMore = () => {
      dispatch(setVisibleData(visibleData + 4));
   };

   // Fetch top-selling products on component mount
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
               {/* Show error message if there is an error */}
               {error && <h2>{error}</h2>}
               {/* Show loading skeleton while data is being fetched */}
               {status === "loading" ? (
                  <Skeleton length={4} />
               ) : window.innerWidth <= 768 ? (
                  // Display slider for mobile view
                  <SliderCard arrayToRender={topSelling} />
               ) : (
                  // Display cards for desktop view
                  topSelling
                     .slice(0, visibleData)
                     .map((item: Product, i: number) => (
                        <Card
                           key={item.id}
                           duration={300 + i * 100}
                           {...item}
                        />
                     ))
               )}
            </div>
            {/* Show "View All" button if there are more products to load */}
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
