import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { authUser } from "../../../App";

function Feed(props) {
  const [blog, setBlog] = useState({});
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
      <div className="container-fluid">
        <div className="row ml-4">
          <div className="col-12  mt-3 my-3">
            <div className="card">
              <div className="card-horizontal">
                <div className="row">
                  <div className="col-lg-8 col-sm-12">
                    <div className="card-body mx-2 ml-5">
                      <div className="">
                        {blog.name}
                        {blog.description}
                      </div>
                    </div>
                  </div>
                  <div>
                  <NavLink to={`/viewfeedback/${props.id}`}><button
                      type="button"
                        className="btn btn-success mx-1"
                        // onClick={viewHandle}
                      >
                        View
                      </button></NavLink>
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
