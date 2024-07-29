import { Button } from "../../../ui/button/Button";
import { Info } from "./components/Info";
import bg from "/images/heroSection/bg.png";
import styles from "./HeroSection.module.scss";

// Define the HeroSection component
export const HeroSection: React.FC = () => {
   return (
      <section
         data-aos="fade-left" // Animation effect for section
         data-aos-duration="500" // Duration of animation
         className={styles.section} // Apply styles from module
      >
         <div className="container">
            <div className={styles.wrapper}>
               <div className={styles.content}>
                  <h1>Find Clothes That Match Your Style</h1>
                  <p className="text">
                     Browse through our diverse range of meticulously crafted
                     garments, designed to bring out your individuality and
                     cater to your sense of style.
                  </p>
                  <Button text="Shop Now" />{" "}
                  {/* Button to trigger shopping action */}
                  <div className={styles.info}>
                     <Info number={200} info="International Brands" />{" "}
                     {/* Display number of brands */}
                     <div className={styles.line}></div> {/* Separator line */}
                     <Info number={2000} info="High-Quality Products" />{" "}
                     {/* Display number of products */}
                     <div className={styles.line}></div> {/* Separator line */}
                     <Info number={30000} info="Happy Customers" />{" "}
                     {/* Display number of customers */}
                  </div>
               </div>
               <div className={styles.bg}>
                  <img src={bg} alt="Background showcasing various garments" />{" "}
                  {/* Background image */}
               </div>
            </div>
         </div>
      </section>
   );
};
