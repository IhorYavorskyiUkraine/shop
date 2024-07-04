import { Link } from "react-router-dom";

import styles from "./Card.module.scss";

export function Card({ name }) {
   return (
      <Link to={`/browse_style/${name.toLowerCase()}`} className={styles.card}>
         <h3>{name}</h3>
         <div className={styles.bg}>
            <img src={`./images/browseStyle/${name}.jpg`} alt="bg" />
         </div>
      </Link>
   );
}
