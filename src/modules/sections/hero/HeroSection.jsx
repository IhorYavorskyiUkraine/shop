import Button from "../../../ui/button/Button";
import Info from "./components/Info";

import styles from "./HeroSection.module.scss";

export function HeroSection() {
   return (
      <section className={styles.section}>
         <div className="container">
            <div className={styles.wrapper}>
               <h1>Find clothes that matches your style</h1>
               <p className="text">
                  Browse through our diverse range of meticulously crafted
                  garments, designed to bring out your individuality and cater
                  to your sense of style.
               </p>
               <Button text="Shop Now" />
               <div className={styles.info}>
                  <Info number="200" info="International Brands" />
                  <Info number="2,000" info="High-Quality Products" />
                  <Info number="30,000" info="Happy Customers" />
               </div>
            </div>
         </div>
      </section>
   );
}
