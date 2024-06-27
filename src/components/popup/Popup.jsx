import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Popup.module.scss";

export function Popup() {
   const [showPopup, setShowPopup] = useState(true);

   const closePopup = () => {
      setShowPopup(false);
   };

   return (
      <div
         style={{ display: showPopup ? "block" : "none" }}
         className={styles.popup}
      >
         <div className="container">
            <div className={styles.popupWrapper}>
               <p>
                  Sign up and get 20% off to your first order.
                  <Link to="">Sign Up Now</Link>
               </p>
               <button
                  onClick={closePopup}
                  className={styles.closePopup}
               ></button>
            </div>
         </div>
      </div>
   );
}
