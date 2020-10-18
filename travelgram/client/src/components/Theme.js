import React from "react";
import "./css/main.css";
import ThemeItem from "./ThemeItem";

function Theme() {
  return (
    <>
      <div className="section-theme col-10 mx-auto">
        <p className="section-heading text-center mt-3 mb-1 mx-3 ">Travel themes</p>
        <div className="theme-list ">
          <ThemeItem src="../images/img-8.jpg" label="Hot" />
          <ThemeItem src="../images/img-7.jpg" label="Peace" />
          <ThemeItem src="../images/img-9.jpg" label="Aqua" />
          <ThemeItem src="../images/img-home.jpg" label="Mountain" />
        </div>
      </div>
    </>
  );
}

export default Theme;
