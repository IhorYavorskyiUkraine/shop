import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setSelectedSize } from "../../slice/slice";

import { Sizes } from "../../slice/types";

import { selectorProductAbout } from "../../slice/slice";

import styles from "./SizeSelector.module.scss";

export function SizeSelector() {
   // Get the current product and selected size from the Redux store
   const { product, selectedSize } = useSelector(selectorProductAbout);

   // Initialize dispatch function
   const dispatch = useDispatch();

   // Reset selected size when the product changes
   useEffect(() => {
      if (!product) return;
      dispatch(setSelectedSize(product?.options.size[0]));
   }, [product, dispatch]);

   // Handle size button click to update selected size
   const handleSizeClick = (size: Sizes) => {
      dispatch(setSelectedSize(size));
   };

   return (
      <div className={styles.wrapper}>
         <p className="text">Choose Size</p>
         <div className={styles.buttons}>
            {/* Render size buttons */}
            {product?.options.size.map(size => (
               <button
                  key={size}
                  className={`${styles.button} ${
                     size === selectedSize ? styles.active : ""
                  }`}
                  onClick={() => handleSizeClick(size as Sizes)}
               >
                  <span className="text">{size}</span>
               </button>
            ))}
         </div>
      </div>
   );
}
