import {
   Product,
   Status,
} from "../../../modules/sections/newArrivals/slice/types";

export interface SaleProductsState {
   saleProducts: Product[]; // Array to store new arrival products
   status: Status; // Initial status of the request
   error: null | string; // Error message, if any
}
