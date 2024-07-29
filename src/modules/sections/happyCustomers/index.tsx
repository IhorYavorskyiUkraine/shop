import { Slider } from "./components/Slider";

import arr from "/images/happyCustomers/arr.svg";

import styles from "./HappyCustomers.module.scss";

// Main component for displaying happy customers
export const HappyCustomers: React.FC = () => {
   return (
      <section
         // Animation on scroll
         data-aos="fade-up"
         data-aos-duration="500"
         className={styles.happyCustomers}
      >
         <div className="container">
            <div className={styles.wrapper}>
               <h2 className="title">Our Happy Customers</h2>
               <div className={styles.buttons}>
                  {/* Button to navigate to the previous slide */}
                  <button className="swiper-button-prev">
                     <img src={arr} alt="btn" />
                  </button>
                  {/* Button to navigate to the next slide (rotated 180 degrees) */}
                  <button
                     style={{ transform: "rotate(180deg)" }}
                     className="swiper-button-next"
                  >
                     <img src={arr} alt="btn" />
                  </button>
               </div>
            </div>
         </div>
         <div className={styles.slider}>
            {/* Slider component */}
            <Slider />
         </div>
      </section>
   );
};
