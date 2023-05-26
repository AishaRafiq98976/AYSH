/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";
import aboutUS from "./images/aboutUs.png"
import Navbar from "./Navbar";


const About = () => {
  return (
    <div>
      <Navbar/>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-1 order-lg-0 d-flex justify-content-center flex-column">
                  <h1 className="homeh">Create your connection with
                    <strong className="homeBrand"> Aisha Rafiq </strong>
                  </h1>
                  <h5 className="my-3">
                    We are team of Desingers making Wearables
                  </h5>
                  <div className="mt-3">
                    <NavLink to="/contact">
                      <button className="homeb">Contact Us</button>
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img row">
                  <img src={aboutUS} className="img-fluid floating" alt="Home Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
