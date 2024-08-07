import { useSelector } from "react-redux";

import { selectorProductAbout } from "../../slice/slice";

import styles from "./ProductDetails.module.scss";

export const ProductDetails: React.FC = () => {
   // Retrieve product details from Redux store
   const { product } = useSelector(selectorProductAbout);

   // Extract product details
   const productDetails = product?.productDetails;

   return (
      <div
         className={styles.wrapper}
         data-aos="fade-up"
         data-aos-duration="500"
      >
         <h3>Product Details</h3>
         <dl>
            {/* Render product details if available */}
            {productDetails &&
               Object.entries(productDetails).map(([key, value]) => (
                  <div key={key}>
                     <dt>{key}</dt>
                     <div className={styles.line}></div>
                     <dd>{value}</dd>
                  </div>
               ))}
         </dl>
      </div>
   );
};
