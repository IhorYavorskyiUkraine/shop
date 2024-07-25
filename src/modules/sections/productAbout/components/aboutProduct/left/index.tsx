import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setActiveImage } from "../../../slice/slice";

import { selectorProductAbout } from "../../../slice/slice";

import styles from "./Left.module.scss";

export const Left: React.FC = () => {
   const { product, activeIndex, activeImage, status, error } =
      useSelector(selectorProductAbout);

   const images = product?.options.colors[activeIndex].images;

   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(setActiveImage(0));
   }, []);

   return (
      <div className={styles.wrapper}>
         <div className={styles.side}>
            {images?.map((image, i) => (
               <div
                  key={i}
                  onClick={() => dispatch(setActiveImage(i))}
                  className={`${styles.img} + ${
                     activeImage === i ? styles.active : ""
                  }`}
               >
                  <img src={image} alt="Product Image" />
               </div>
            ))}
         </div>
         <div className={styles.mainImg}>
            {
               <img
                  src={product?.options.colors[activeIndex].images[activeImage]}
                  alt="main"
               />
            }
         </div>
      </div>
   );
};
