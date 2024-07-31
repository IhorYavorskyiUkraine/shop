import { ProductsList } from "./productsList";

import styles from "./YourCart.module.scss";

export const YourCart: React.FC = () => {
   return (
      <div className={styles.wrapper}>
         <h2 className="title">Your Cart</h2>
         <ProductsList />
      </div>
   );
};
