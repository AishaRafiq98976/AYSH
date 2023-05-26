/* eslint-disable no-unused-vars */
import React from "react";
import Card from "./Card";
import { useState, useEffect } from "react";
import axios from "axios";
import ServiceData from "./ServiceData";
import Navbar from "./Navbar";
import clothData from "./clothData";


const Service = () => {


  return (
    <>
      <Navbar />
      <div>
        <h2 className="text-center pt-4 pb-2 container">
          <span>OUR PRODUCTS</span>
        </h2>
        <hr className="bottom_line" />
        <div className="grid container my-5">
          {clothData.map((item, index) => {
            const { id, name, price, imgSrc } = item;
            return (
              <ServiceData
                id={id}
                key={index}
                imgSrc={item.imgSrc}
                name={item.name}
                price={item.price}
                item={item}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Service;
