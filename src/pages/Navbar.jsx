import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div>
        <Link to="/home">Home</Link>
        <Link to="/shop">Shop</Link>
      </div>
    </div>
  );
};

export default Navbar;
