import React, { useEffect, useState } from "react";
import "../../App.css";
import TlogCard from "./TlogCard";
import "../css/main.css";
import { Button } from "../Button";
import { authUser } from "../../App";
import Navbar from '../Navbar'

export default function Tlogs() {
  const [data, setData] = useState([]);

  useEffect(() => {
    authUser
      .get("/blogs") //NEED CHANGES
      .then((res) => {
        setData(res.data.blogs);
        // console.log(res.data.blogs)
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {/* hero container for background hero image */}
      <Navbar/>
      <div className="travel-container">
        <h1>Travelogues</h1>
        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            onClick={() => {
              window.scrollTo({ top: 760, behavior: "smooth" });
            }}
          >
            Explore
          </Button>
        </div>
      </div>
      <div className="container">
        <div className="tlog__cards__group">
          {/* <div className="card-group " >
            <TlogCard />
            <TlogCard /> <TlogCard />   
          </div> */}
          <div className="row">
            {data.map((item) => {
              return (
                <div className="col-lg-6" key={item._id}>
                  <TlogCard
                    title={item.Title}
                    desc={item.Body}
                    id={item._id}
                    lastupdated={item.date}
                    Pictures={item.Pictures}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
