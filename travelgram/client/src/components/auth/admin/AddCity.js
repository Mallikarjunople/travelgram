import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { authUser } from "../../../App";
import Modal from "react-modal";
Modal.setAppElement("#root");

// YET-TODO : after submitting the form it doesn't get cleared

const userId = localStorage.getItem("userId");
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
function AddCity() {
  const { register, handleSubmit }= useForm();
  //Modal Handlers
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const modalOpener = () => {
    setModalIsOpen(true);
  };
  const onRequestClose = () => {
    setModalIsOpen(false);
  };

  // const [blog, setBlog] = useState({
  //   Tags: "",
  //   Body: "",
  //   Location: "",
  //   Title: "",
  //   Pictures: "",
  // });
  // const inputEvent = (e) => {
  //   const { name, value } = e.target;

  //   setBlog((preValue) => {
  //     return {
  //       ...preValue,
  //       [name]: value,
  //     };
  //   });
  // };
  const sendHandler = (blog) => {
    // if (blog.Title && blog.Body && blog.Tags ) 
    {
      console.log(blog);
      setModalIsOpen(false);
      authUser
        .post(``, blog)
        .then((response) => {
          console.log(blog);
          console.log(response);
        })
        .catch((error) => console.log(error));
      alert("Your request has been Sent to get approved !!");
    }
    //  else alert("Please Fill all fields ");
  };

  return (
    <>
      {/* <p>{blog.date}</p> */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-10">
            <h1 className=" ">Add your post</h1>
            <div className="form-area">
              <form onSubmit={handleSubmit(sendHandler)}>
                <br styles="clear:both" />
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="Title"
                    ref={register}
                    name="Title"
                    // value={blog.Title}
                    // onChange={inputEvent}
                    placeholder="Title"
                    required
                  />
                </div>
                <div className="form-group">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                    ref={register}

                      id="Pictures"
                      name="Pictures"
                      // value={blog.Pictures}
                      // onChange={inputEvent}
                      placeholder="Pictures"
                      required
                    />
                  </div>{" "}
                </div>

                <div className="form-group">
                  <textarea
                    className="form-control"
                    type="textarea"
                    ref={register}
                    id="Body"
                    name="Body"
                    // value={blog.Body}
                    // onChange={inputEvent}
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
                    ref={register}
                    id="Tags"
                      name="Tags"
                      // value={blog.Tags}
                      // onChange={inputEvent}
                      placeholder="Tags"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    ref={register}
                    id="Location"
                    name="Location"
                    // value={blog.Location}
                    // onChange={inputEvent}
                    placeholder="Location"
                    required
                  />
                </div>
                {/* <div className="form-group">
                  <input
                    type="text"
                    // className="form-control"
                    ref={register}
                    id="date"
                    name="date"
                    // value={blog.Location}
                    // onChange={inputEvent}
                    placeholder="date"
                    required
                  />
                </div> */}

                {/* <Modal isOpen={modalIsOpen} style={customStyles}>
                  <p> Are you sure you want to send the blog to approve ?</p>

                  <button
                    type="button"
                    id="aprove"
                    name="approve"
                    className="btn btn-primary pull-right mx-1 my-3"
                    onClick={sendHandler}
                  >
                    Yes, Send to Approve.
                  </button>

                  <button
                    className="btn btn-danger mx-1"
                    onClick={onRequestClose}
                  >
                    NO
                  </button>
                </Modal> */}
                <button
                  className="btn btn-success mx-1"
                  type="submit"
                  // onClick={sendHandler}
                >
                  Add the City
                </button>

                <button
                  type="button"
                  name="goback"
                  className="btn btn-danger pull-right mx-1 my-3"
                  onClick={() => (window.location = "/adminpage")}
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

export default AddCity;
