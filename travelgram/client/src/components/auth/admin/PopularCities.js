import React from "react";
import Navbar from "../../Navbar";
import EachCity from "./EachCity";

function PopularCities() {

  
  return (
    <>
      <h2 className="mt-4 ml-3">Popular cities</h2>

      <div className="">
        <div className="card mb-3">
          <div className="card-body w-auto">
            <div className="row">
              <div className="col-lg-10 col-md-9 col-8">
                <h3>Existing Cities</h3>
              </div>
              <div className="col-lg-2 col-md-3 col-4 justify-content-end">
                <button
                  className="btn btn-primary mx-1 "
                  onClick={() => (window.location = "")}
                >
                  Add City
                </button>
              </div>
            </div>
            <EachCity/>
            {/* {user.blogs.map((blogid) => (
                  <PostList blogid={blogid} />
                ))} */}
          </div>
        </div>
      </div>
    </>
  );
}

export default PopularCities;
