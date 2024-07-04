import { Popup } from "../../components/popup";
import { Header } from "../../components/header/Header";
import { HeroSection } from "../../modules/sections/hero";
import { BrandsSection } from "../../modules/sections/brands";
import { NewArrivals } from "../../modules/sections/newArrivals";
import { TopSelling } from "../../modules/sections/topSelling";
import { BrowseStyle } from "../../modules/sections/browseStyle";
import { HappyCustomers } from "../../modules/sections/happyCustomers";
import { Footer } from "../../components/footer/Footer";

function HomePage() {
   return (
      <div className="wrapper">
         <Popup />
         <Header />
         <HeroSection />
         <BrandsSection />
         <NewArrivals />
         <TopSelling />
         <BrowseStyle />
         <HappyCustomers />
         <Footer />
      </div>
   );
}

export default HomePage;
