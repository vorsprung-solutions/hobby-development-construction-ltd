import React from "react";
import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  return (
    <NavLink
      to={ to }
      className={ ({ isActive }) =>
        isActive ? "text-blue-800 font-bold " : ""
      }
    >
      <span className="px-3">   { children }</span>

    </NavLink>
  );
};

export default ActiveLink;
