import { useState, useEffect, useRef } from "react";
import styles from "./CustomSelect.module.scss";

export function CustomSelect({ options, selectedValue, onClick }) {
   const [isOpen, setIsOpen] = useState(false);

   const filterRef = useRef(null);

   const handleClickOutsideFilters = e => {
      if (filterRef.current && !filterRef.current.contains(e.target)) {
         setIsOpen(false);
      }
   };

   useEffect(() => {
      document.addEventListener("mousedown", handleClickOutsideFilters);
      return () => {
         document.removeEventListener("mousedown", handleClickOutsideFilters);
      };
   }, []);

   const handleClick = value => {
      onClick(value);
      setIsOpen(false);
   };

   return (
      <div className={styles.customSelect}>
         <div
            className={styles.selectSelected}
            onClick={() => setIsOpen(!isOpen)}
         >
            <span>
               {options?.find(option => option.value === selectedValue)?.label}
            </span>
         </div>
         {isOpen && (
            <div className={styles.selectOptions} ref={filterRef}>
               {options.map(option => (
                  <div key={option.value} className={styles.selectOption}>
                     <div
                        className={styles.checkmark}
                        style={
                           option.value === selectedValue
                              ? { display: "block" }
                              : { display: "none" }
                        }
                     ></div>
                     <button onClick={() => handleClick(option.value)}>
                        <span>{option.label}</span>
                     </button>
                  </div>
               ))}
            </div>
         )}
      </div>
   );
}
