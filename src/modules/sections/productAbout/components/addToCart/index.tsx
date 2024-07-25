import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setQuantity } from "../../slice/slice";

import { selectorProductAbout } from "../../slice/slice";

import styles from "./AddToCart.module.scss";

export const AddToCart: React.FC = () => {
   const { quantity } = useSelector(selectorProductAbout);

   const dispatch = useDispatch();

   const handleDecrement = () => {
      quantity > 0 && dispatch(setQuantity(quantity - 1));
   };

   const handleIncrement = () => {
      dispatch(setQuantity(quantity + 1));
   };

   const handleChange = (e: number) => {
      dispatch(setQuantity(e));
   };

   useEffect(() => {
      dispatch(setQuantity(0));
   }, []);

   return (
      <div className={styles.wrapper}>
         <div className={styles.quantity}>
            <button
               className={styles.decrement}
               onClick={handleDecrement}
            ></button>
            <p>{quantity}</p>
            <button
               className={styles.increment}
               onClick={handleIncrement}
            ></button>
         </div>
         <button className={styles.addToCart}>Add to Cart</button>
      </div>
   );
};
