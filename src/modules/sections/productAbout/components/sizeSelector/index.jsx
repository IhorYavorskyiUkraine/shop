import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setSelectedSize } from "../../slice/slice";

import { selectorProductAbout } from "../../slice/slice";

import styles from "./SizeSelector.module.scss";

export function SizeSelector() {
   const { product, selectedSize } = useSelector(selectorProductAbout);

   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(setSelectedSize(product?.options.size[0]));
   }, [product]);

   const handleSizeClick = size => {
      dispatch(setSelectedSize(size));
   };

   return (
      <div className={styles.wrapper}>
         <p className="text">Choose Size</p>
         <div className={styles.buttons}>
            {product?.options.size.map(size => (
               <button
                  key={size}
                  className={`${styles.button} ${
                     size === selectedSize ? styles.active : ""
                  }`}
                  onClick={() => handleSizeClick(size)}
               >
                  <span className="text">{size}</span>
               </button>
            ))}
         </div>
      </div>
   );
}
