import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App";
import Navbar from "./pages/Navbar";

import Root from "./pages/Root";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";
import ProfilePage from "./pages/ProfilePage";
import ProfilesPage from "./pages/ProfilesPage";
import ShopPage from "./pages/ShopPage";
import ProductPage from "./pages/ProductPage";
import Index from "./pages/Index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <Index /> },
      {
        path: "/shop",
        element: <ShopPage />,
      },
      {
        path: "/shop/:productId",
        element: <ProductPage />,
      },
      {
        // children يستخدم في حالة عرض مكونات ابناء في نفس الصفحة
        path: "/profiles",
        element: <ProfilesPage />,
        children: [
          {
            path: "/profiles/:profileId",
            element: <ProfilePage />,
          },
        ],
      },
    ],
  },
]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     {/* <BrowserR>
//     <RouterProvider router={router} />
//     {/* <App /> */}
//     {/* </BrowserRouter> */}
//   </React.StrictMode>
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
