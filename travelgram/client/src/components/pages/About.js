import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from '../Navbar'
function About() {
  return (
    <>
    <Navbar/>
      <header className="bg-dark  py-5 mb-4">
        <div className="container">
          <h1 className="font-weight-light text-white">Meet The Team</h1>

         
          
            <NavLink to="/feedback">
              <button className="btn btn-success ">
                Give Feedback
              </button>
            </NavLink>
         
        </div>
      </header>

      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-0 shadow">
              <img src="/images/ople.jpg" className="about_image" alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title mb-0">Mallikarjun Ople</h5>
                <div className="card-text text-black-50">Web Developer</div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-0 shadow">
              <img className=" about_image" src="https://cdn.iconscout.com/icon/free/png-512/laptop-user-1-1179329.png" alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title mb-0">Vaibhav Mahindra</h5>
                <div className="card-text text-black-50">Web Developer</div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-0 shadow">
              <img
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--_HBZhuhF--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/nweeqf97l2md3tlqkjyt.jpg"
                className="about_image"
                alt="..."
              />
              <div className="card-body text-center">
                <h5 className="card-title mb-0">Vrushabh Kulye</h5>
                <div className="card-text text-black-50">Full Stack Developer</div>
              </div>
            </div>
          </div>

          {/* <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-0 shadow">
              <img
                src="https://cdn.iconscout.com/icon/free/png-512/laptop-user-1-1179329.png"
                className="about_image"
                alt="..."
              />
              <div className="card-body text-center">
                <h5 className="card-title mb-0">Sudarshan Jamdar</h5>
                <div className="card-text text-black-50">Web Developer</div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default About;
