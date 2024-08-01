import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setActiveIndex, setColor, setColorList } from "../../slice/slice";

import { selectorProductAbout } from "../../slice/slice";

import styles from "./ColorSelector.module.scss";

export const ColorSelector: React.FC = () => {
   const { product, colorList, activeIndex } =
      useSelector(selectorProductAbout);
   const dispatch = useDispatch();

   // Update color list and reset active index when product changes
   useEffect(() => {
      const colors = product?.options.colors?.map(color => color.color);
      if (colors) {
         dispatch(setColorList(colors));
         dispatch(setActiveIndex(0));
         dispatch(setColor(colors[0]));
      }
   }, [product, dispatch]);

   // Handle color button click
   const handleColorClick = (color: string, i: number) => {
      dispatch(setColor(color));
      dispatch(setActiveIndex(i));
   };

   return (
      <div className={styles.wrapper}>
         <p className="text">Select Colors</p>
         <div className={styles.buttons}>
            {/* Render color buttons */}
            {colorList?.map((color: string, i: number) => (
               <button
                  key={color}
                  onClick={() => handleColorClick(color, i)}
                  style={{ backgroundColor: color }}
                  className={`${styles.changeColor} ${
                     i === activeIndex ? styles.active : ""
                  }`}
               >
                  {i === activeIndex && (
                     <span
                        className={`${styles.checkmark} ${
                           color === "#fff" ? styles.checkmarkBlack : ""
                        }`}
                     ></span>
                  )}
               </button>
            ))}
         </div>
      </div>
   );
};
