import React, { useState, useEffect } from "react";
import { authUser , baseUrl } from "../App";

import { NavLink } from "react-router-dom";
function ThemePageItem(props) {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    authUser
      .get(`/blogs/${props.id}`)
      .then((res) => {
        setBlog(res.data.blog);
        console.log(res.data.blog);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {props.Title}

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
                        width="350px"
                        className=""
                        src={baseUrl + `${blog.Pictures}`}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-12">
                    <div className="card-body mx-2">
                      <h4 className="card-title">{blog.Title}</h4>
                      <p className="card-text">{blog.Body}</p>

                      <NavLink to="/tlogpost/">
                        <button className="btn btn-danger">Go to Blog </button>
                      </NavLink>
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

export default ThemePageItem;
