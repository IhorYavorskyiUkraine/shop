import { useState } from "react";
import { Link } from "react-router-dom";

import searchBtn from "/images/header/searchBtn.svg";

import styles from "./SearchInput.module.scss";

// SearchInput component with toggleable search overlay
export const SearchInput: React.FC = () => {
   const [isActive, setIsActive] = useState(false); // State to control overlay visibility

   // Toggle overlay and lock/unlock body scroll
   const handleLock = () => {
      setIsActive(!isActive);
      isActive
         ? document.body.classList.remove("lock") // Remove lock class when inactive
         : document.body.classList.add("lock"); // Add lock class when active
   };

   return (
      <div className={styles.searchInput}>
         <button onClick={handleLock}>
            <img src={searchBtn} alt="searchBtn" />{" "}
            {/* Button to toggle search overlay */}
         </button>
         <div
            className={`${styles.overlay} ${
               isActive ? styles.overlayActive : "" // Apply active class when overlay is active
            }`}
         >
            <form className={styles.form}>
               <img src={searchBtn} alt="searchBtn" />{" "}
               {/* Search icon inside overlay */}
               <div>
                  <input type="text" placeholder="Search for products..." />{" "}
                  {/* Search input field */}
               </div>
               <button
                  onClick={handleLock}
                  className={styles.searchClose} // Button to close the overlay
               ></button>
            </form>
         </div>
      </div>
   );
};
