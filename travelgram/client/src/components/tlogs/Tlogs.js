import React, { useEffect, useState } from "react";
import "../../App.css";
import TlogCard from "./TlogCard";
import "../css/main.css";
import axios from "axios";

export default function Tlogs() {
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    axios
      .get("/users/posts")  //NEED CHANGES
      .then((res) => {
        console.log(res.data);
        setDetail(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {/* hero container for background hero image */}
      <div className="hero-container">
        <h1>Travelogues</h1>
      </div>
      <div className="container">
        <div className="tlog__cards__group">
          {/* <div className="card-group " >
            <TlogCard />
            <TlogCard /> <TlogCard />   
          </div> */}
          <div className="row">
            {detail.map((item) => {
              return (
                <div className="col-lg-6" key={item._id}>
                  <TlogCard title={item.title} desc={item.desc} id={item.id} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
