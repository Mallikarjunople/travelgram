import React from "react";
import { Link } from "react-router-dom";
import "../css/main.css";

function TlogCard(props) {
 

  return (
    <>
      <div className="card tlog__card ">
        <img src="../images/img-7.jpg" className="card-img-top" alt="..." />
        <div className="card-body tlog__card__body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <Link to="/tlogpost">
          
            <button className="btn btn-danger">Show post</button>
          </Link>
        </div>
        <div className="card-footer">
          <small className="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
    </>
  );
}

export default TlogCard;
