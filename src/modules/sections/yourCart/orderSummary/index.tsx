import { Button } from "../../../../ui/button/Button";

import styles from "./OrderSummary.module.scss";
import { CartProduct } from "../slice/types";

type Props = {
   cart: CartProduct[];
};

export const OrderSummary: React.FC<Props> = ({ cart }) => {
   const total = cart.reduce((a, b) => a + b.price, 0);
   const discount = cart.some(item => item.discount);

   return (
      <div className={styles.wrapper}>
         <h3>Order Summary</h3>
         <ul>
            <li>
               Subtotal <span>${total}</span>
            </li>
            {discount && (
               <li>
                  Discount -20%<span>-${total * 0.2}</span>
               </li>
            )}
            <li>
               Delivery Fee <span>${cart.length === 0 ? "0" : "15"}</span>
            </li>
         </ul>
         <h4>
            Total <span>${total - (discount ? total * 0.2 : 0) + 15}</span>
         </h4>
         <form action="">
            <input type="text" />
            <Button text="Apply" />
         </form>
         <Button text="Checkout" />
      </div>
   );
};
