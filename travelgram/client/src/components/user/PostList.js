import React, { useState, useEffect } from "react";
import { authUser } from "../../App";
import Modal from "react-modal";
import { NavLink } from "react-router-dom";
import EditPost from "./EditPost";

Modal.setAppElement("#root");
function PostList(props) {
  const [blog, setBlog] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const modalOpener = () => {
    setModalIsOpen(true);
  };
  const onRequestClose = () => {
    setModalIsOpen(false);
  };

  const editHandle = () => {};

  const inputEvent = (e) => {
    const { name, value } = e.target;

    setBlog((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const saveChanges = (e) => {
    e.preventDefault();
    // console.log(blog);
    authUser
      .patch(`/blogs/${props.blogid}`, [
        { propName: "Title", value: blog.Title },
        { propName: "Tags", value: blog.Tags },
        { propName: "Location", value: blog.Location },
        { propName: "Pictures", value: blog.Pictures },
        { propName: "Body", value: blog.Body },
      ])
      .then((response) => {
        console.log(response);
        alert("Information Updated Successfully");
      })
      .catch((error) => {
        console.log(error);
      });

    setModalIsOpen(false);
  };

  const deleteHandle = () => {
    authUser
      .delete(`/blogs/${props.blogid}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    authUser
      .get(`/blogs/${props.blogid}`)
      .then((res) => {
        setBlog(res.data.blog);
        console.log(res.data.blog);
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
                        width="350px"
                        className=""
                        src={`http://localhost:5000/${blog.Pictures}`}
                      />
                    </div>
                  </div>
                  <div className="col-lg-8 col-sm-12">
                    <div className="card-body mx-2">
                      <h4 className="card-title">{blog.Title}</h4>
                      <p className="card-text">{blog.Body}</p>
                    </div>
                    <div className="">
                      <NavLink to={`/viewblog/${props.blogid}`}>
                        {" "}
                        <button type="button" className="btn btn-primary mx-1">
                          View
                        </button>
                      </NavLink>
                      <button
                        type="button"
                        className="btn btn-success mx-1"
                        onClick={() => setModalIsOpen(true)}
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger mx-1"
                        onClick={deleteHandle}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={modalIsOpen}>
        <div className="modal-body">
          <form onSubmit={saveChanges}>
            <div className="form-group">
              <label for="editname" className="col-form-label">
                Title:
              </label>
              <input
                type="text"
                className="form-control"
                id="editname"
                name="Title"
                value={blog.Title}
                onChange={inputEvent}
              />
            </div>
            <div className="form-group">
              <label for="editemail" className="col-form-label">
                Tags:
              </label>
              <input
                type="text"
                className="form-control"
                id="editemail"
                name="Tags"
                value={blog.Tags}
                onChange={inputEvent}
              />
            </div>
            <div className="form-group">
              <label for="editphone" className="col-form-label">
                Location:
              </label>
              <input
                type="text"
                className="form-control"
                id="editphone"
                name="Location"
                value={blog.Location}
                onChange={inputEvent}
              />
            </div>
            <div className="form-group">
              <label for="Pictures" className="col-form-label">
                Pictures:
              </label>
              <input
                type="text"
                className="form-control"
                id="editphone"
                name="Pictures"
                value={blog.Pictures}
                onChange={inputEvent}
              />
            </div>
            <div className="form-group">
              <label for="editabout" className="col-form-label">
                About:
              </label>
              <textarea
                type="text"
                className="form-control"
                id="editphone"
                name="Body"
                value={blog.Body}
                onChange={inputEvent}
              />
            </div>
          </form>
        </div>
        <button
          className="btn btn-danger mx-1"
          onClick={() => setModalIsOpen(false)}
        >
          Close
        </button>
        <button
          type="submit"
          className="btn btn-primary mx-1"
          onClick={saveChanges}
        >
          Save changes
        </button>
      </Modal>
    </>
  );
}

export default PostList;
