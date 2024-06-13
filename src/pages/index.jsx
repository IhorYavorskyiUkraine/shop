import React, { Suspense } from "react";

const LazyHomePage = React.lazy(() => import("./homePage/HomePage"));

export const HomePage = () => {
   return (
      <Suspense fallback={<div className="loader"></div>}>
         <LazyHomePage />
      </Suspense>
   );
};
