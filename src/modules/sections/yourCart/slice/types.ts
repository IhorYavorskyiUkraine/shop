import { Status } from "../../newArrivals/slice/types";

export type CartProduct = {
   realId: number | string;
   id: number | string;
   name: string;
   price: number;
   oldPrice: number;
   discount: boolean;
   image: string;
   size: string;
   color: string;
   quantity: number;
};

export interface YourCartState {
   cart: CartProduct[];
   status: Status;
   error: string | null;
}
