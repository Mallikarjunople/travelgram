import React from "react";
import { useForm } from "react-hook-form";
import { authUser } from "../../App";
import Navbar from "../Navbar";
function Feedback() {
  const { register, handleSubmit } = useForm();
  const sendHandler = (data) => {
    {
      authUser
        .post(`/feedback`, data)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => console.log(error));
      alert("Feedback sent successfully !!");
    }
    //  else alert("Please Fill all fields ");
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5">
        <div className="row">
          <div className="col-10">
            <h1 className="text-center">Feedback</h1>
            <div>
              <form onSubmit={handleSubmit(sendHandler)}>
                <div className="form-group mt-4">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    ref={register}
                    name="name"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <div className="form-group">
                    <textarea
                      type="textarea"
                      className="form-control"
                      ref={register}
                      id="description"
                      name="description"
                      placeholder="Answer"
                      maxlength="700"
                      rows="7"
                      required
                    />
                  </div>
                </div>
                <div>
                  <button type="submit" className="btn btn-primary mt-2">
                    Submit Feedback
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feedback;
