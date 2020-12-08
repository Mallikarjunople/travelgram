import React from "react";
import { Route, BrowserRouter, NavLink, Switch } from "react-router-dom";
import Navbar from "../../Navbar";

import PopularCities from "./PopularCities";
import LeftBar from "./LeftBar";
import RequestSection from "./RequestSection";
import ViewBlog from "./ViewBlog";
import AdminFeedback from "./AdminFeedback";

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
              <Route path="/viewblog/:getId" exact component={ViewBlog} ></Route>
              <Route path="/adminfeedback" exact component={AdminFeedback}></Route>
            </div>
            </div>
          </>
        </Switch>
      </BrowserRouter>
     
    </>
  );
}

export default AdminPage;
