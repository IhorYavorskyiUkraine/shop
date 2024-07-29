import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setActiveImage } from "../../../slice/slice";
import { selectorProductAbout } from "../../../slice/slice";

import styles from "./Left.module.scss";

export const Left: React.FC = () => {
   // Retrieve product details, active image index, and status from Redux store
   const { product, activeIndex, activeImage, status, error } =
      useSelector(selectorProductAbout);

   // Get the list of images for the currently selected color
   const images = product?.options.colors[activeIndex].images;

   const dispatch = useDispatch();

   // Set the default active image to the first one when the component mounts
   useEffect(() => {
      dispatch(setActiveImage(0));
   }, [dispatch]);

   return (
      <div className={styles.wrapper}>
         <div className={styles.side}>
            {/* Render thumbnail images and handle click events to update the active image */}
            {images?.map((image, i) => (
               <div
                  key={i}
                  onClick={() => dispatch(setActiveImage(i))}
                  className={`${styles.img} ${
                     activeImage === i ? styles.active : ""
                  }`}
               >
                  <img src={image} alt={`Product Image ${i}`} />
               </div>
            ))}
         </div>
         <div className={styles.mainImg}>
            {/* Render the currently active main image */}
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
