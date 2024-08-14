export type Filters = {
   category: string;
   price: number[];
   color: string;
   size: string;
   dressStyle: string;
};

export interface CategoriesState {
   filters: Filters;
}
