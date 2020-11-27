import React from "react";
import { Route, BrowserRouter, NavLink, Switch } from "react-router-dom";
import Navbar from "../../Navbar";

import PopularCities from "./PopularCities";
import LeftBar from "./LeftBar";
import RequestSection from "./RequestSection";

function AdminPage() {
  return (
    <>
    <Navbar/>
      <BrowserRouter>
        <Switch>
          <>
          <div className="row">
            <div className="col-2">
              <LeftBar />
            </div>
            <div className="col-10">
              <Route
                path="/requestsection"
                exact
                component={RequestSection}
              ></Route>
              <Route path="/PopularCities" exact component={PopularCities}></Route>
            </div>
            </div>
          </>
        </Switch>
      </BrowserRouter>
     
    </>
  );
}

export default AdminPage;
