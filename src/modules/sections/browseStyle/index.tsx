import { Card } from "./components/Card";

import styles from "./BrowseStyle.module.scss";

// BrowseStyle component displaying dress styles
export const BrowseStyle: React.FC = () => {
   return (
      <section
         // Animation on scroll
         data-aos="fade-up"
         data-aos-duration="500"
         className={styles.browseStyle} // Applying styles from BrowseStyle.module.scss
      >
         <div className="container">
            <div className={styles.wrapper}>
               <h2 className="title">Browse By Dress Style</h2>
               <div>
                  <div className={styles.cardsRow1}>
                     {/* Displaying Card components with animations */}
                     <Card
                        data-aos="fade-left"
                        data-aos-duration="300"
                        name="Casual"
                     />
                     <Card
                        data-aos="fade-right"
                        data-aos-duration="300"
                        name="Formal"
                     />
                  </div>
                  <div className={styles.cardsRow2}>
                     {/* Displaying additional Card components */}
                     <Card name="Party" />
                     <Card name="Gym" />
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};
