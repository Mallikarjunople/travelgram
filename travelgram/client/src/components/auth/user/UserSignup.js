import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

const UserSignup = () => {
  const [user, setState] = useState({
    fullName: "",
    password: "",
    email: "",
    phone: "",
  });

  const inputEvent = (e) => {
    const { name, value } = e.target;

    setState((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    axios
      .post("api/register/customer", {
        name: user.fullName,
        email: user.email,
        password: user.password,
        phone: user.phone,
      })
      .then((response) => {
        console.log(response);
        alert("sign Up successfully");
        if (response.status === 200) window.location = ""; //add the location for stats 200 
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="usersignupbody">
        <div class="container">
          <div class="row">
            <div class="col-lg-10 col-xl-9 mx-auto">
              <div class="card card-signin flex-row my-5">
                <div class="card-img-left d-none d-md-flex"></div>
                <div class="card-body">
                  <h5 class="card-title text-center">Register</h5>
                  <form
                    class="form-signin"
                    onSubmit={onSubmit}
                    autoComplete="off"
                  >
                    <div class="form-label-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Your Name"
                        name="fullName"
                        onChange={inputEvent}
                        value={user.fullName}
                        autoFocus
                      />
                    </div>
                    <div class="form-label-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter Your EmailID"
                        name="email"
                        onChange={inputEvent}
                        value={user.email}
                      />
                    </div>
                    <div class="form-label-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Your Phone no."
                        name="phone"
                        onChange={inputEvent}
                        value={user.phone}
                      />
                    </div>
                    <div class="form-label-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter Your password"
                        name="password"
                        onChange={inputEvent}
                        value={user.password}
                      />
                    </div>

                    <button
                      class="btn btn-lg btn-primary btn-block text-uppercase"
                      type="submit"
                    >
                      Register
                    </button>
                    <a class="d-block text-center mt-2 small" href="/userlogin">
                      Sign In
                    </a>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserSignup;
