import React from "react";
import "./css/main.css";
import ThemeItem from "./ThemeItem";
import { NavLink } from "react-router-dom";
function Theme() {

  const Hot="Hot";
  return (
    <>
      <div className="section-theme col-10 mx-auto my-5">
        <p className="section-heading text-center mt-3 mb-1 mx-3 ">
          Travel themes
        </p>
        <div className="theme-list ">
          <NavLink to={`/tag/${Hot}`} exact className="text-decoration-none">
            <ThemeItem src="../images/img-8.jpg" label="Hot" />
          </NavLink>
          <NavLink to="/tag/Peace" exact className="text-decoration-none">
            <ThemeItem src="../images/img-7.jpg" label="Peace" />
          </NavLink>
          <NavLink to="/tag/Aqua" exact className="text-decoration-none">
            <ThemeItem src="../images/img-9.jpg" label="Aqua" />
          </NavLink>
          <NavLink to="/tag/Mountain" exact className="text-decoration-none">
            <ThemeItem src="../images/img-home.jpg" label="Mountain" />
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Theme;
