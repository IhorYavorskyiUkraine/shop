import { Popup } from "../../components/popup";
import { Header } from "../../components/header/Header";
import { Categories } from "../../modules/sections/categories";
import { Footer } from "../../components/footer/Footer";
import { ErrorBoundary } from "react-error-boundary";

const OnSalePage: React.FC = () => {
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
            <Categories />
         </ErrorBoundary>
         <Footer />
      </div>
   );
};

export default OnSalePage;
