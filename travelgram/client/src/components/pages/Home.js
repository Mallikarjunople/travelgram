import React from "react";
import "../../App.css";
import Cards from "../Cards";
import HeroSection from "../HeroSection";

import Theme from "../Theme";
// import City from '../city/City';
import Cities from "../Cities";

function Home() {
  return (
    <>
      <HeroSection />
      <Cities />
      {/* <City/> */}
      <Theme />
      <Cards />
    </>
  );
}

export default Home;
