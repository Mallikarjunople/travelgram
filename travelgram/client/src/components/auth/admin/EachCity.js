import React, { useState, useEffect } from "react";
import { authUser } from "../../../App";import { useForm } from "react-hook-form";
import Modal from "react-modal";
Modal.setAppElement("#root");

function EachCity({ location }) {
  const { register, handleSubmit }= useForm();
  const [city, setCity] = useState([]);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const modalOpener = () => {
    setModalIsOpen(true);
  };
  const onRequestClose = () => {
    setModalIsOpen(false);
  };

  const addPlace = (place) => {
    // if (blog.Title && blog.Body && blog.Tags ) 
    {
      console.log(place);
      setModalIsOpen(false);
      authUser
        .post(`/admin/addCity/popularPlace`, place) 
        /// when adding new place in any city City field name should be same as City is.
        .then((response) => {
          console.log(place);
          console.log(response);
        })
        .catch((error) => console.log(error));
      alert("Your request has been Sent to get approved !!");
    }
    //  else alert("Please Fill all fields ");
  };



 
  const viewHandle = () => {};
  const editHandle = () => {};
  // const deleteHandle = () => {
  //   authUser
  //     .delete(`/blogs/${props.blogid}`)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => console.log(err));
  //   };

  useEffect(() => {
    authUser
      .get(`/admin/addcity/${location}`)
      .then((res) => {
        setCity(res.data.cities[0]);
        console.log(res.data.cities);
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
                        width="300px"
                        className=""
                        src="../images/delhi.jpg"
                        alt="Card image cap"
                      />
                    </div>
                  </div>
                  <div className="col-lg-8 col-sm-12">
                    <div className="card-body mx-2">
                      <h4 className="card-title">{city.Title}</h4>
                      <p className="card-text">{city.Body}</p>
                    </div>
                    <div className="">
                      <button
                        type="button"
                        className="btn btn-primary mx-1"
                        onClick={viewHandle}
                      >
                        View
                      </button>

                      <button
                        type="button"
                        className="btn btn-success mx-1"
                        onClick={modalOpener}
                      >
                        Add New Place
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
               
              <form onSubmit={handleSubmit(addPlace)}>
                <br styles="clear:both" />
                <h4 className="pb-3">Add Popular Place in this City</h4>
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
                {/* <div className="form-group">
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
                </div> */}

                <div className="form-group">
                  <textarea
                    className="form-control"
                    type="textarea"
                    ref={register}
                    id="Desc"
                    name="Desc"
                    // value={blog.Body}
                    // onChange={inputEvent}
                    placeholder="Description"
                    maxlength="1500"
                    rows="6"
                    required
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
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    ref={register}
                    id="City"
                    name="City"
                    // value={blog.City}
                    // onChange={inputEvent}
                    placeholder="City"
                    required
                  />
                </div>
      
                <button
                  className="btn btn-success mx-1"
                  type="submit"
                  // onClick={addPlace}
                >
                  Add the Place
                </button>

                <button
                  type="button"
                  name="goback"
                  className="btn btn-danger pull-right mx-1 my-1"
                  onClick={() => setModalIsOpen(false)}
                >
                 Close
                </button>
              </form>


              </div>
            
              
            </Modal>
         

    </>
  );
}

export default EachCity;
