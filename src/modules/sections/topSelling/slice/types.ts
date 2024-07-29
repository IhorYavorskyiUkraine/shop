import { Product } from "../../newArrivals/slice/types";

export interface TopSellingState {
   topSelling: Product[];
   visibleData: number;
   status: "loading" | "success" | "rejected";
   error: string | null;
}
