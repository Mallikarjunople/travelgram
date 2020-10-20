import React, { useEffect } from "react";
import "../../App.css";
import Cards from "../Cards";
import HeroSection from "../HeroSection";
// import {useParams} from "react-router-dom";
import Navbar from '../Navbar'
import Footer from '../Footer'
import Theme from "../Theme";
// import City from '../city/City';
import Cities from "../Cities";
import Axios from "axios";
// token , userId




function Home() {
  // const getToken = localStorage.getItem('token')
  // const getId = localStorage.getItem("userId")

  // Axios.get(`user/${getId}`)
  // .then(res=> console.log(res))

  // useEffect(()=>{
  //   if(getToken==null) 
  //   window.location="login/user"
  // },[])
  return (
    <>
    <Navbar/>
      <HeroSection />
      <Cities />
      {/* <City/> */}
      <Theme />
      <Cards />
      <Footer/>
    </>
  );
}

export default Home;
