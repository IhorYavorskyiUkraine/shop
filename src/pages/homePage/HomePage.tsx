import { Popup } from "../../components/popup";
import { Header } from "../../components/header/Header";
import { HeroSection } from "../../modules/sections/hero";
import { BrandsSection } from "../../modules/sections/brands";
import { NewArrivals } from "../../modules/sections/newArrivals";
import { TopSelling } from "../../modules/sections/topSelling";
import { BrowseStyle } from "../../modules/sections/browseStyle";
import { HappyCustomers } from "../../modules/sections/happyCustomers";
import { Footer } from "../../components/footer/Footer";

import { ErrorBoundary } from "react-error-boundary";

const HomePage: React.FC = () => {
   return (
      <div className="wrapper">
         <Popup />
         <Header />
         <HeroSection />
         <BrandsSection />
         <ErrorBoundary
            fallback={
               <img
                  className="errorBoundary"
                  src="https://media1.tenor.com/m/ZvLReph5qCIAAAAC/skill-issue.gif"
               />
            }
         >
            <NewArrivals />
         </ErrorBoundary>
         <ErrorBoundary
            fallback={
               <img
                  className="errorBoundary"
                  src="https://media1.tenor.com/m/ZvLReph5qCIAAAAC/skill-issue.gif"
               />
            }
         >
            <TopSelling />
         </ErrorBoundary>
         <BrowseStyle />
         <ErrorBoundary
            fallback={
               <img
                  className="errorBoundary"
                  src="https://media1.tenor.com/m/ZvLReph5qCIAAAAC/skill-issue.gif"
               />
            }
         >
            <HappyCustomers />
         </ErrorBoundary>
         <Footer />
      </div>
   );
};

export default HomePage;
