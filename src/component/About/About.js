import React from "react";
import myimage from "../../images/image/me.jpg";

const About = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <h3 className="text-center text-primary mb-3 text-decoration-underline">
          About Myself
        </h3>
        <div className="col-12 col-md-6">
          <img className="img-fluid p-2" src={myimage} alt="" />
        </div>
        <div className="col-12 col-md-6 p-3 d-flex align-items-center">
          <div>
            <div>
              <h4 className="">Md Mahbubur Rahman</h4>
              <p>
                <small>Web Developer in Noakhali, Bangladesh</small>
              </p>
            </div>
            <div>
              <p>
                HI there, I am Md Mahbubr Rahman learner of web development. I
                create websites that help people succeed in their objectives. I
                wish to be hired as a junior web developer after successfully
                finishing my learning. Recently, I am working hard on web
                technology. I hope I would be a successful web developer in
                recent years.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
