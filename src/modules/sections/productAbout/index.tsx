import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../store";

import { Breadcrumbs } from "../../../components/breadCrumbs";
import { Left } from "./components/aboutProduct/left";
import { Right } from "./components/aboutProduct/right";
import { ProductDetails } from "./components/productDetailsTab";
import { ReviewsTab } from "./components/reviewsTab/index";
import { FaqTab } from "./components/faqTab";

import { fetchProduct } from "./slice/slice";
import { setActiveTab } from "./slice/slice";
import { selectorProductAbout } from "./slice/slice";

import { ActiveTab } from "./slice/types";
import { Tabs } from "./slice/types";

import styles from "./ProductAbout.module.scss";

export const ProductAbout: React.FC = () => {
   // Get the currently active tab from the Redux store
   const { activeTab } = useSelector(selectorProductAbout);

   // Initialize dispatch function
   const dispatch = useAppDispatch();

   // Get product ID from URL parameters
   const { id } = useParams();

   // Fetch product details on component mount and scroll to top
   useEffect(() => {
      if (id) dispatch(fetchProduct({ id }));
      scrollTo(0, 0);
   }, [id, dispatch]);

   // Tabs for product details, reviews, and FAQs
   const tabs: Tabs[] = ["Product Details", "Rating & Reviews", "FAQs"];

   // Handle tab click to update active tab
   const handleTabClick = (tab: ActiveTab) => {
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
                  {/* Render tab buttons */}
                  {tabs.map((tab: Tabs) => (
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
               {/* Render content based on active tab */}
               {activeTab === "Product Details" && <ProductDetails />}
               {activeTab === "Rating & Reviews" && <ReviewsTab />}
               {activeTab === "FAQs" && <FaqTab />}
            </div>
            <div className={styles.recomended}></div>
         </div>
      </div>
   );
};
