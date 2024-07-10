import { Popup } from "../../components/popup";
import { Header } from "../../components/header/Header";
import { ProductAbout } from "../../modules/sections/productAbout";

import { Footer } from "../../components/footer/Footer";

import { ErrorBoundary } from "react-error-boundary";

function ProductPage() {
   return (
      <div className="wrapper">
         <Popup />
         <Header />
         <ProductAbout />
         <Footer />
      </div>
   );
}

export default ProductPage;
