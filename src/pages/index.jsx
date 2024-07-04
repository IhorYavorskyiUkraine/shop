import React, { Suspense } from "react";

const LazyHomePage = React.lazy(() => import("./homePage/HomePage"));
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

export function NotFoundPage() {
   return (
      <Suspense fallback={<div className="loader"></div>}>
         <LazyNotFoundPage />
      </Suspense>
   );
}
