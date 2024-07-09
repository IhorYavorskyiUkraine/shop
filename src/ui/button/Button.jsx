import styles from "./Button.module.scss";

export function Button({ text, onClick, disabled, type = "button" }) {
   return (
      <button
         type={type}
         disabled={disabled}
         className={styles.button}
         onClick={onClick}
      >
         <span>{text}</span>
      </button>
   );
}
