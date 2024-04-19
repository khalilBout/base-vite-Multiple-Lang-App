import { NavLink, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <nav>
        <ul className="flex  gap-4 ">
          <li>
            <NavLink
              className={({ isActive }) => {
                return isActive
                  ? "bg-red-200 text-2xl px-2 py-1 rounded-md"
                  : "bg-slate-100 text-2xl px-2 py-1 rounded-md";
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
                  ? "bg-red-200 text-2xl px-2 py-1 rounded-md"
                  : "bg-slate-100 text-2xl px-2 py-1 rounded-md";
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
                  ? "bg-red-200 text-2xl px-2 py-1 rounded-md"
                  : "bg-slate-100 text-2xl px-2 py-1 rounded-md";
              }}
            >
              Profiles
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
