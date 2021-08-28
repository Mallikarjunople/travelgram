import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { authUser } from "../../App";
import ThemePageItem from "../ThemePageItem";

function ThemePage() {
  const { tags } = useParams();
  const [blogs, setBlogs] = useState([]);

  // console.log(tags);
  useEffect(() => {
    authUser
      .get(`/tags/${tags}`)
      .then((res) => {
        setBlogs(res.data.blogs);
        // console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {/* The background image for each theme should be different..to be done */}
      <div className="container-fluid backimg">
        <div className="container py-3">
          <h1> {tags}</h1>
          {blogs.map((each) => (
                  <ThemePageItem id={each._id} />
                ))}
        </div>
      </div>
    </>
  );
}

export default ThemePage;
