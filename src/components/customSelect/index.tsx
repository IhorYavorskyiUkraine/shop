import { useState, useEffect, useRef } from "react";

import { SelectedFilter } from "../../modules/sections/productAbout/slice/types";
import { Option } from "../../modules/sections/productAbout/slice/types";

import arrow from "/images/productAbout/arrow.svg";

import styles from "./CustomSelect.module.scss";

// Props interface for CustomSelect component
type Props = {
   options: Option[]; // Array of options for the select dropdown
   selectedValue: string; // Currently selected value
   handleChange: (option: SelectedFilter) => void; // Function to handle option selection
};

// CustomSelect component
export const CustomSelect: React.FC<Props> = ({
   options,
   selectedValue,
   handleChange,
}) => {
   // State to manage dropdown open/close
   const [isOpen, setIsOpen] = useState(false);

   // Ref to detect clicks outside the dropdown
   const filterRef = useRef<HTMLDivElement>(null);

   // Handle clicks outside the dropdown to close it
   const handleClickOutsideFilters = (e: MouseEvent) => {
      if (
         filterRef.current &&
         e.target instanceof Node &&
         !filterRef.current.contains(e.target)
      ) {
         setIsOpen(false);
      }
   };

   useEffect(() => {
      document.addEventListener("mousedown", handleClickOutsideFilters);
      return () => {
         document.removeEventListener("mousedown", handleClickOutsideFilters);
      };
   }, []);

   // Handle option click
   const handleClick = (value: SelectedFilter) => {
      handleChange(value);
      setIsOpen(false); // Close dropdown after selection
   };

   return (
      <div className={styles.customSelect}>
         {/* Selected value display and toggle button */}
         <div
            className={styles.selectSelected}
            onClick={() => setIsOpen(!isOpen)}
         >
            <span>
               {options?.find(option => option.value === selectedValue)?.label}
            </span>
            <img
               style={isOpen ? { transform: "rotate(180deg)" } : {}}
               src={arrow}
               alt="arrow"
            />
         </div>
         {/* Dropdown options */}
         {isOpen && (
            <div className={styles.selectOptions} ref={filterRef}>
               {options.map((option: Option) => (
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
};
