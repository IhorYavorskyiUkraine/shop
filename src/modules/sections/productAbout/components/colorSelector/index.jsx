import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setActiveIndex } from "../../slice/slice";
import { setColor, setColorList } from "../../slice/slice";

import { selectorProductAbout } from "../../slice/slice";

import styles from "./ColorSelector.module.scss";

export function ColorSelector() {
   const { product, colorList, activeIndex } =
      useSelector(selectorProductAbout);

   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(setColorList(product?.options.colors.map(color => color.color)));
      dispatch(setActiveIndex(0));
   }, [product]);

   const handleColorClick = (color, i) => {
      dispatch(setColor(color));
      dispatch(setActiveIndex(i));
   };

   return (
      <div className={styles.wrapper}>
         <p className="text">Select Colors</p>
         <div className={styles.buttons}>
            {colorList?.map((color, i) => (
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
}
