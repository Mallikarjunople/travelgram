import React, { useState, useEffect } from "react";
// import Navbar from "../../Navbar";
import { authUser } from "../../../App";
import EachCity from "./EachCity";

function PopularCities() {
  const [cities, setCities] = useState([]);
  
  useEffect(() => {
    authUser
      .get(`/admin/addCity`)
      .then((res) => {
        setCities(res.data.cities);
        console.log(res.data.cities);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <h2 className="mt-4 ml-5">Popular cities</h2>

      <div className="">
        <div className="card mb-3 mx-4">
          <div className="card-body w-auto">
            <div className="row ">
              <div className="col-lg-10 col-md-9 col-8">
                <h3>Existing Cities</h3>
              </div>
              <div className="col-lg-2 col-md-3 col-4 justify-content-end">
                <button
                  className="btn btn-primary mx-1 "
                  onClick={() => (window.location = "/addcity")}
                >
                  Add City
                </button>
              </div>
            </div>
            
          
            {cities.map((city) => (
              <div key={city._id}>
                   <EachCity location={city.Location} />
                   </div>
                ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default PopularCities;
