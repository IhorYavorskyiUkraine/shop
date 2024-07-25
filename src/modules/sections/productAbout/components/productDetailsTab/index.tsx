import { useSelector } from "react-redux";

import { selectorProductAbout } from "../../slice/slice";

import styles from "./ProductDetails.module.scss";

export const ProductDetails: React.FC = () => {
   const { product } = useSelector(selectorProductAbout);

   const productDetails = product?.productDetails;

   return (
      <div className={styles.wrapper}>
         <h3>Product Details</h3>
         <dl>
            {productDetails &&
               Object.entries(productDetails).map(([key, value]) => (
                  <div key={key}>
                     <dt>{key}</dt> <div className={styles.line}></div>
                     <dd>{value}</dd>
                  </div>
               ))}
         </dl>
      </div>
   );
};
