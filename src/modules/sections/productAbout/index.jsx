import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchProduct } from "./slice/slice";

import { Breadcrumbs } from "../../../components/breadCrumbs";
import { Left } from "./components/aboutProduct/left";
import { Right } from "./components/aboutProduct/right";
import { ProductDetails } from "./components/productDetailsTab";
import { ReviewsTab } from "./components/reviewsTab";
import { FaqTab } from "./components/faqTab";

import { setActiveTab } from "./slice/slice";

import { selectorProductAbout } from "./slice/slice";

import styles from "./ProductAbout.module.scss";

export function ProductAbout() {
   const { activeTab } = useSelector(selectorProductAbout);

   const dispatch = useDispatch();

   const { id } = useParams();

   useEffect(() => {
      dispatch(fetchProduct({ id }));
      scrollTo(0, 0);
   }, []);

   const tabs = ["Product Details", "Rating & Reviews", "FAQs"];

   const handleTabClick = tab => {
      dispatch(setActiveTab(tab));
   };

   return (
      <div className={styles.wrapper}>
         <div className="container">
            <Breadcrumbs />
            <div className={styles.aboutProduct}>
               <Left />
               <Right />
            </div>
            <div className={styles.tabs}>
               <div className={styles.buttons}>
                  {tabs.map(tab => (
                     <button
                        key={tab}
                        onClick={() => handleTabClick(tab)}
                        className={`text ${
                           activeTab === tab ? styles.active : ""
                        }`}
                     >
                        <span>{tab}</span>
                     </button>
                  ))}
               </div>
               {activeTab === "Product Details" && <ProductDetails />}
               {activeTab === "Rating & Reviews" && <ReviewsTab />}
               {activeTab === "FAQs" && <FaqTab />}
            </div>
            <div className={styles.recomended}></div>
         </div>
      </div>
   );
}
