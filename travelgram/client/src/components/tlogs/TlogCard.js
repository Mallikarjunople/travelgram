import React from "react";
import { Link } from "react-router-dom";
import "../css/main.css";

function TlogCard() {
  return (
    <>
      <div class="card tlog__card " >
        <img src="../images/img-7.jpg" class="card-img-top" alt="..." />
        <div class="card-body tlog__card__body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <Link to="/tlogpost">
            {" "}
            <button className="btn btn-danger">Show post</button>
          </Link>
        </div>
        <div class="card-footer">
          <small class="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
    </>
  );
}

export default TlogCard;
