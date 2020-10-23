import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import axios from "axios";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/pages/Home";
import Navbar from "./components/Navbar";
import Tlogs from "./components/tlogs/Tlogs";
import About from "./components/pages/About";
import Citypage from "./components/pages/Citypage";
import Tlogpost from "./components/pages/Tlogpost";
import Footer from "./components/Footer";
import ThemePage from "./components/pages/ThemePage";
import Landing from "./components/Landing";
import AdminLogin from "./components/auth/admin/AdminLogin";
import UserSignup from "./components/auth/user/UserSignup";
import UserLogin from "./components/auth/user/UserLogin";
import Chat from "./components/pages/Chat";

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
          <Route path="/adminlogin" exact component={AdminLogin} />

          <Route path="/landing" exact component={Landing} />
          <Route path="/" exact component={Home} />
          <Route path="/tlogs" exact component={Tlogs} />
          <Route path="/about" exact component={About} />
          <Route path="/citypage" exact component={Citypage} />
          <Route path="/tlogpost" exact component={Tlogpost} />

          <Route path="/themepage" exact component={ThemePage} />
          <Route path="/chat" exact component={Chat} />
          <Redirect to="/" />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
