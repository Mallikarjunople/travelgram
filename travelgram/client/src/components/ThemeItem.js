import React from "react";
import "./css/main.css";

function ThemeItem(props) {
  return (
    <>
      <div className="theme">
        <div className="theme_image">
          <img src={props.src} alt="themeimage" />
        </div>
        <div className="theme_title title-white">
          <p>{props.label}</p>
        </div>
      </div>
    </>
  );
}

export default ThemeItem;
