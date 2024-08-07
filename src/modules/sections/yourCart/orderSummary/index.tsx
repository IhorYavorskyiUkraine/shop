import { Button } from "../../../../ui/button/Button";
import { Input } from "../../../../ui/input/Input";

import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { useEffect, useState } from "react";

import promoImg from "/images/yourCart/promoImg.svg";
import arrow from "/images/yourCart/arrow.svg";

import styles from "./OrderSummary.module.scss";

export const OrderSummary: React.FC = () => {
   const { cart } = useSelector((state: RootState) => state.yourCartSlice);

   const [total, setTotal] = useState(0);

   const fee = 15;

   useEffect(() => {
      setTotal(cart.reduce((a, b) => a + b.price * b.quantity, 0));
   }, [cart]);

   return (
      <div
         className={styles.wrapper}
         data-aos="fade-left"
         data-aos-duration="500"
      >
         <h3>Order Summary</h3>
         <ul>
            <li>
               Subtotal <span>${total}</span>
            </li>
            <li>
               Discount -20%
               <span className={styles.discount}>-${total * 0.2}</span>
            </li>
            <li>
               Delivery Fee <span>${cart.length === 0 ? "0" : "15"}</span>
            </li>
         </ul>
         <h4>
            Total <span>${total - total * 0.2 + fee}</span>
         </h4>
         <div className={styles.promo}>
            <Input img={promoImg} placeholder="Add promo code" />
            <Button text="Apply" />
         </div>
         <Button
            text="Go to Checkout"
            img={arrow}
            className={styles.checkout}
         />
      </div>
   );
};
