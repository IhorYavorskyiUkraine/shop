import { Popup } from "../../components/popup/Popup";
import { Header } from "../../components/header/Header";
import { HeroSection } from "../../modules/index";

import styles from "./HomePage.module.scss";

function HomePage() {
   return (
      <div className="wrapper">
         <Popup />
         <Header />
         <HeroSection />
      </div>
   );
}

export default HomePage;
