import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { authUser } from "../../../App";

function ViewFeedback() {
  const { id } = useParams();
  const [blog, setBlog] = useState({});

  useEffect(() => {
    authUser
      .get(`/admin/feedback/${id}`)
      .then((res) => {
        // console.log(res.data);
        setBlog(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="row">
        <div className="container col-10">
          <div className="row">
            <div className="col-lg-2">
              <button
                className="btn btn-danger mt-3"
                onClick={()=>window.history.back()}
              >
                Go Back
              </button>
            </div>
            <div className="col-lg-10 pt-3">
              <h5>User Feedback</h5>
              <p className="lead my-4 mx-auto">{blog.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewFeedback;
