import React from "react";
import { NavLink } from "react-router-dom";
import links from "../utils/links";
const NavLinks = ({ toggleSidbar }) => {
  return (
    <div className="nav-links">
      {links.map((item) => {
        const { text, path, id, icon } = item;
        return (
          <NavLink
            to={path}
            id={id}
            onClick={toggleSidbar}
            key={id}
            className={({ isActive }) => {
              return isActive ? "nav-link active" : "nav-link";
            }}
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
