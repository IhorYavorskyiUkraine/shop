import { useEffect } from "react";

import { Popup } from "../../components/popup";
import { Header } from "../../components/header/Header";
import { Categories } from "../../modules/sections/categories";
import { Footer } from "../../components/footer/Footer";
import { ErrorBoundary } from "react-error-boundary";

const OnSalePage: React.FC = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   return (
      <div className="wrapper">
         <Popup />
         <Header />
         <ErrorBoundary
            fallback={
               <img
                  className="errorBoundary"
                  src="https://media1.tenor.com/m/ZvLReph5qCIAAAAC/skill-issue.gif"
               />
            }
         >
            <Categories link="https://66bc550724da2de7ff6a0f6d.mockapi.io/on_sale/items" />
         </ErrorBoundary>
         <Footer />
      </div>
   );
};

export default OnSalePage;
