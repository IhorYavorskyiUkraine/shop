import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useAppDispatch } from "../../store";

import { Popup } from "../../components/popup";
import { Header } from "../../components/header/Header";
import { Categories } from "../../modules/sections/categories";
import { Footer } from "../../components/footer/Footer";
import { ErrorBoundary } from "react-error-boundary";
import { RootState } from "../../store";
import { fetchSaleProducts } from "./slice/slice";

const OnSalePage: React.FC = () => {
   const { saleProducts } = useSelector(
      (state: RootState) => state.saleProductsSlice,
   );

   const dispatch = useAppDispatch();

   useEffect(() => {
      window.scrollTo(0, 0);
      dispatch(fetchSaleProducts());
   }, []);

   return (
      <div className="wrapper">
         <Popup />
         <Header />
         <ErrorBoundary
            fallback={
               <img
                  className="errorBoundary"
                  src="https://media1.tenor.com/m/ZvLReph5qCIAAAAC/skill-issue.gif"
               />
            }
         >
            <Categories listToRender={saleProducts} />
         </ErrorBoundary>
         <Footer />
      </div>
   );
};

export default OnSalePage;
