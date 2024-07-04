import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchNewArrives } from "../../../store/slice";

import { Card } from "../../../components/card";
import { Skeleton } from "../../../components/skeleton";
import { Button } from "../../../ui/button/Button";

import styles from "./NewArrivals.module.scss";

export function NewArrivals() {
   const [visibleData, setVisibleData] = useState(4);

   const { newArrivals, status, error } = useSelector(
      state => state.globalSlice,
   );

   const dispatch = useDispatch();

   const loadMore = () => {
      setVisibleData(prev => prev + 4);
   };

   useEffect(() => {
      dispatch(fetchNewArrives());
   }, []);

   return (
      <section className={styles.newArrivals}>
         <div className="container">
            <h2 className="title">New Arrivals</h2>
            <div className={styles.items}>
               {error && <h2>{error}</h2>}
               {status === "loading" ? (
                  <Skeleton length={4} />
               ) : (
                  newArrivals
                     .slice(0, visibleData)
                     .map(item => <Card key={item.id} {...item} />)
               )}
            </div>
            {visibleData < newArrivals.length && (
               <div style={{ display: "flex", justifyContent: "center" }}>
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
