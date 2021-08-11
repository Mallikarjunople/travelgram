import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./css/main.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>Travelgram</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          onClick={()=>{
            window.scrollTo({top:0,behavior:"smooth"})
          }}
        >
          Explore
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
