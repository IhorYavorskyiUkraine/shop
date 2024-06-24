import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./BurgerMenu.module.scss";

const BurgerMenu = () => {
   const [lock, setLock] = useState(false);

   const handleLock = () => {
      setLock(!lock);
      lock
         ? document.body.classList.remove("lock")
         : document.body.classList.add("lock");
   };

   return (
      <div className={styles.burger}>
         <div className={styles.burgerIcon} onClick={handleLock}>
            <div className={styles.line1}></div>
            <div className={styles.line2}></div>
            <div className={styles.line3}></div>
         </div>
         <div className={lock ? styles.overlay : styles.hidden}>
            <div className={styles.catalog}>
               <Link to="/">
                  <span>Tasty</span> Health
               </Link>
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

export default BurgerMenu;
