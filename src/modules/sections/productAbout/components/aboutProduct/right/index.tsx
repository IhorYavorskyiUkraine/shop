import { useSelector } from "react-redux";
import { Rating } from "react-simple-star-rating";

import { ColorSelector } from "../../colorSelector";
import { SizeSelector } from "../../sizeSelector/index";
import { AddToCart } from "../../addToCart";

import { selectorProductAbout } from "../../../slice/slice";

import styles from "./Right.module.scss";

export const Right: React.FC = () => {
   // Retrieve product information and state from Redux store
   const { product, status, error } = useSelector(selectorProductAbout);

   return (
      <div
         className={styles.wrapper}
         data-aos="fade-left"
         data-aos-duration="500"
      >
         <div className={styles.info}>
            {/* Display the product name */}
            <h1 className="title">{product?.name}</h1>
         </div>
         <div className={styles.rating}>
            {/* Display product rating using react-simple-star-rating */}
            <Rating
               readonly
               allowFraction
               size={24}
               initialValue={product?.rating}
            />
            <p>{product?.rating}/5</p>
         </div>
         <div className={styles.priceWrapper}>
            {/* Display the product price */}
            <p className={styles.price}>${product?.price}</p>
            {/* Display old price if it exists and is greater than 0 */}
            {product?.oldPrice !== undefined && product?.oldPrice > 0 && (
               <p className={styles.oldPrice}>${product?.oldPrice}</p>
            )}
            {/* Display discount percentage if discount exists */}
            {product?.discount && (
               <div className={styles.discount}>
                  <p>
                     {Math.floor(
                        ((product?.price - product?.oldPrice) /
                           product?.oldPrice) *
                           100,
                     )}
                     %
                  </p>
               </div>
            )}
         </div>
         {/* Display product description */}
         <p className={styles.description}>{product?.description}</p>
         {/* Render ColorSelector, SizeSelector, and AddToCart components */}
         <ColorSelector />
         <SizeSelector />
         <AddToCart />
      </div>
   );
};
