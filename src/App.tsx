import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useAppDispatch } from "./store";
import aos from "aos";

import {
   HomePage,
   ProductPage,
   CartPage,
   OnSalePage,
   NotFoundPage,
} from "./pages";

import { fetchCartProducts } from "./modules/sections/yourCart/slice/slice";

import "aos/dist/aos.css";
import "./App.scss";

const router = createBrowserRouter([
   {
      path: "/",
      element: <HomePage />,
      errorElement: <NotFoundPage />,
   },
   {
      path: "/on_sale",
      element: <OnSalePage />,
      errorElement: <NotFoundPage />,
   },
   {
      path: "/:id",
      element: <ProductPage />,
      errorElement: <NotFoundPage />,
   },
   {
      path: "/cart",
      element: <CartPage />,
      errorElement: <NotFoundPage />,
   },
]);

const App = (): JSX.Element => {
   const dispatch = useAppDispatch();

   useEffect(() => {
      aos.init();
      dispatch(fetchCartProducts());
   }, []);
   return <RouterProvider router={router} />;
};

export default App;
