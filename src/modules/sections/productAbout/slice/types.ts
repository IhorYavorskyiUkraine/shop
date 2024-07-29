import { Product, Status } from "../../newArrivals/slice/types";

export type Tabs = "Product Details" | "Rating & Reviews" | "FAQs";
export type FetchProductArgs = {
   id: string;
};
export type Sizes = "" | "s" | "m" | "l" | "xl";
export type ActiveTab =
   | "Product Details"
   | "Rating & Reviews"
   | "FAQs"
   | string;
export type SelectedFilter = "all" | "latest" | "newest";

export type Option = {
   value: SelectedFilter;
   label: string;
};

export interface ProductAboutState {
   product: Product | null;
   selectedSize: Sizes;
   color: string;
   colorList: string[];
   quantity: number;
   activeImage: number;
   activeIndex: number;
   activeTab: ActiveTab;
   selectedFilter: SelectedFilter;
   formStatus: boolean;
   formRating: number;
   formAuthor: string;
   formText: string;
   status: Status;
   error: string | null;
}
