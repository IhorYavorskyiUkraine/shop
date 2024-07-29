import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchNewArrives, setVisibleData } from "./slice/slice";
import { RootState, useAppDispatch } from "../../../store";
import { Card } from "../../../components/card";
import { Skeleton } from "../../../components/skeleton";
import { Button } from "../../../ui/button/Button";
import { SliderCard } from "../../../components/sliderCard";
import styles from "./NewArrivals.module.scss";
import { Product } from "./slice/types";

export const NewArrivals: React.FC = () => {
   // Retrieve new arrivals, visible data count, status, and error from Redux store
   const { newArrivals, visibleData, status, error } = useSelector(
      (state: RootState) => state.newArrivalsSlice,
   );

   const dispatch = useAppDispatch();

   // Function to load more items
   const loadMore = () => {
      dispatch(setVisibleData(visibleData + 4));
   };

   // Fetch new arrivals when the component mounts
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
               {/* Display error message if there is an error */}
               {error && <h2>{error}</h2>}

               {/* Show skeleton loader while data is loading */}
               {status === "loading" ? (
                  <Skeleton length={4} />
               ) : window.innerWidth <= 768 ? (
                  // Use slider for mobile view
                  <SliderCard arrayToRender={newArrivals} />
               ) : (
                  // Display cards for larger screens
                  newArrivals
                     .slice(0, visibleData)
                     .map((item: Product, i: number) => (
                        <Card
                           key={item.id}
                           duration={300 + i * 100} // Animation duration with staggered effect
                           category="new_arrivals"
                           {...item}
                        />
                     ))
               )}
            </div>
            {/* Show "View All" button if there are more items to load */}
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
