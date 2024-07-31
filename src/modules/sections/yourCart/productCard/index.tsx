import { useDispatch } from "react-redux";

import { setQuantity } from "../../productAbout/slice/slice";

import { Sizes } from "../../productAbout/slice/types";

import deleteImg from "/images/yourCart/img.svg";

import styles from "./ProductCard.module.scss";
import { useState } from "react";

type Props = {
   image: string;
   name: string;
   size: Sizes;
   color: string;
   price: number;
   quantity: number;
};

export const ProductCard: React.FC<Props> = ({
   image,
   name,
   size,
   color,
   price,
   quantity,
}) => {
   const [localQuantity, setLocalQuantity] = useState(quantity);

   const dispatch = useDispatch();

   const handleDecrement = () => {
      if (localQuantity > 0) {
         const newQuantity = localQuantity - 1;
         setLocalQuantity(newQuantity);
         dispatch(setQuantity(newQuantity));
      }
   };

   // Increase quantity
   const handleIncrement = () => {
      const newQuantity = localQuantity + 1;
      setLocalQuantity(newQuantity);
      dispatch(setQuantity(newQuantity));
   };

   return (
      <div className={styles.wrapper}>
         <img src={image} alt="productImage" />
         <div>
            <h3>{name}</h3>
            <p>Size: {size}</p>
            <p>Color: {color}</p>
            <p>Price: ${price}</p>
         </div>
         <div>
            <button>
               <img src={deleteImg} alt="deleteImg" />
            </button>
            <div className={styles.quantity}>
               <button
                  className={styles.decrement}
                  onClick={handleDecrement}
               ></button>
               <p>{localQuantity}</p>
               <button
                  className={styles.increment}
                  onClick={handleIncrement}
               ></button>
            </div>
         </div>
      </div>
   );
};
