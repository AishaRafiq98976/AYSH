/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "react-use-cart";
import Shop from "./Shop";

const ServiceData = (props) => {

  const {addItem} = useCart();

  return (
    <>
    <div className="animate__animated animate__fadeInUp">
      <main className="grid container my-5 text-center">
        <div className="col-md-4 col-10 mx-auto my-3 ">
          <div className="card cards_data">
            <img src={props.imgSrc} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{props.name}</h5>
              <p className="card-text">{props.price}</p>
              <NavLink to="" className="">
                <button className="btn btn-primary" onClick={()=>{
                  addItem(props.item)
                }}>
                Add to Cart
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </main>               
    </div>
    
    </>
  );
};

export default ServiceData;
