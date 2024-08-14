export interface ASideCatalogState {
   range: number[];
   activeTabs: { [key: number]: boolean };
   activeIndex: number;
   category: string;
   price: number[];
   color: string;
   size: string;
   dressStyle: string;
   filters: object;
}
