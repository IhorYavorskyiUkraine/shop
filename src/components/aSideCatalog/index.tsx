import { useState } from "react";

import { RangeSlider } from "../../ui/rangeSlider";

import styles from "./ASideCatalog.module.scss";

export const ASideCatalog: React.FC = () => {
   const [range, setRange] = useState<number[]>([0, 250]);
   const [price, setPrice] = useState<boolean>(false);
   const [colors, setColors] = useState<boolean>(false);
   const [size, setSize] = useState<boolean>(false);
   const [dressStyle, setDressStyle] = useState<boolean>(false);

   const categories = ["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"];
   const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
   const dressStyles = ["Casual", "Formal", "Party", "Gym"];

   return (
      <div className={styles.wrapper}>
         <div>
            <h4>Filters</h4>
            {/* <img src={} alt="" /> */}
         </div>
         <div>{categories.map(item => item)}</div>
         <div>
            <div onClick={() => setPrice(!price)}>
               <h4>Price</h4>
               {/* <img src={} alt=""/> */}
            </div>
            {price && (
               <RangeSlider
                  min={0}
                  max={250}
                  step={1}
                  value={range}
                  isShowTooltip={true}
               />
            )}
         </div>
         <div>
            <div onClick={() => setSize(!size)}>
               <h4>Size</h4>
               {/* <img src={} alt=""/> */}
            </div>
            {size && <>{sizes.map(item => item)}</>}
         </div>{" "}
         <div>
            <div onClick={() => setDressStyle(!dressStyle)}>
               <h4>Dress Style</h4>
               {/* <img src={} alt=""/> */}
            </div>
            {dressStyle && <>{dressStyles.map(item => item)}</>}
         </div>
      </div>
   );
};
