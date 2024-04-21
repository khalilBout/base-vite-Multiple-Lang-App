import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";


import Root from "./pages/Root";
import Index from "./pages/Index";
import NotFoundPage from "./pages/NotFoundPage";
import ProfilePage from "./pages/ProfilePage";
import ProfilesPage from "./pages/ProfilesPage";
import ShopPage from "./pages/ShopPage";
import ProductPage from "./pages/ProductPage";

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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
