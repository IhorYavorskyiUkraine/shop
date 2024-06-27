import styles from "./Button.module.scss";

export function Button({ text, onClick }) {
   return (
      <button className={styles.button} onClick={onClick}>
         <span>{text}</span>
      </button>
   );
}
