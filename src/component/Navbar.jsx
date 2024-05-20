import { NavLink } from "react-router-dom";
import i18n from "i18next";

const Navbar = () => {
  const changeDir = () => {
    window.document.dir = i18n.dir();
  };

  return (
    <>
      <nav>
        <ul className="flex justify-between items-center px-6 h-[60px] w-full bg-slate-300">
          <div className="flex items-center gap-4">
            <li>
              <NavLink
                className={({ isActive }) => {
                  return isActive
                    ? "bg-yellow-200 text-2xl px-2 py-1 rounded-md"
                    : " text-2xl px-2 py-1 rounded-md";
                }}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="shop"
                className={({ isActive }) => {
                  return isActive
                    ? "bg-yellow-200 text-2xl px-2 py-1 rounded-md"
                    : " text-2xl px-2 py-1 rounded-md";
                }}
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to="profiles"
                className={({ isActive }) => {
                  return isActive
                    ? "bg-yellow-200 text-2xl px-2 py-1 rounded-md"
                    : " text-2xl px-2 py-1 rounded-md";
                }}
              >
                Profiles
              </NavLink>
            </li>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => {
                i18n.changeLanguage("ar");
                changeDir();
              }}
              className=" rounded-md bg-yellow-200 px-2 py-1 cursor-pointer hover:bg-yellow-300"
            >
              Ar
            </button>
            <button
              onClick={() => {
                i18n.changeLanguage("en");
                changeDir();
              }}
              className="rounded-md bg-yellow-200 px-2 py-1 cursor-pointer hover:bg-yellow-300"
            >
              En
            </button>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
