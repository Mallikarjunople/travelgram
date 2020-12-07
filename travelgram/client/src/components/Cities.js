import React from "react";
import "./css/main.css";
import{ NavLink } from 'react-router-dom';
// import authUser from '../../../App';

function Cities() {
const mumbai="Mumbai";
const pune="Pune";
const delhi="Delhi";
const banglore="Banglore";
  const lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar ex pulvinar est laoreet ullamcorper.";
  return (
    <>
      <div class="container-fluid my-5">
        <div class="title-arch">Popular Cities</div>

        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 project wow animated animated4 fadeInLeft">
          <div class="project-hover">
            <h2>Delhi</h2>
            <hr />
            <p>{lorem}</p>
            <NavLink to={`/citypage/${delhi}`}>Explore</NavLink>
          </div>
        </div>
        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 project project-2 wow animated animated3 fadeInLeft">
          <div class="project-hover">
            <h2>{mumbai}</h2>
            <hr />
            <p>{lorem}</p>
            <NavLink to={`/citypage/${mumbai}`}>Explore</NavLink>
          </div>
        </div>
        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 project project-3 wow animated animated2 fadeInLeft">
          <div class="project-hover">
            <h2>Pune</h2>
            <hr />
            <p>{lorem}</p>
            <NavLink to={`/citypage/${pune}`}>Explore</NavLink>
          </div>
        </div>
        
        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 project project-4 wow animated fadeInLeft">
          <div class="project-hover">
            <h2>Banglore</h2>
            <hr />
            <p>{lorem}</p>
            <NavLink to={`/citypage/${banglore}`}>Explore</NavLink>
          </div>
        </div>
        <div class="clearfix"></div>
      </div>
    </>
  );
}

export default Cities;
