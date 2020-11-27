import React, { useState, useEffect } from "react";
import authUser from "../../../App";

function EachCity({ location }) {
  const [city, setCity] = useState({});

  const viewHandle = () => {};
  const editHandle = () => {};
  // const deleteHandle = () => {
  //   authUser
  //     .delete(`/blogs/${props.blogid}`)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => console.log(err));
  //   };

  // useEffect(() => {
  //   authUser
  //     .get(`/admin/addcity/${location}`)
  //     .then((res) => {
  //       // setCity(res.data.city);
  //       console.log(res);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12  mt-3 my-3">
            <div className="card">
              <div className="card-horizontal">
                <div className="row">
                  <div className="col-lg-4 col-sm-12">
                    <div className="img-square-wrapper">
                    <img
                      height="200px"
                      width="300px"
                        className=""
                        src="../images/delhi.jpg"
                        alt="Card image cap"
                      />
                    </div>
                  </div>
                  <div className="col-lg-8 col-sm-12">
                    <div className="card-body mx-2">
                      <h4 className="card-title">{city.Title}</h4>
                      <p className="card-text">{city.Body}</p>
                    </div>
                    <div className="">
                      <button
                        type="button"
                        className="btn btn-primary mx-1"
                        onClick={viewHandle}
                      >
                        View
                      </button>

                      <button
                        type="button"
                        className="btn btn-danger mx-1"
                        // onClick={deleteHandle}
                      >
                        Delete
                      </button>

                      <button
                        type="button"
                        className="btn btn-success mx-1"
                        // onClick={viewHandle}
                      >
                        Add New Place
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EachCity;
