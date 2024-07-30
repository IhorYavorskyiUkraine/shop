import { Product } from "../../newArrivals/slice/types";

export interface YouMightAlsoLikeState {
   youMightAlsoLike: Product[];
   status: "loading" | "success" | "rejected";
   error: string | null;
}
