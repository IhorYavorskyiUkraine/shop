import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchNewArrives } from "../../../store/slice";

import { Card } from "../../../components/card";
import { Skeleton } from "../../../components/skeleton";
import { Button } from "../../../ui/button/Button";
import { SliderCard } from "../../../components/sliderCard";

import styles from "./NewArrivals.module.scss";

export function NewArrivals() {
   const [visibleData, setVisibleData] = useState(4);

   const { newArrivals, status, error } = useSelector(state => state.global);

   const dispatch = useDispatch();

   const loadMore = () => {
      setVisibleData(prev => prev + 4);
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
                     .map((item, i) => (
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
}
