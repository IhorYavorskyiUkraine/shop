import { Product, Status } from "../../newArrivals/slice/types";

export type Filters = {
   category: string;
   price: number[];
   color: string;
   size: string;
   dressStyle: string;
};

export interface CategoriesState {
   categoriesList: Product[]; // Array to store new arrival products
   filters: Filters;
   status: Status; // Initial status of the request
   error: null; // Error state, initially null
}
