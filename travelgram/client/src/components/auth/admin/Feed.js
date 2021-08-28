import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { authUser } from "../../../App";

function Feed(props) {
  const [blog, setBlog] = useState({});

  const deletefeed = () => {
    authUser
      .delete(`/admin/feedback/${props.id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    authUser
      .get(`/admin/feedback/${props.id}`)
      .then((res) => {
        setBlog(res.data);
        // console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="container">
        <div className="row ml-4">
          <div className="col-12  mt-3 my-3">
            <div className="card">
              <div className="card-horizontal">
                <div className="row">
                  <div className="col-lg-8 col-sm-12">
                    <div className="card-body mx-2 ml-5">
                      <div className="">{blog.name}</div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-12" >
                    <NavLink to={`/role/viewfeedback/${props.id}`}>
                      <button
                        type="button"
                        className="btn btn-success"
                        // onClick={viewHandle}
                      >
                        View
                      </button>
                    </NavLink>
                    <button
                      type="button"
                      className="btn btn-danger mx-1"
                      onClick={deletefeed}
                    >
                      Delete
                    </button>
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

export default Feed;
