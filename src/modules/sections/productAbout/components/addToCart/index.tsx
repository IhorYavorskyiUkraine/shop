import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setQuantity } from "../../slice/slice";
import { selectorProductAbout } from "../../slice/slice";

import styles from "./AddToCart.module.scss";

export const AddToCart: React.FC = () => {
   // Retrieve current quantity from Redux store
   const { quantity } = useSelector(selectorProductAbout);
   const dispatch = useDispatch();

   // Decrease quantity if greater than 0
   const handleDecrement = () => {
      quantity > 0 && dispatch(setQuantity(quantity - 1));
   };

   // Increase quantity
   const handleIncrement = () => {
      dispatch(setQuantity(quantity + 1));
   };

   // Set quantity based on input change
   const handleChange = (e: number) => {
      dispatch(setQuantity(e));
   };

   // Initialize quantity to 0 on component mount
   useEffect(() => {
      dispatch(setQuantity(0));
   }, [dispatch]);

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
