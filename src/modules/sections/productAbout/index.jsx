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
                  <button
                     onClick={() => handleTabClick("productDetails")}
                     className={`text ${
                        activeTab === "productDetails" ? styles.active : ""
                     }`}
                  >
                     <span>Product Details</span>
                  </button>
                  <button
                     onClick={() => handleTabClick("reviews")}
                     className={`text ${
                        activeTab === "reviews" ? styles.active : ""
                     }`}
                  >
                     <span>Rating & Reviews</span>
                  </button>
                  <button
                     onClick={() => handleTabClick("faq")}
                     className={`text ${
                        activeTab === "faq" ? styles.active : ""
                     }`}
                  >
                     <span>FAQs</span>
                  </button>
               </div>
               {activeTab === "productDetails" && <ProductDetails />}
               {activeTab === "reviews" && <ReviewsTab />}
               {activeTab === "faq" && <FaqTab />}
            </div>
            <div className={styles.recomended}></div>
         </div>
      </div>
   );
}
