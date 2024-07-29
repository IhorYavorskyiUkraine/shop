import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Popup.module.scss";

// Popup component displaying a promotional message
export const Popup: React.FC = () => {
   const [showPopup, setShowPopup] = useState(true); // State to control popup visibility

   // Function to close the popup
   const closePopup = () => {
      setShowPopup(false);
   };

   return (
      <div
         style={{ display: showPopup ? "block" : "none" }} // Conditionally show/hide popup
         className={styles.popup}
      >
         <div className="container">
            <div className={styles.popupWrapper}>
               <p>
                  Sign up and get 20% off your first order.
                  <Link to="">Sign Up Now</Link> {/* Link for sign-up */}
               </p>
               <button
                  onClick={closePopup} // Close popup on click
                  className={styles.closePopup}
               ></button>
            </div>
         </div>
      </div>
   );
};
