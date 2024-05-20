import { Outlet } from "react-router-dom";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import cookies from "js-cookie";

import Navbar from "../component/Navbar";
import { useEffect } from "react";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    fallbackLng: "en",
    detection: {
      order: [
        "cookie",
        "htmlTag",
        "localStorage",
        "sessionStorage",
        "navigator",
        "path",
        "subdomain",
      ],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/locale/{{lng}}/{{ns}}.json",
    },
  });

export default function Root() {
  const len = cookies.get("i18next") || "en";
  // when leng change in cookies change direction
  useEffect(() => {
    window.document.dir = i18n.dir();
    console.log("len:", len);
  }, [len]);

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
