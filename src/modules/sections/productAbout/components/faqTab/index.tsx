import { useSelector } from "react-redux";

import { selectorProductAbout } from "../../slice/slice";

import styles from "./FaqTab.module.scss";

export const FaqTab: React.FC = () => {
   const { product } = useSelector(selectorProductAbout);
   return (
      <div className={styles.wrapper}>
         <div>3</div>
      </div>
   );
};
