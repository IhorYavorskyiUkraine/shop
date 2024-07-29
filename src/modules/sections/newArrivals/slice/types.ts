export enum Status {
   LOADING = "loading",
   SUCCESS = "success",
   REJECTED = "rejected",
}

type Review = {
   id: string;
   rating: number;
   author: string;
   review: string;
   date: string;
};

type Faq = {
   question: string;
   answer: string;
};

type ColorOption = {
   color: string;
   images: string[];
};

type ProductDetails = {
   Material: string;
   CareInstructions: string;
   Fit?: string;
   Origin?: string;
};

export type Options = {
   size: string[];
   colors: ColorOption[];
};

export type Product = {
   description?: string;
   faq?: Faq;
   productDetails: ProductDetails;
   id: string;
   image: string;
   name: string;
   rating: number;
   discount: boolean;
   price: number;
   oldPrice: number;
   options: Options;
   reviews: Review[];
};

export interface NewArrivalsState {
   newArrivals: Product[];
   visibleData: number;
   status: Status;
   error: string | null;
}
