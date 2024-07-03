import styles from "./BrowseStyle.module.scss";

export function BrowseStyle() {
   return (
      <section className={styles.browseStyle}>
         <div className="container">
            <div className={styles.wrapper}>
               <h2 className="title">Browse By Dress Style</h2>
            </div>
         </div>
      </section>
   );
}
