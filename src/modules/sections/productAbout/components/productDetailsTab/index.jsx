import { useSelector } from "react-redux";

import { selectorProductAbout } from "../../slice/slice";

import styles from "./ProductDetails.module.scss";

export function ProductDetails() {
   const { product } = useSelector(selectorProductAbout);

   return (
      <div className={styles.wrapper}>
         <h3>Product Details</h3>
         <dl>
            {Object.entries(product.productDetails).map(([key, value]) => (
               <div key={key}>
                  <dt>{key}</dt> <div className={styles.line}></div>
                  <dd>{value}</dd>
               </div>
            ))}
         </dl>
      </div>
   );
}
