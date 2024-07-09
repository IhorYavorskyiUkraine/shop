import { Slider } from "./components/Slider";

import arr from "/images/happyCustomers/arr.svg";

import styles from "./HappyCustomers.module.scss";

export function HappyCustomers() {
   return (
      <section
         data-aos="fade-up"
         data-aos-duration="500"
         className={styles.happyCustomers}
      >
         <div className="container">
            <div className={styles.wrapper}>
               <h2 className="title">Our Happy Customers</h2>
               <div className={styles.buttons}>
                  <button className="swiper-button-prev">
                     <img src={arr} alt="btn" />
                  </button>
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
            <Slider />
         </div>
      </section>
   );
}
