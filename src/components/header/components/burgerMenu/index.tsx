import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./BurgerMenu.module.scss";

// BurgerMenu component for mobile navigation
export const BurgerMenu: React.FC = () => {
   const [isActive, setIsActive] = useState(false); // State to control menu visibility

   // Toggle menu visibility and lock/unlock body scroll
   const handleLock = () => {
      setIsActive(!isActive);
      isActive
         ? document.body.classList.remove("lock") // Remove lock class when menu is closed
         : document.body.classList.add("lock"); // Add lock class when menu is open
   };

   return (
      <div className={`${styles.burger} ${isActive ? styles.active : ""}`}>
         <button
            onClick={handleLock}
            type="button"
            className={styles.burgerIcon}
         >
            <span></span> {/* Burger icon for toggling the menu */}
         </button>
         <div
            className={`${styles.overlay} ${
               isActive ? styles.overlayActive : "" // Apply active class when menu is open
            }`}
         >
            <div className={styles.catalog}>
               <h3>Catalog</h3> {/* Menu title */}
               <button
                  onClick={handleLock}
                  className={styles.burgerClose}
               ></button>{" "}
               {/* Button to close the menu */}
            </div>
            <div className={styles.content}>
               {/* Navigation links */}
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
