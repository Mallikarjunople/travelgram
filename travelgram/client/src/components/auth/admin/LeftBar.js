import React from "react";
import { NavLink } from "react-router-dom";

function LeftBar() {
  return (
    <>
    <div className="row">
      <div
        className="container align-content-start"
        style={{
          background: "rgb(0,0,0)",
          height: "700px",
          position:"fixed",
          width: "35vh",
          marginTop: "0",
      
         
        }}
      >
        <NavLink
          exact
          to="/requestsection"
          activeClassName="page-switch-active"
        >
          <p className="my-3 py-2 mx-4">Blog requests</p>
        </NavLink>

        <NavLink exact to="/PopularCities" activeClassName="page-switch-active">
          <p className="my-3 py-2 mx-4">Popular Cities</p>
        </NavLink>
      </div>
      </div>
    </>
  );
}

export default LeftBar;
