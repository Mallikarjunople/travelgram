import React from "react";
import "../../App.css";
import Cards from "../Cards";
import HeroSection from "../HeroSection";
// import {useParams} from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Theme from "../Theme";
// import City from '../city/City';
import Cities from "../Cities";
// import Axios from "axios";
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

  const ScrollToTop = () => (
    <button
      className="btn btn-success "
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      Go to Top
    </button>
  );

  // const Scroll = ({to})=><span className="btn btn-success" onClick={()=>document.getElementById(to).scrollIntoView({behavior:"smooth"})} >Go to Top</span>
  return (
    <>
      <Navbar/>
      <HeroSection />
      <Cities />
      {/* <City/> */}
      <Theme />
      <Cards />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          marginBottom: 45,
          marginRight: 45,
        }}
      >
        <ScrollToTop />
      </div>

      <Footer />
    </>
  );
}

export default Home;
