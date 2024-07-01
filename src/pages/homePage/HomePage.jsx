import { Popup } from "../../components/popup/Popup";
import { Header } from "../../components/header/Header";
import { HeroSection } from "../../modules/index";
import { BrandsSection } from "../../modules/index";
import { NewArrivals } from "../../modules/sections/newArrivals/NewArrivals";

import styles from "./HomePage.module.scss";

function HomePage() {
   return (
      <div className="wrapper">
         <Popup />
         <Header />
         <HeroSection />
         <BrandsSection />
         <NewArrivals />
      </div>
   );
}

export default HomePage;
