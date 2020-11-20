import React from "react";

function CreatePost() {
  return (
    <>
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
                    name="title"
                    placeholder="Title"
                    required
                  />
                </div>
                <div className="form-group"> *Add Photos section* </div>

                <div className="form-group">
                  <textarea
                    className="form-control"
                    type="textarea"
                    id="subject"
                    placeholder="Content"
                    maxlength="700"
                    rows="7"
                  ></textarea>
                </div>
                <div className="form-group"> *Add tags section* </div>
                <button
                  type="button"
                  id="submit"
                  name="submit"
                  className="btn btn-primary pull-right"
                >
                  Add Post
                </button>
              </form>
            </div>
          </div>
        </div>{" "}
      </div>
    </>
  );
}

export default CreatePost;
