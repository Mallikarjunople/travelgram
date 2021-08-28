import React from "react";
import "./css/main.css";
import { NavLink } from "react-router-dom";
// import authUser from '../../../App';

function Cities() {
  const mumbai = "Mumbai";
  const pune = "Pune";
  const delhi = "Delhi";
  const banglore = "Banglore";
  const desc4 = "Bangalore is widely regarded as the Silicon Valley of India (or IT capital of India) because of its role as the nation's leading information technology (IT) exporter. Indian technological organisations are headquartered in the city."
  const desc3 = "Pune is widely regarded as the second major IT hub of India and the top automobile and manufacturing hub of India. It is known as the Oxford of the East with the presence of a wide range of educational institutions."
  const desc1 =
    "Mumbai, formerly Bombay, city, capital of Maharashtra state, southwestern India. It is the country’s financial and commercial centre and its principal port on the Arabian Sea.";
  const desc2 = "The rich cultural history of Delhi is reflected in its majestic architecture. Delhi has no dearth of heritage sites, from the best of imperial British structures to archaic minars, forts, baolis, mosques, and temples, the city is an explorer's delight!"
  return (
    <>
      <div class="container-fluid my-5">
        <div class="title-arch">Popular Cities</div>

        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 project wow animated animated4 fadeInLeft">
          <div class="project-hover">
            <h2>{delhi}</h2>
            <hr />
            <p>{desc2}</p>
            <NavLink to={`/citypage/${delhi}`}>Explore</NavLink>
          </div>
        </div>
        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 project project-2 wow animated animated3 fadeInLeft">
          <div class="project-hover">
            <h2>{mumbai}</h2>
            <hr />
            <p>{desc1}</p>
            <NavLink to={`/citypage/${mumbai}`}>Explore</NavLink>
          </div>
        </div>
        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 project project-3 wow animated animated2 fadeInLeft">
          <div class="project-hover">
            <h2>Pune</h2>
            <hr />
            <p>{desc3}</p>
            <NavLink to={`/citypage/${pune}`}>Explore</NavLink>
          </div>
        </div>

        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 project project-4 wow animated fadeInLeft">
          <div class="project-hover">
            <h2>Banglore</h2>
            <hr />
            <p>{desc4}</p>
            <NavLink to={`/citypage/${banglore}`}>Explore</NavLink>
          </div>
        </div>
        <div class="clearfix"></div>
      </div>
    </>
  );
}

export default Cities;
