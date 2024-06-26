import styles from "./Button.module.scss";

function Button({ text, onClick }) {
   return (
      <button className={styles.button} onClick={onClick}>
         <span>{text}</span>
      </button>
   );
}

export default Button;
