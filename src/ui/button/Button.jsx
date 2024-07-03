import styles from "./Button.module.scss";

export function Button({ text, onClick, disabled }) {
   return (
      <button disabled={disabled} className={styles.button} onClick={onClick}>
         <span>{text}</span>
      </button>
   );
}
