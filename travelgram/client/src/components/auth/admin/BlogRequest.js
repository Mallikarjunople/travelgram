import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { authUser } from "../../../App";
function BlogRequest({ id }) {
  const [blog, setBlog] = useState({});
 
  const approveHandle = () => {
    authUser
      .patch(`/admin/blogreq/${id}`, { flag: 1 })
      .then((res) => {
        // console.log(res);
        //  console.log(blog.flag)
      })
      .catch((err) => console.log(err));
  };

  const disapproveHandle = () => {
    authUser
      .patch(`/admin/blogreq/${id}`, { flag: 2 })
      .then((res) => {
        // console.log(res);
        //  console.log(blog.flag)
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    authUser
      .get(`/admin/blogreq/${id}`)
      .then((res) => {
        setBlog(res.data);
        // console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
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
                        src={`http://localhost:5000/${blog.Pictures}`}
                        alt="Card image cap"
                      />
                    </div>
                  </div>
                  <div className="col-lg-8 col-sm-12">
                    <div className="card-body mx-2 ml-5">
                      <h4 className="card-title">{blog.Title}</h4>
                      <p className="card-text">{blog.Body}</p>
                    </div>
                    <div className="">
                      <NavLink to={`/viewblog/${id}`}><button
                      type="button"
                        className="btn btn-primary mx-1"
                        // onClick={viewHandle}
                      >
                        View
                      </button></NavLink>
                      <button
                      type="button"
                        className="btn btn-success mx-1"
                        onClick={approveHandle}
                      >
                        Approve
                      </button>
                      <button
                      type="button"
                        className="btn btn-danger mx-1"
                        onClick={disapproveHandle}
                      >
                        Disapprove
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

export default BlogRequest;
