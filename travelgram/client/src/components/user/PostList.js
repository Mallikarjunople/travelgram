import React, { useState, useEffect } from "react";
import { authUser } from "../../App";

function PostList(props) {
  const [blog, setBlog] = useState({});

  useEffect(() => {
    authUser
      .get(`blogs/${props.blogid}`)
      .then((res) => {
        setBlog(res.data.blog);
        // console.log(res.data.blog)
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 mt-3 my-3">
            <div className="card">
              <div className="card-horizontal">
                <div className="row">
                  <div className="col-4 ">
                    <div className="img-square-wrapper">
                      <img
                        className=""
                        src="http://via.placeholder.com/300x180"
                        alt="Card image cap"
                      />
                    </div>
                  </div>
                  <div className="col-8">
                    <div className="card-body">
                      <h4 className="card-title">{blog.Title}</h4>
                      <p className="card-text">{blog.Body}</p>
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

export default PostList;
