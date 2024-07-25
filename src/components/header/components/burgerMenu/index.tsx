import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./BurgerMenu.module.scss";

export const BurgerMenu: React.FC = () => {
   const [isActive, setIsActive] = useState(false);

   const handleLock = () => {
      setIsActive(!isActive);
      isActive
         ? document.body.classList.remove("lock")
         : document.body.classList.add("lock");
   };

   return (
      <div className={`${styles.burger} ${isActive ? styles.active : ""}`}>
         <button
            onClick={handleLock}
            type="button"
            className={styles.burgerIcon}
         >
            <span></span>
         </button>
         <div
            className={`${styles.overlay} ${
               isActive ? styles.overlayActive : ""
            }`}
         >
            <div className={styles.catalog}>
               <h3>Catalog</h3>
               <button
                  onClick={handleLock}
                  className={styles.burgerClose}
               ></button>
            </div>
            <div className={styles.content}>
               <Link to="/all" id="all">
                  <span>All</span>
               </Link>
               <Link to="/onSale" id="onSale">
                  <span>On Sale</span>
               </Link>
               <Link to="/newArrivals" id="newArrivals">
                  <span>New Arrivals</span>
               </Link>
               <Link to="/brands" id="brands">
                  <span>Brands</span>
               </Link>
            </div>
         </div>
      </div>
   );
};
