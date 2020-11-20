import React from "react";
import { NavLink } from "react-router-dom";
import "../css/main.css";

function PageNotFound() {
  return (
    <>
      <div className="errorpage">
        <NavLink to="/" className="navlink_">
          <button className="btn btn-danger helpbtn">Help </button>
        </NavLink>
      </div>
    </>
  );
}

export default PageNotFound;
