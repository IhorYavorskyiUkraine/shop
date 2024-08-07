import React, { Suspense } from "react";

const LazyHomePage = React.lazy(() => import("./homePage/HomePage"));
const LazyProductPage = React.lazy(() => import("./productPage/ProductPage"));
const LazyCartPage = React.lazy(() => import("./cartPage/CartPage"));
const LazyOnSalePage = React.lazy(() => import("./onSalePage/OnSalePage"));
const LazyNotFoundPage = React.lazy(
   () => import("./notFoundPage/NotFoundPage"),
);

export const HomePage: React.FC = () => {
   return (
      <Suspense fallback={<div className="loader"></div>}>
         <LazyHomePage />
      </Suspense>
   );
};

export const ProductPage: React.FC = () => {
   return (
      <Suspense fallback={<div className="loader"></div>}>
         <LazyProductPage />
      </Suspense>
   );
};

export const CartPage: React.FC = () => {
   return (
      <Suspense fallback={<div className="loader"></div>}>
         <LazyCartPage />
      </Suspense>
   );
};

export const OnSalePage: React.FC = () => {
   return (
      <Suspense fallback={<div className="loader"></div>}>
         <LazyOnSalePage />
      </Suspense>
   );
};

export const NotFoundPage: React.FC = () => {
   return (
      <Suspense fallback={<div className="loader"></div>}>
         <LazyNotFoundPage />
      </Suspense>
   );
};
