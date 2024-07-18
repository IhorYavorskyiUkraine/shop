import { useSelector, useDispatch } from "react-redux";
import { Rating } from "react-simple-star-rating";

import { ColorSelector } from "../../colorSelector";
import { SizeSelector } from "../../sizeSelector";
import { AddToCart } from "../../addToCart";

import { selectorProductAbout } from "../../../slice/slice";

import styles from "./Right.module.scss";

export function Right() {
   const { product, status, error } = useSelector(selectorProductAbout);

   return (
      <div className={styles.wrapper}>
         <div className={styles.info}>
            <h1 className="title">{product?.name}</h1>
         </div>
         <div className={styles.rating}>
            <Rating
               readonly
               allowFraction
               size={24}
               initialValue={product?.rating}
            />
            <p>{product?.rating}/5</p>
         </div>
         <div className={styles.priceWrapper}>
            <p className={styles.price}>${product?.price}</p>
            {product?.oldPrice > 0 && (
               <p className={styles.oldPrice}>${product?.oldPrice}</p>
            )}
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
         <p className={styles.description}>{product?.description}</p>
         <ColorSelector />
         <SizeSelector />
         <AddToCart />
      </div>
   );
}
