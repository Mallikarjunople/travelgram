import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/pages/Home";
// import Footer from "./components/Footer";
// import Navbar from "./components/Navbar";
import Tlogs from "./components/tlogs/Tlogs";
import About from "./components/pages/About";
import Citypage from "./components/pages/Citypage";
import Tlogpost from "./components/pages/Tlogpost";

import ThemePage from "./components/pages/ThemePage";
import Landing from "./components/Landing";
import PopularCities from "./components/auth/admin/PopularCities";
import UserSignup from "./components/auth/user/UserSignup";
import UserLogin from "./components/auth/user/UserLogin";
import CreatePost from "./components/user/CreatePost";
import EditPost from "./components/user/EditPost";
import UserProfile from "./components/user/UserProfile";
import PageNotFound from "./components/pages/PageNotFound";
import AdminPage from "./components/auth/admin/AdminPage";
import Role from "./components/auth/Role";
import ViewBlog from "./components/auth/admin/ViewBlog";
import RequestSection from "./components/auth/admin/RequestSection";

const token = localStorage.getItem("token");
export const authUser = axios.create({
  baseURL: "http://localhost:5000/",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

function App() {
  axios.defaults.baseURL = "http://localhost:5000";

  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Switch>
          {/* Authentication routes */}
          <Route path="/usersignup" exact component={UserSignup} />
          <Route path="/userlogin" exact component={UserLogin} />
          <Route path="/adminpage" exact component={AdminPage} />
          <Route path="/PopularCities" exact component={PopularCities} />
          <Route path="/requestsection" exact component={RequestSection} />
          <Route path="/viewblog/:getId" exact component={ViewBlog} />
          <Route path="/role" exact component={Role} />

          <Route path="/landing" exact component={Landing} />
          <Route path="/" exact component={Home} />
          <Route path="/tlogs" exact component={Tlogs} />
          <Route path="/tlogpost/:id" exact component={Tlogpost} />
          <Route path="/about" exact component={About} />
          <Route path="/citypage" exact component={Citypage} />

          <Route path="/createpost" exact component={CreatePost} />
          <Route path="/editpost" exact component={EditPost} />
          <Route path="/userprofile" exact component={UserProfile} />

          <Route path="/themepage" exact component={ThemePage} />

          <Route component={PageNotFound} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
