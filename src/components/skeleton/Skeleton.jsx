import React from "react";
import ContentLoader from "react-content-loader";

export function Skeleton({ length }) {
   const MyLoader = props => {
      return (
         <ContentLoader
            speed={2}
            width={294}
            height={404}
            viewBox="0 0 294 404"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            {...props}
         >
            <rect x="0" y="0" rx="20" ry="20" width="296" height="296" />
            <rect x="0" y="305" rx="10" ry="10" width="296" height="26" />
            <rect x="0" y="340" rx="10" ry="10" width="165" height="26" />
            <rect x="0" y="375" rx="10" ry="10" width="165" height="26" />
         </ContentLoader>
      );
   };

   return Array.from({ length: length }).map((_, index) => (
      <MyLoader key={index} />
   ));
}
