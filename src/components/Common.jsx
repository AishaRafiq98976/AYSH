// eslint-disable-next-line no-unused-vars
import React from "react";
import { NavLink } from "react-router-dom";

const Common = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-1 order-lg-0 d-flex justify-content-center flex-column">
                  <h1 className="homeh">
                    <strong className="homeBrand"> MoeexNaeem </strong>
                  </h1>
                  <h5 className="my-3">
                    We are team of Web Developers making websites
                  </h5>
                  <div className="mt-3">
                    <NavLink to="">
                      <button className="homeb"></button>
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img row">
                  <img src="" className="img-fluid floating" alt="Home Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
