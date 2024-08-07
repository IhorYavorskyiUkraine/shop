import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { ProductCard } from "../productCard";
import { CartProduct } from "../slice/types";

import styles from "./ProductsList.module.scss";

export const ProductsList: React.FC = () => {
   const { cart } = useSelector((state: RootState) => state.yourCartSlice);

   return (
      <div
         className={styles.wrapper}
         data-aos="fade-right"
         data-aos-duration="500"
      >
         {cart.length === 0 && <div>CART IS EMPTY</div>}
         {cart.length > 0 && (
            <div className={styles.items}>
               {cart.map((item: CartProduct) => (
                  <ProductCard key={item.id} {...item} />
               ))}
            </div>
         )}
      </div>
   );
};
