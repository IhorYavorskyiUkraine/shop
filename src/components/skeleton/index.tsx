import React from "react";
import ContentLoader from "react-content-loader";

// Define props type for the Skeleton component
type Props = {
   length: number; // Number of skeleton loaders to display
};

// Skeleton component for displaying loading placeholders
export const Skeleton: React.FC<Props> = ({ length }) => {
   // Define the loader shape and style
   const MyLoader = () => {
      return (
         <ContentLoader
            speed={2} // Animation speed
            width={294} // Width of the loader
            height={404} // Height of the loader
            viewBox="0 0 294 404" // SVG viewbox dimensions
            backgroundColor="#f3f3f3" // Background color
            foregroundColor="#ecebeb" // Foreground color
         >
            {/* Rectangle for image placeholder */}
            <rect x="0" y="0" rx="20" ry="20" width="296" height="296" />
            {/* Rectangles for text placeholders */}
            <rect x="0" y="305" rx="10" ry="10" width="296" height="26" />
            <rect x="0" y="340" rx="10" ry="10" width="165" height="26" />
            <rect x="0" y="375" rx="10" ry="10" width="165" height="26" />
         </ContentLoader>
      );
   };

   // Render multiple loaders based on the length prop
   return Array.from({ length: length }).map((_, index: number) => (
      <MyLoader key={index} />
   ));
};
