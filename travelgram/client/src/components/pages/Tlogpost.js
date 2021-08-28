import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { authUser , baseUrl } from "../../App";

function Tlogpost() {
  const { id } = useParams();
  const [blog, setBlog] = useState([]);
  const [userDetail, setUserDetail] = useState([]);
  // const token = localStorage.getItem("token");

  console.log(id);
  useEffect(() => {
    authUser
      .get(`/blogs/${id}`)
      .then((res) => {
        setBlog(res.data.blog);
        setUserDetail(res.data.blog.user);
        // console.log(userDetail);
        console.log(res.data.blog);
        // let onlyDate = blog.date.split('T')[0];
        // alert(onlyDate);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="container align-content-center">
        <div className="row">
          <div className="col-lg-10">
            <h1 className="mt-4">{blog.Title}</h1>

            <p className="lead ">
              by
              <a href="google.com" style={{ marginLeft: "5px" }}>
                {userDetail.name}
              </a>
            </p>

            <p>Posted on August 15, 2021 at 12:00 PM</p>

            <img
              className="my-4 border-black"
              width="750px"
              height="400px"
              src={baseUrl + `${blog.Pictures}`}
              alt=""
            />

            <p className="lead">{blog.Body}</p>
          </div>

          {/* <div className="col-lg-4">
            <div className="card my-4">
              <h5 className="card-header">Related posts </h5>
              <div className="card-body">
                <img
                  src="../images/nature.jpg"
                  style={{
                    backgroundColor: "grey",
                    width: "200px",
                    height: "200px",
                  }}
                  alt=""
                />
                <h5 style={{ marginTop: "10px" }}>Firstname LastName</h5>
                <button className="btn btn-danger  ">view post</button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Tlogpost;
