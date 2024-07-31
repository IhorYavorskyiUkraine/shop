import { useSelector } from "react-redux";
import { RootState } from "../../../../store";

import { ProductCard } from "../productCard";

import styles from "./ProductsList.module.scss";

export const ProductsList: React.FC = () => {
   const { cart } = useSelector((state: RootState) => state.yourCartSlice);

   return (
      <div className={styles.wrapper}>
         <ul>
            {cart.map(item => (
               <ProductCard key={item.id} {...item} />
            ))}
         </ul>
      </div>
   );
};
