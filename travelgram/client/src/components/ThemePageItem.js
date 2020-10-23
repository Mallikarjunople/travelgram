import React from "react";

function ThemePageItem() {
  return (
    <>
      <div className="card">
        <div className="row ">
          <div className="col-md-5">
            <img src="/images/pune.jpg" className="w-100" />
          </div>
          <div className="col-md-7 px-3">
            <div className="card-block px-3">
              <h4 className="card-title pt-3">Title</h4>
              <p className="card-text">
                Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.{" "}
              </p>

              <a href="google.com" className="btn btn-primary float-right mt-5">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ThemePageItem;
