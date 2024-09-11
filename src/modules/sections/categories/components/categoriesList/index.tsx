import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../../../store";
import { useState, useEffect } from "react";

import { Card } from "../../../../../components/card";

import { Product } from "../../../newArrivals/slice/types";
import { RootState } from "../../../../../store";
import { fetchCategoriesList } from "../../slice/slice";

import styles from "./CategoriesList.module.scss";
import { Skeleton } from "../../../../../components/skeleton";

type Props = {
   link: string;
};

export const CategoriesList: React.FC<Props> = ({ link }) => {
   const { filters, categoriesList, status } = useSelector(
      (state: RootState) => state.categoriesSlice,
   );

   const [sort, setSort] = useState("Popularity");

   const dispatch = useAppDispatch();

   useEffect(() => {
      dispatch(fetchCategoriesList({ link }));
   }, []);

   const filteredList = categoriesList.filter((product: Product) => {
      const isCategoryMatch =
         filters.category === "" || product.category === filters.category;

      const isPriceMatch =
         product.price >= filters.price[0] && product.price <= filters.price[1];

      const isColorMatch =
         filters.color === "" ||
         product.options.colors.some(color => color.color === filters.color);

      const isSizeMatch =
         filters.size === "" || product.options.size.includes(filters.size);

      return isCategoryMatch && isPriceMatch && isColorMatch && isSizeMatch;
   });

   const sortedList = filteredList.sort((a: Product, b: Product) => {
      switch (sort) {
         case "Popularity":
            return b.rating - a.rating;
         case "Price: High to Low":
            return b.price - a.price;
         case "Price: Low to High":
            return a.price - b.price;
         default:
            return 0;
      }
   });

   const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSort(e.target.value);
   };

   return (
      <div className={styles.wrapper}>
         <div className={styles.top}>
            <h2>{filters.dressStyle === "" ? "All" : filters.dressStyle}</h2>
            <div className={styles.sort}>
               <p>Showing 1-10 of {categoriesList.length} Products</p>
               <div>
                  <p>Sort by:</p>
                  <select value={sort} onChange={handleSortChange}>
                     <option>Popularity</option>
                     <option>Price: High to Low</option>
                     <option>Price: Low to High</option>
                  </select>
               </div>
            </div>
         </div>
         <div className={styles.list}>
            {status === "loading" ? (
               <Skeleton length={10} />
            ) : (
               sortedList.map((product: Product, i: number) => (
                  <Card
                     key={product.id}
                     duration={300 + i * 100}
                     {...product}
                  />
               ))
            )}
         </div>
      </div>
   );
};
