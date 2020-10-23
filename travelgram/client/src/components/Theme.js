import React from "react";
import "./css/main.css";
import ThemeItem from "./ThemeItem";
import { Link } from "react-router-dom";
function Theme() {
  return (
    <>
      <div className="section-theme col-10 mx-auto">
        <p className="section-heading text-center mt-3 mb-1 mx-3 ">
          Travel themes
        </p>
        <div className="theme-list ">
          <Link to="/themepage" exact className="text-decoration-none">
            <ThemeItem src="../images/img-8.jpg" label="Hot" />
          </Link>
          <Link to="/themepage" exact className="text-decoration-none">
            <ThemeItem src="../images/img-7.jpg" label="Peace" />
          </Link>
          <Link to="/themepage" exact className="text-decoration-none">
            {" "}
            <ThemeItem src="../images/img-9.jpg" label="Aqua" />
          </Link>
          <Link to="/themepage" exact className="text-decoration-none">
            <ThemeItem src="../images/img-home.jpg" label="Mountain" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Theme;
