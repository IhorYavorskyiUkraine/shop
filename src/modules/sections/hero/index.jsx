import { Button } from "../../../ui/button/Button";
import { Info } from "./components/Info";

import bg from "/images/heroSection/bg.png";

import styles from "./HeroSection.module.scss";

export function HeroSection() {
   return (
      <section
         data-aos="fade-left"
         data-aos-duration="500"
         className={styles.section}
      >
         <div className="container">
            <div className={styles.wrapper}>
               <div className={styles.content}>
                  <h1>Find clothes that matches your style</h1>
                  <p className="text">
                     Browse through our diverse range of meticulously crafted
                     garments, designed to bring out your individuality and
                     cater to your sense of style.
                  </p>
                  <Button text="Shop Now" />
                  <div className={styles.info}>
                     <Info number={200} info="International Brands" />
                     <div className={styles.line}></div>
                     <Info number={2000} info="High-Quality Products" />
                     <div className={styles.line}></div>
                     <Info number={30000} info="Happy Customers" />
                  </div>
               </div>
               <div className={styles.bg}>
                  <img src={bg} alt="bg" />
               </div>
            </div>
         </div>
      </section>
   );
}
