import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTopSelling } from "../../../store/slice";

import { Card } from "../../../components/card/Card";
import { Skeleton } from "../../../components/skeleton/Skeleton";
import { Button } from "../../../ui/button/Button";

import styles from "./TopSelling.module.scss";

export function TopSelling() {
   const [visibleData, setVisibleData] = useState(4);

   const { topSelling, status, error } = useSelector(
      state => state.globalSlice,
   );

   const dispatch = useDispatch();

   const loadMore = () => {
      setVisibleData(prev => prev + 4);
   };

   useEffect(() => {
      dispatch(fetchTopSelling());
   }, [dispatch]);

   return (
      <section className={styles.topSelling}>
         <div className="container">
            <h2 className="title">New Arrivals</h2>
            <div className={styles.items}>
               {error && <h2>{error}</h2>}
               {status === "loading" ? (
                  <Skeleton length={4} />
               ) : (
                  topSelling
                     .slice(0, visibleData)
                     .map(item => <Card key={item.id} {...item} />)
               )}
            </div>
            {visibleData < topSelling.length && (
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
