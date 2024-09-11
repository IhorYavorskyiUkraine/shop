import { ASideCatalog } from "../../../components/aSideCatalog";
import { Breadcrumbs } from "../../../components/breadCrumbs";
import { CategoriesList } from "./components/categoriesList";
import { Pagination } from "../../../components/pagination";

import styles from "./Categories.module.scss";

type Props = {
   link: string;
};

export const Categories: React.FC<Props> = ({ link }) => {
   return (
      <div className={styles.wrapper}>
         <div className="container">
            <Breadcrumbs />
            <div className={styles.content}>
               <ASideCatalog />
               <CategoriesList link={link} />
            </div>
            <Pagination />
         </div>
      </div>
   );
};
