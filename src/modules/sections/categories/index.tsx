import { ASideCatalog } from "../../../components/aSideCatalog";
import { Pagination } from "../../../components/pagination";

import styles from "./Categories.module.scss";

type Props = {
   listToRender: any;
};

export const Categories: React.FC<Props> = ({ listToRender }) => {
   return (
      <div className={styles.wrapper}>
         <ASideCatalog />
         {/* <CategoriesList listToRender={listToRender} /> */}
         <Pagination />
      </div>
   );
};
