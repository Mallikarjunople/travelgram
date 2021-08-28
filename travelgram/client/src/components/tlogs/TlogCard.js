import React from "react";
import { Link } from "react-router-dom";
import "../css/main.css";
import { baseUrl } from "../../App";

function TlogCard(props) {
  return (
    <>
      <div className="card tlog__card ">
        <img
          src={baseUrl + `${props.Pictures}`}
          className="card-img-top"
          alt="Image"
        />
        <div className="card-body tlog__card__body">
          <h3 className="card-title">{props.title}</h3>

          <Link to={`/tlogpost/${props.id}`}>
            <button className="btn btn-danger">Show post</button>
          </Link>
        </div>
        <div className="card-footer">
          <p className="text-muted">
            Posted on {props.lastupdated.split("T")[0]}
          </p>
        </div>
      </div>
    </>
  );
}

export default TlogCard;
