import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchProduct } from "../../../store/slice";

import { Breadcrumbs } from "../../../components/breadCrumbs";

import styles from "./ProductAbout.module.scss";

export function ProductAbout() {
   const { product, status, error } = useSelector(state => state.global);

   const dispatch = useDispatch();

   const { id } = useParams();

   useEffect(() => {
      dispatch(fetchProduct({ id }));
   }, []);

   return (
      <div className={styles.wrapper}>
         <div className="container">
            {error && <h2>{error}</h2>}
            <Breadcrumbs />
            <div>
               <div className={styles.left}>
                  <ul>
                     {product?.options.size.map(item => {
                        return <li key={item}>{item}</li>;
                     })}
                  </ul>
               </div>
               <div className={styles.right}></div>
            </div>
            <div className={styles.tabs}></div>
            <div className={styles.recomended}></div>
         </div>
      </div>
   );
}
