import React, { Suspense } from "react";

const LazyHomePage = React.lazy(() => import("./homePage/HomePage"));
const LazyProductPage = React.lazy(() => import("./productPage/ProductPage"));
const LazyNotFoundPage = React.lazy(() =>
   import("./notFoundPage/NotFoundPage"),
);

export function HomePage() {
   return (
      <Suspense fallback={<div className="loader"></div>}>
         <LazyHomePage />
      </Suspense>
   );
}

export function ProductPage() {
   return (
      <Suspense fallback={<div className="loader"></div>}>
         <LazyProductPage />
      </Suspense>
   );
}

export function NotFoundPage() {
   return (
      <Suspense fallback={<div className="loader"></div>}>
         <LazyNotFoundPage />
      </Suspense>
   );
}
