import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchItems } from "../../../store/slice";

import styles from "./NewArrivals.module.scss";

export function NewArrivals() {
   const { newArrivals, status } = useSelector(state => state.globalSlice);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(fetchItems());
   }, []);

   return (
      <section>
         {status === "loading" ? (
            <div>Loading...</div>
         ) : (
            newArrivals.map(item => {
               return <div>{item.name}</div>;
            })
         )}
      </section>
   );
}
