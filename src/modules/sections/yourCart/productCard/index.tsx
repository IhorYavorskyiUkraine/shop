import { useState } from "react";
import { useAppDispatch } from "../../../../store";

import { deleteFromCart } from "../slice/slice";
import { setQuantity } from "../../productAbout/slice/slice";
import { fetchDeleteProduct } from "../slice/slice";
import { putQuantity } from "../slice/slice";

import { Sizes } from "../../productAbout/slice/types";

import deleteImg from "/images/yourCart/img.svg";

import styles from "./ProductCard.module.scss";

type Props = {
   id: string;
   realId: string;
   image: string;
   name: string;
   size: Sizes;
   color: string;
   price: number;
   quantity: number;
};

export const ProductCard: React.FC<Props> = ({
   id,
   realId,
   image,
   name,
   size,
   color,
   price,
   quantity,
}) => {
   const [localQuantity, setLocalQuantity] = useState(quantity);

   const dispatch = useAppDispatch();

   const handleDecrement = (
      id: string,
      realId: string,
      color: string,
      size: Sizes,
   ) => {
      if (localQuantity > 0) {
         const newQuantity = localQuantity - 1;
         setLocalQuantity(newQuantity);
         dispatch(setQuantity(newQuantity));
         dispatch(putQuantity({ id, quantity: newQuantity }));
      } else {
         dispatch(deleteFromCart({ realId, color, size }));
         dispatch(fetchDeleteProduct({ id, realId, color, size }));
      }
   };

   const deleteProduct = (
      id: string,
      realId: string,
      color: string,
      size: Sizes,
   ) => {
      if (realId) {
         dispatch(deleteFromCart({ realId, color, size }));
         dispatch(fetchDeleteProduct({ id, realId, color, size }));
      }
   };

   // Increase quantity
   const handleIncrement = () => {
      const newQuantity = localQuantity + 1;
      setLocalQuantity(newQuantity);
      dispatch(setQuantity(newQuantity));
      dispatch(putQuantity({ id, quantity: newQuantity }));
   };

   return (
      <div className={styles.wrapper}>
         <div className={styles.image}>
            <img src={image} alt="productImage" />
         </div>
         <div className={styles.info}>
            <div className={styles.top}>
               <h3>{name}</h3>
               <button
                  onClick={() => id && deleteProduct(id, realId, color, size)}
                  className={styles.delete}
               >
                  <img src={deleteImg} alt="deleteImg" />
               </button>
            </div>
            <p>Size: {size}</p>
            <p>Color: {color}</p>
            <div className={styles.bottom}>
               <p className={styles.price}>${price}</p>
               <div className={styles.quantity}>
                  <button
                     className={styles.decrement}
                     onClick={() =>
                        id && handleDecrement(id, realId, color, size)
                     }
                  ></button>
                  <p>{localQuantity}</p>
                  <button
                     className={styles.increment}
                     onClick={handleIncrement}
                  ></button>
               </div>
            </div>
         </div>
      </div>
   );
};
