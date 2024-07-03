import styles from "./Card.module.scss";

export function Card({ name }) {
   return (
      <div className={styles.card}>
         <h3>{name}</h3>
         <img src={`./images/browseStyle/${name}.jpg`} alt="bg" />
      </div>
   );
}
