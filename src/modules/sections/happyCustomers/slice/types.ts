import { Status } from "../../newArrivals/slice/types";

export type Review = {
   id: string;
   author: string;
   rating: number;
   review: string;
   date?: string;
};

export interface HappyCustomersState {
   reviews: Review[];
   status: Status;
   error: string | null;
}
