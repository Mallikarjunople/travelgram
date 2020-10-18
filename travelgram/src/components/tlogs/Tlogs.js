import React from "react";
import "../../App.css";
import CardItem from "../CardItem";
import HeroSection from "../HeroSection";
import TlogCard from "./TlogCard";
import "../css/main.css";

export default function Tlogs() {
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
<div className='row'>
  <div className="col-lg-6">
    <TlogCard/> 
  </div>
  <div className="col-lg-6">
    <TlogCard/> 
  </div>
  <div className="col-lg-6">
    <TlogCard/> 
  </div>
  <div className="col-lg-6">
    <TlogCard/> 
  </div>
</div>


        </div>
      </div>
    </>
  );
}
