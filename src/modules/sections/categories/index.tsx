import { ASideCatalog } from "../../../components/aSideCatalog";
import { Breadcrumbs } from "../../../components/breadCrumbs";
import { CategoriesList } from "./components/categoriesList";
import { Pagination } from "../../../components/pagination";

import { Product } from "../newArrivals/slice/types";

import styles from "./Categories.module.scss";

type Props = {
   listToRender: Product[];
};

export const Categories: React.FC<Props> = ({ listToRender }) => {
   return (
      <div className={styles.wrapper}>
         <div className="container">
            <Breadcrumbs />
            <div className={styles.content}>
               <ASideCatalog listToRender={listToRender} />
               <CategoriesList listToRender={listToRender} />
            </div>
            <Pagination />
         </div>
      </div>
   );
};
