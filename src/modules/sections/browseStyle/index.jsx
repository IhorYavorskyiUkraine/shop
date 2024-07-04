import { Card } from "./components/Card";

import styles from "./BrowseStyle.module.scss";

export function BrowseStyle() {
   return (
      <section className={styles.browseStyle}>
         <div className="container">
            <div className={styles.wrapper}>
               <h2 className="title">Browse By Dress Style</h2>
               <div>
                  <div className={styles.cardsRow1}>
                     <Card name="Casual" />
                     <Card name="Formal" />
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
}
