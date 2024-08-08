import { useState } from "react";
import { useSelector } from "react-redux";

import { selectorProductAbout } from "../../slice/slice";

import { Faq } from "./types";

import arrow from "/images/productAbout/arrow.svg";

import styles from "./FaqTab.module.scss";

export const FaqTab: React.FC = () => {
   const { product } = useSelector(selectorProductAbout);

   const [activeTab, setActiveTab] = useState<number | null>(null);

   const faq: Faq[] = Array.isArray(product?.faq) ? product?.faq : [];

   return (
      <div
         className={styles.wrapper}
         data-aos="fade-up"
         data-aos-duration="500"
      >
         <h3>FAQ</h3>
         <div className={styles.faqs}>
            {faq?.map((item: Faq, i: number) => (
               <button
                  key={i}
                  onClick={() => setActiveTab(i === activeTab ? null : i)}
                  className={`${styles.faq} ${
                     i === activeTab ? styles.active : ""
                  }`}
               >
                  <div>
                     <h4>{item.question}</h4>
                     <img
                        style={
                           activeTab === i
                              ? { transform: "rotate(180deg)" }
                              : {}
                        }
                        src={arrow}
                        alt="arrow"
                     />
                  </div>
                  {i === activeTab && <p>{item.answer}</p>}
               </button>
            ))}
         </div>
      </div>
   );
};
