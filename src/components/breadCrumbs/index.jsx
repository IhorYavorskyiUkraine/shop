import { Link, useLocation } from "react-router-dom";

import separator from "/images/breadCrumbs/separator.svg";

import styles from "./BreadCrumbs.module.scss";

export function Breadcrumbs() {
   const location = useLocation();
   const pathnames = location.pathname.split("/").filter(x => x);

   return (
      <nav>
         <ul className={styles.list}>
            <li>
               <Link to="/">Home</Link>
            </li>
            {pathnames.map((value, index) => {
               const to = `/${pathnames.slice(0, index + 1).join("/")}`;
               return (
                  <li key={to}>
                     <img src={separator} alt="separator" />
                     <Link to={to}>{value.toUpperCase()}</Link>
                  </li>
               );
            })}
         </ul>
      </nav>
   );
}
