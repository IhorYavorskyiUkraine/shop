import { ProductsList } from "./productsList";
import { OrderSummary } from "./orderSummary";

import { RootState } from "../../../store";
import { useSelector } from "react-redux";

import styles from "./YourCart.module.scss";

export const YourCart: React.FC = () => {
   const { cart } = useSelector((state: RootState) => state.yourCartSlice);

   return (
      <div className={styles.wrapper}>
         <div className="container">
            <h2 className="title">Your Cart</h2>
            <div className={styles.content}>
               <ProductsList cart={cart} />
               <OrderSummary cart={cart} />
            </div>
         </div>
      </div>
   );
};
