import { useSelector } from "react-redux";
import { useState } from "react";

import { Product } from "../../../newArrivals/slice/types";
import { RootState } from "../../../../../store";
import { Card } from "../../../../../components/card";

import styles from "./CategoriesList.module.scss";

type Props = {
   listToRender: Product[];
};

export const CategoriesList: React.FC<Props> = ({ listToRender }) => {
   const { filters } = useSelector((state: RootState) => state.CategoriesSlice);

   const [sort, setSort] = useState("Popularity");

   const filteredList = listToRender.filter((product: Product) => {
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
               <p>Showing 1-10 of {listToRender.length} Products</p>
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
            {sortedList.map((product: Product, i: number) => (
               <Card key={product.id} duration={300 + i * 100} {...product} />
            ))}
         </div>
      </div>
   );
};
