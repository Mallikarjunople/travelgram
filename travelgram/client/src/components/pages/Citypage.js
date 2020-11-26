import React from "react";
import "../../App.css";
import CitypageItem from "../city/CitypageItem";

export default function Citypage() {
  const lorem =
    "This is a template that is great for small businesses. It doesn't have too much fancy flare to it, but it makes a great use of the standard Bootstrap core components. Feel free to use this template for any project you want!";

  return (
    <>
      <div>
        {/* <!-- Page Content --> */}
        <div className="container">
          {/* <!-- Heading Row --> */}
          <div className="row align-items-center my-5">
            <div className="col-lg-7">
              {/* Carousel to be added here */}
              <img
                className="img-fluid rounded mb-4 mb-lg-0"
                style={{ height: "300px", width: "800px" }}
                src="./images/mumbai.jpg"
                alt=""
              />
            </div>
            {/* <!-- /.col-lg-8 --> */}
            <div className="col-lg-5">
              <h1 className="font-weight-light">CityName</h1>
              <p>{lorem}</p>
              <a className="btn btn-primary" href="google.com">
                Call to Action!
              </a>
            </div>
          </div>
        </div>
        {/* <!-- Content Row --> */}
        <h1 className="my-4">To Explore</h1>

        <div className="row">
          <CitypageItem />
          <CitypageItem />
          <CitypageItem />
          <CitypageItem />
        </div>
        {/* <!-- /.row --> */}
      </div>
    </>
  );
}
