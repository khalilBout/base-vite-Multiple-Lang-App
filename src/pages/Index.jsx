import { useTranslation } from "react-i18next";

const Index = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full h-[600px] bg-slate-100 flex flex-col justify-center items-center ">
      <h1>This is the home page</h1>
      <h2>{t("Welcome to React")}</h2>
    </div>
  );
};

export default Index;
