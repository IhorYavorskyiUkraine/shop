import { useSelector } from "react-redux";

import { selectorProductAbout } from "../../slice/slice";

import styles from "./FaqTab.module.scss";

export function FaqTab() {
   const { product } = useSelector(selectorProductAbout);
   return (
      <div className={styles.wrapper}>
         <div>3</div>
      </div>
   );
}
