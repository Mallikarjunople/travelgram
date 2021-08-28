import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { authUser } from "../../../App";
import Feed from "./Feed";

function AdminFeedback() {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    authUser
      .get(`/admin/feedback`)
      .then((res) => {
        setFeeds(res.data.cities);
        // console.log(res.data.cities);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <h1>Feedback</h1>
      <div>
        {feeds.map((item) => (
          <div key={item._id}>
            <Feed id={item._id} />
          </div>
        ))}
      </div>
     
    </>
  );
}

export default AdminFeedback;
