import React from "react";
import ThemePageItem from "../ThemePageItem";

function ThemePage() {
  return (
    <>
    {/* The background image for each theme should be different..to be done */}
    <div className="container-fluid backimg">
     <div className="container py-3">
        <h1> ThemeName</h1>

        <ThemePageItem />
        <ThemePageItem />
        <ThemePageItem />
        <ThemePageItem />
      </div>
      </div>
    </>
  );
}

export default ThemePage;
