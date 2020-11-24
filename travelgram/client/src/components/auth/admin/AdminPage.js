import React, { useState, useEffect } from "react";
import { authUser } from "../../../App";
import BlogRequest from '../admin/BlogRequest'

function AdminPage() {
    

  useEffect(() => {
    authUser
      .get("/admin/blogreq")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <h2>Admin page</h2>

    <h2>Blog requests</h2>
    <BlogRequest/>


    </>
  );
}

export default AdminPage;
