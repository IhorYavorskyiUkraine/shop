import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./SearchInput.module.scss";

import searchBtn from "/images/header/searchBtn.svg";

export function SearchInput() {
   const [isActive, setIsActive] = useState(false);

   const handleLock = () => {
      setIsActive(!isActive);
      isActive
         ? document.body.classList.remove("lock")
         : document.body.classList.add("lock");
   };

   return (
      <div className={styles.searchInput}>
         <button onClick={handleLock}>
            <img src={searchBtn} alt="searchBtn" />
         </button>
         <div
            className={`${styles.overlay} ${
               isActive ? styles.overlayActive : ""
            }`}
         >
            <form className={styles.form}>
               <img src={searchBtn} alt="searchBtn" />
               <div>
                  <input type="text" placeholder="Search for products..." />
               </div>
               <button
                  onClick={handleLock}
                  className={styles.searchClose}
               ></button>
            </form>
         </div>
      </div>
   );
}
