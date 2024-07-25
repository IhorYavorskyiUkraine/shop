import { Card } from "./components/Card";

import styles from "./BrowseStyle.module.scss";

export const BrowseStyle: React.FC = () => {
   return (
      <section
         data-aos="fade-up"
         data-aos-duration="500"
         className={styles.browseStyle}
      >
         <div className="container">
            <div className={styles.wrapper}>
               <h2 className="title">Browse By Dress Style</h2>
               <div>
                  <div className={styles.cardsRow1}>
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
                     <Card name="Party" />
                     <Card name="Gym" />
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};
