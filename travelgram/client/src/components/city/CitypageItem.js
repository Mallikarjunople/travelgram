import React from "react";
import "./../css/main.css";

function CitypageItem(props) {
  return (
    <>

       <div className="card">
        <div className="row ">
          <div className="col-md-5">
          <img
                  height="200px"
                  width="350px"
                  src={`http://localhost:5000/${props.Pictures}`}
                  alt="imge"
                />
          </div>
          <div className="col-md-7 px-3">
            <div className="card-block px-3">
            <h3  className="my-3">{props.Title}</h3>
            <h5 className="my-3">{props.Location}</h5>

              <button className="btn btn-primary float-right mt-5">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CitypageItem;
