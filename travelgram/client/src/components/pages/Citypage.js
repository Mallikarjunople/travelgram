import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../../App.css";
import CitypageItem from "../city/CitypageItem";
import { authUser } from "../../App";
import axios from "axios";
import Navbar from "../Navbar";
export default function Citypage() {
  const { city } = useParams();
  const [blog, setBlog] = useState([]);
  const [popcity, setPopcity] = useState([]);
  const lorem =
    "This is a template that is great for small businesses. It doesn't have too much fancy flare to it, but it makes a great use of the standard Bootstrap core components. Feel free to use this template for any project you want!";

  useEffect(() => {
    authUser
      .get(`/City/${city}`)
      .then((res) => {
        setBlog(res.data.cities[0]);
        setPopcity(res.data.cities[0].popularcities);
        console.log(res.data.cities[0].popularcities);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
    <Navbar/>
      <div>
        <div className="container">
          <div className="row align-items-center my-5">
            <div className="col-lg-7">
              <img
                className="img-fluid rounded mb-4 mb-lg-0"
                style={{ height: "300px", width: "800px" }}
                src={`http://localhost:5000/${blog.Pictures}`}
                alt=""
              />
            </div>

            <div className="col-lg-5">
              <h1 className="font-weight-light">{blog.Location}</h1>
              <p>{blog.Desc}</p>
            </div>
          </div>
        </div>

        <h1 className="">To Explore</h1>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-10 ">
              <div>
                {popcity.map((each) => {
                  return (
                    <div key={each._id}>
                      <CitypageItem
                        Title={each.Title}
                        Location={each.Location}
                        id={each._id}
                        Pictures={each.Pictures}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
