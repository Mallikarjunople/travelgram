import React, { useState,useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from 'axios'
import Modal from "react-modal";



function UserProfile() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const userId = localStorage.getItem('userId');
  const [user, setUser] = useState({
    name:"",
    email:"",
    phone:"",
  })

 
//   useEffect(()=>{
//     //request for user information
//     axios.get(`/users`)
//     .then(res=>{console.log(res.data)
//     })
//     .catch(err => {console.log(err)})
// //request for user posts
// axios.get(`/users/${userId}`)
// .then(res=>{console.log(res.data)
// })
// .catch(err => {console.log(err)})

// })


  const modalOpener = () => {
    setModalIsOpen(true);
  };
  const onRequestClose = () => {
    setModalIsOpen(false);
  };
  return (
    <>
      <div className="container">
        <div className="main-body">
          {/*     
          <!-- Breadcrumb --> */}
          <nav aria-label="breadcrumb" className="main-breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <NavLink to="/">Home</NavLink>
              </li>

              <li className="breadcrumb-item active" aria-current="page">
                User Profile
              </li>
            </ol>
          </nav>

          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar7.png"
                      alt="Admin"
                      className="rounded-circle"
                      width="150"
                    />
                    <div className="mt-3">
                      <h3>{user.name}</h3>
                      <p className="text-secondary mb-1">
                        Full Stack Developer
                      </p>
                      <p className="text-muted font-size-sm">
                        Bay Area, San Francisco, CA
                      </p>
                      {/* <button className="btn btn-primary">Follow</button>
                      <button className="btn btn-outline-primary">
                        Message
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mt-3">
                <ul className="list-group list-group-flush">
                
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-instagram mr-2 icon-inline text-danger"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                      Instagram
                    </h6>
                    <span className="text-secondary">bootdey</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-facebook mr-2 icon-inline text-primary"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                      Facebook
                    </h6>
                    <span className="text-secondary">bootdey</span>
                  </li>
                </ul>
              </div>
            </div>

            <Modal isOpen={modalIsOpen} className="">
              <div
                className="modal fade bd-example-modal-lg"
                tabindex="-1"
                role="dialog"
                aria-labelledby="myLargeModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-lg">
                  <div className="modal-content">...</div>
                </div>
              </div>
              <button classNameName="" onClick={() => setModalIsOpen(false)}>
                Close
              </button>
            </Modal>

            <div className="col-md-8">
              <div className="card mb-3">
                <div className="card-body userpersonalinfo">
                  <div className="row">
                    <div className="col-lg-10 col-9">
                      <h4>Personal Information</h4>
                    </div>
                    <div className="col-lg-2 col-3">
                      <button className="btn btn-primary" onClick={modalOpener}>
                        Edit
                      </button>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3">
                      <div className="mb-0 my-3">Full Name</div>
                    </div>
                    <div className="col-sm-9 my-3 text-secondary">
                     {user.name}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3 my-3">
                      <div className="mb-0">Email</div>
                    </div>
                    <div className="col-sm-9 my-3 text-secondary">
                      {user.email}
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-3 my-3">
                      <div className="mb-0">Phone</div>
                    </div>
                    <div className="col-sm-9 my-3 text-secondary">
                      {user.phone}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3 my-3">
                      <div className="mb-0">About me</div>
                    </div>
                    <div className="col-sm-9 my-3 text-secondary">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longerThis is a wider card with supporting text
                      below as a natural lead-in to additional content. This
                      content is a little bit longer..
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div className="card mb-3">
              <div className="card-body w-auto">
                <h3>My posts</h3>

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
                                <h4 className="card-title">Card title</h4>
                                <p className="card-text">
                                  Some quick example text to build on the card
                                  title and make up the bulk of the card's
                                  content.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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

export default UserProfile;
