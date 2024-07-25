import { Popup } from "../../components/popup";
import { Header } from "../../components/header/Header";
import { ProductAbout } from "../../modules/sections/productAbout";

import { Footer } from "../../components/footer/Footer";

import { ErrorBoundary } from "react-error-boundary";

const ProductPage: React.FC = () => {
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
            <ProductAbout />
         </ErrorBoundary>
         <Footer />
      </div>
   );
};

export default ProductPage;
