import React, { useState } from "react";
import { authUser } from "../../App";



const userId = localStorage.getItem("userId");
function CreatePost() {
  
  const [blog, setBlog] = useState({
    Tags: "",
    Body: "",
    Location: "",
    Title: "",
    Pictures: "",
  });
  const inputEvent = (e) => {
    const { name, value } = e.target;

    setBlog((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };
  const sendHandler = () => {
    
    if (blog.Title && blog.Body && blog.Tags && blog.Pictures) {
      authUser
        .post(`/blogs`, blog)
        .then((response) => {
          console.log(blog);
          console.log(response);
        })
        .catch((error) => console.log(error));
    } else alert("Please Fill all fields ");
  };

  return (
    <>
    <p>{blog.date}</p>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-10">
            <h1 className=" ">Add your post</h1>
            <div className="form-area">
              <form role="form">
                <br styles="clear:both" />
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="Title"
                    value={blog.Title}
                    onChange={inputEvent}
                    placeholder="Title"
                    required
                  />
                </div>
                <div className="form-group">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="pictures"
                      name="Pictures"
                      value={blog.Pictures}
                      onChange={inputEvent}
                      placeholder="Pictures"
                      required
                    />
                  </div>{" "}
                </div>

                <div className="form-group">
                  <textarea
                    className="form-control"
                    type="textarea"
                    id="body"
                    name="Body"
                    value={blog.Body}
                    onChange={inputEvent}
                    placeholder="Content"
                    maxlength="700"
                    rows="7"
                  ></textarea>
                </div>
                <div className="form-group">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="tags"
                      name="Tags"
                      value={blog.Tags}
                      onChange={inputEvent}
                      placeholder="Tags"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="location"
                    name="Location"
                    value={blog.Location}
                    onChange={inputEvent}
                    placeholder="Location"
                    required
                  />
                </div>
                <button
                  type="button"
                  id="submit"
                  name="submit"
                  className="btn btn-primary pull-right mx-1 my-3"
                  onClick={sendHandler}
                >
                  Send to Approve
                </button>
                <button
                  type="button"
                  name="goback"
                  className="btn btn-success pull-right mx-1 my-3"
                  onClick={()=> window.location="/userprofile"}
                >
                  Go Back
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreatePost;
