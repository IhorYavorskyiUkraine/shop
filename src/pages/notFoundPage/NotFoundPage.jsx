import { Link } from "react-router-dom";

import styles from "./NotFoundPage.module.scss";

export function NotFoundPage() {
   return (
      <div className={styles.notFound}>
         <h1>404</h1>
         <h2 className={styles.notFoundPage}>Page Not Found</h2>
         <Link to="/">Back to Home</Link>
      </div>
   );
}
