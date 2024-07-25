import { useState, useEffect, useRef } from "react";

import arrow from "/images/productAbout/arrow.svg";

import styles from "./CustomSelect.module.scss";
import { SelectedFilter } from "../../modules/sections/productAbout/slice/slice";

type Props = {
   options: { value: string; label: string }[];
   selectedValue: string;
   handleChange: (option: SelectedFilter) => void;
};

export const CustomSelect: React.FC<Props> = ({
   options,
   selectedValue,
   handleChange,
}) => {
   const [isOpen, setIsOpen] = useState(false);

   const filterRef = useRef<HTMLDivElement>(null);

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

   const handleClick = (value: string) => {
      handleChange(value);
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
            <img
               style={isOpen ? { transform: "rotate(180deg)" } : {}}
               src={arrow}
               alt="arrow"
            />
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
};
