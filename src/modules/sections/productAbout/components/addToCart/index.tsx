import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../../../store";
import { useParams } from "react-router-dom";

import { setQuantity } from "../../slice/slice";
import { selectorProductAbout } from "../../slice/slice";

import { addToCart } from "../../../yourCart/slice/slice";
import { postAddToCart } from "../../slice/slice";

import { CartProduct } from "../../../yourCart/slice/types";

import styles from "./AddToCart.module.scss";

export const AddToCart: React.FC = () => {
   // Retrieve current quantity from Redux store
   const { product, quantity, selectedSize, color, activeIndex } =
      useSelector(selectorProductAbout);

   const { cart } = useSelector((state: RootState) => state.yourCartSlice);

   const dispatch = useAppDispatch();

   const { id } = useParams();

   // Decrease quantity if greater than 0
   const handleDecrement = () => {
      quantity > 0 && dispatch(setQuantity(quantity - 1));
   };

   // Increase quantity
   const handleIncrement = () => {
      dispatch(setQuantity(quantity + 1));
   };

   const addToProductsCart = async () => {
      if (quantity === 0) {
         dispatch(setQuantity(1));
      }

      if (id && product) {
         const name = product?.name ?? "";
         const price = product?.price ?? 0;
         const oldPrice = product?.oldPrice ?? 0;
         const discount = product?.discount ?? false;
         const image = product?.options.colors[activeIndex]?.images[0] ?? "";
         const size = (selectedSize || product?.options.size[0]) ?? "";
         const productColor =
            (color || product?.options.colors[0]?.color) ?? "";

         const productObj: CartProduct = {
            realId: id,
            id: id,
            name,
            price,
            oldPrice,
            discount,
            image,
            size,
            color: productColor,
            quantity: quantity || 1,
         };

         const isProductInCart = cart.some(
            item =>
               item.realId === productObj.realId &&
               item.color === productObj.color &&
               item.size === productObj.size,
         );

         if (isProductInCart) {
            alert("Товар уже добавлен в корзину");
            return;
         }

         try {
            dispatch(addToCart(productObj));
            await dispatch(postAddToCart(productObj));
         } catch {
            alert("Произошла ошибка при добавлении в корзину");
         }
      }
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
         <button className={styles.addToCart} onClick={addToProductsCart}>
            Add to Cart
         </button>
      </div>
   );
};
