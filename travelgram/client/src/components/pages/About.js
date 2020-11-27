import React from "react";

function About() {
  return (
    <>
      <header className="bg-dark text-center py-5 mb-4">
        <div className="container">
          <h1 className="font-weight-light text-white">Meet The Team</h1>
        </div>
      </header>

      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-md-6 mb-4">
            <div className="card border-0 shadow">
              <img src="/images/.jpg" className="about_image" alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title mb-0">Moderator</h5>
                <div className="card-text text-black-50">Web Developer</div>
              </div>
            </div>
          </div>

          <div className="col-xl-6 col-md-6 mb-4">
            <div className="card border-0 shadow">
              <img
                className="card-img-top"
                alt="..."
              />
              <div className="card-body text-center">
                <h5 className="card-title mb-0">Team Member</h5>
                <div className="card-text text-black-50">Web Developer</div>
              </div>
            </div>
          </div>

          <div className="col-xl-6 col-md-6 mb-4">
            <div className="card border-0 shadow">
              <img
                src="https://source.unsplash.com/sNut2MqSmds/500x350"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body text-center">
                <h5 className="card-title mb-0">Team Member</h5>
                <div className="card-text text-black-50">Web Developer</div>
              </div>
            </div>
          </div>

          <div className="col-xl-6 col-md-6 mb-4">
            <div className="card border-0 shadow">
              <img
                src="https://source.unsplash.com/ZI6p3i9SbVU/500x350"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body text-center">
                <h5 className="card-title mb-0">Team Member</h5>
                <div className="card-text text-black-50">Web Developer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
