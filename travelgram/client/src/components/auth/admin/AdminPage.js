import React, { useState, useEffect } from "react";
import { authUser } from "../../../App";
import BlogRequest from "../admin/BlogRequest";

//Uncomment the map code after the admin routes has pblog array in response object

function AdminPage() {
  const [blogRequests, setBlogRequests] = useState([]);

  useEffect(() => {
    authUser
      .get("/admin/blogreq")
      .then((res) => {
        console.log(res.data.blogs);
        // setBlogRequests(res.data.blogs);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <h2>Admin page</h2>

      <h2>Blog requests</h2>
      <div>
        {/* {blogRequests.map((item) => (
          <BlogRequest id={item._id} />
        ))} */}
      </div>
    </>
  );
}

export default AdminPage;
