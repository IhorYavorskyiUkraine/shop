import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.scss";

import {
   HomePage,
   // NotFoundPage,
} from "./pages";

const router = createBrowserRouter([
   {
      path: "/",
      element: <HomePage />,
      // errorElement: <NotFoundPage />,
   },
   //    {
   //       path: "/shop",
   //       element: <ShopPage />,
   //       errorElement: <NotFoundPage />,
   //    },
   //    {
   //       path: "/onSale",
   //       element: <OnSalePage />,
   //       errorElement: <NotFoundPage />,
   //    },
   //    {
   //       path: "/item/:id",
   //       element: <ItemPage />,
   //       errorElement: <NotFoundPage />,
   //    },
   //    {
   //       path: "/newArrivals",
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
   return <RouterProvider router={router} />;
}

export default App;
