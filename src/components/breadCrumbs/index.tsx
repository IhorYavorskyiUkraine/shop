import { Link, useLocation } from "react-router-dom";

import separator from "/images/breadCrumbs/separator.svg";

import styles from "./BreadCrumbs.module.scss";

export const Breadcrumbs: React.FC = () => {
   const location = useLocation();
   // Split the path into segments, filtering out empty segments
   const pathnames = location.pathname.split("/").filter(x => x);

   return (
      <nav>
         <ul className={styles.list}>
            <li>
               <Link to="/">Home</Link>
            </li>
            {pathnames.map((value, index) => {
               // Create the full path for each breadcrumb link
               const to = `/${pathnames.slice(0, index + 1).join("/")}`;
               return (
                  <li key={to}>
                     {index > 0 && <img src={separator} alt="separator" />}
                     <Link to={to}>{value.toUpperCase()}</Link>
                  </li>
               );
            })}
         </ul>
      </nav>
   );
};
