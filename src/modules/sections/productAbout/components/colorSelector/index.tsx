import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setActiveIndex } from "../../slice/slice";
import { setColor, setColorList } from "../../slice/slice";

import { selectorProductAbout } from "../../slice/slice";

import styles from "./ColorSelector.module.scss";

export const ColorSelector: React.FC = () => {
   const { product, colorList, activeIndex } =
      useSelector(selectorProductAbout);

   const dispatch = useDispatch();

   useEffect(() => {
      const colorList = product?.options.colors;

      if (colorList) {
         const colors = colorList.map(color => color.color);
         dispatch(setColorList(colors));
         dispatch(setActiveIndex(0));
      }
   }, [product]);

   const handleColorClick = (color: string, i: number) => {
      dispatch(setColor(color));
      dispatch(setActiveIndex(i));
   };

   return (
      <div className={styles.wrapper}>
         <p className="text">Select Colors</p>
         <div className={styles.buttons}>
            {colorList?.map((color, i: number) => (
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
