import { ProductCard } from "../productCard";
import { CartProduct } from "../slice/types";

import styles from "./ProductsList.module.scss";

type Props = {
   cart: CartProduct[];
};

export const ProductsList: React.FC<Props> = ({ cart }) => {
   return (
      <div className={styles.wrapper}>
         {cart.length === 0 && <div>CART IS EMPTY</div>}
         {cart.length > 0 && (
            <div className={styles.items}>
               {cart.map(item => (
                  <ProductCard key={item.id} {...item} />
               ))}
            </div>
         )}
      </div>
   );
};
