import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Navbar from "../../Navbar";

import PopularCities from "./PopularCities";
import LeftBar from "./LeftBar";
import RequestSection from "./RequestSection";
import ViewBlog from "./ViewBlog";
import AdminFeedback from "./AdminFeedback";
import ViewFeedback from "./ViewFeedback";

function AdminPage() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Switch>
            <div className="row">
              <div className="col-2">
                <LeftBar />
              </div>
              <div className="col-10">
                <Route
                  path="/role/requestsection"
                  exact
                  component={RequestSection}
                ></Route>
                <Route
                  path="/role/PopularCities"
                  exact
                  component={PopularCities}
                ></Route>
                <Route
                  path="/role/viewblog/:getId"
                  exact
                  component={ViewBlog}
                ></Route>
                <Route
                  path="/role/adminfeedback"
                  exact
                  component={AdminFeedback}
                ></Route>
                <Route
                  path="/role/viewfeedback/:id"
                  exact
                  component={ViewFeedback}
                ></Route>
              </div>
            </div>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default AdminPage;
