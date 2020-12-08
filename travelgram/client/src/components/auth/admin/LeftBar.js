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
            position: "fixed",
            width: "35vh",
            marginTop: "0",
          }}
        >
          <NavLink
            exact
            to="/requestsection"
            // activeClassName="selected"
            className="text-decoration-none "
          
          >
            <button
              className=" btn btn-danger my-2 py-2 mx-2"
              style={{
                // backgroundColor: "#e7e7e7",
                color: "black",
                padding: "5px 20px",
                textAlign: "center",
                textDecoration: "none",
                display: "inline-block",
                fontSize: "16px",
                width: "100%",
              }}
            >
              Blog requests
            </button>
          </NavLink>

          <NavLink
            exact
            to="/PopularCities"
            // activeClassName="page-switch-active"
            
          >
             <button
              className=" btn btn-danger my-2 py-2 mx-2"
              style={{
                // backgroundColor: "#e7e7e7",
                color: "black",
                padding: "5px 20px",
                textAlign: "center",
                textDecoration: "none",
                display: "inline-block",
                fontSize: "16px",
                width: "100%",
              }}
            >
              Popular Cities
            </button>
          </NavLink>
          <NavLink
            exact
            to="/adminFeedback"
            // activeClassName="page-switch-active"
            
          >
             <button
              className=" btn btn-danger my-2 py-2 mx-2"
              style={{
                // backgroundColor: "#e7e7e7",
                color: "black",
                padding: "5px 20px",
                textAlign: "center",
                textDecoration: "none",
                display: "inline-block",
                fontSize: "16px",
                width: "100%",
              }}
            >
              Feedbacks 
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default LeftBar;
