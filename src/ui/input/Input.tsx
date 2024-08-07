import { useState } from "react";

import styles from "./Input.module.scss";

type Props = {
   img?: string;
   placeholder?: string;
   className?: string;
};

export const Input: React.FC<Props> = ({
   img,
   placeholder,
   className = "",
}) => {
   const [value, setValue] = useState("");

   return (
      <form className={`${styles.form} ${className}`}>
         {img && <img src={img} alt="Input Image" />} {/* Search input icon */}
         <input
            value={value}
            onChange={e => setValue(e.target.value)} // Update search input value
            type="text"
            placeholder={placeholder}
         />
         {/* Search suggestions list (currently commented out) */}
      </form>
   );
};
