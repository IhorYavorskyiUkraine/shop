import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import aos from "aos";

import "aos/dist/aos.css";
import "./App.scss";

import { HomePage, NotFoundPage } from "./pages";

const router = createBrowserRouter([
   {
      path: "/",
      element: <HomePage />,
      errorElement: <NotFoundPage />,
   },
   //    {
   //       path: "/shop",
   //       element: <ShopPage />,
   //       errorElement: <NotFoundPage />,
   //    },
   //    {
   //       path: "/on_sale",
   //       element: <OnSalePage />,
   //       errorElement: <NotFoundPage />,
   //    },
   //    {
   //       path: "/item/:id",
   //       element: <ItemPage />,
   //       errorElement: <NotFoundPage />,
   //    },
   //    {
   //       path: "/new_arrivals",
   //       element: <NewArrivalsPage />,
   //       errorElement: <NotFoundPage />,
   //    },
   //    {
   //       path: "/brands",
   //       element: <BrandsPage />,
   //       errorElement: <NotFoundPage />,
   //    },
   //    {
   //       path: "/cart",
   //       element: <CartPage />,
   //       errorElement: <NotFoundPage />,
   //    },
   //    ,
   //    {
   //       path: "/account",
   //       element: <AccountPage />,
   //       errorElement: <NotFoundPage />,
   //    },
]);

function App() {
   useEffect(() => {
      aos.init();
   }, []);
   return <RouterProvider router={router} />;
}

export default App;
