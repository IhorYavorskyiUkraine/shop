import { Popup } from "../../components/popup";
import { Header } from "../../components/header/Header";
import { ProductAbout, YouMightAlsoLike } from "../../modules";

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
         <ErrorBoundary
            fallback={
               <img
                  className="errorBoundary"
                  src="https://media1.tenor.com/m/ZvLReph5qCIAAAAC/skill-issue.gif"
               />
            }
         >
            <YouMightAlsoLike />
         </ErrorBoundary>
         <Footer />
      </div>
   );
};

export default ProductPage;
