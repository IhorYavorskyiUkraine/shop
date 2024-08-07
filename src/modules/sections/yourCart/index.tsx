import { ProductsList } from "./productsList";
import { OrderSummary } from "./orderSummary";
import { Breadcrumbs } from "../../../components/breadCrumbs";

import styles from "./YourCart.module.scss";

export const YourCart: React.FC = () => {
   return (
      <div className={styles.wrapper}>
         <div className="container">
            <Breadcrumbs />
            <h2 className="title">Your Cart</h2>
            <div className={styles.content}>
               <ProductsList />
               <OrderSummary />
            </div>
         </div>
      </div>
   );
};
