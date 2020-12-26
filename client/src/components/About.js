import React from "react";
import '../css/about.css'
/**
 * @author
 * @function About
 **/

const About = (props) => {
  return (
    <div className="about">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <div className="about-img">
              <img src=".././img/butcher.png" alt="butcher" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <div className="about-desc">
              <h2>om roskilde slagterie</h2>
              <strong>
                Vi er forpligtet til total gennemsigtighed omkring vores
                produkter
              </strong>
              <p>
                Nunc elementum purus vel ex iaculis eleifend. Curabitur bibendum
                odio dui, at placerat antperer vitae. In hac habitasse platea
                dictumst. Phasellus nec sodales enim. Mauris malesuada nulla
                hole enim, nec eleifend lacus vulputate ut. Sed eu diam tellus.
                Sed feugiat, risus ut porta iaculis mauris metus volutpat metus,
                vitae egestas nibh neque vulputate libero.
              </p>
            </div>
            <button className="btn btn-outline">read more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
