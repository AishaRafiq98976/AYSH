/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react';
import Navbar from './Navbar';

const Contact = () => {
  const [data, setData] = useState({
    fullName:"",
    lastName:"",
    number:"",
    email:"",
    message:"",
  });

  const inputEvent =(event) =>{
    const {name, value} = event.target;

    setData((preVal)=>{
      return {
        ...preVal,
        [name]: value,
      }
    })
  }
  const OnSubmit =(e)=>[
      e.preventDefault(),
      alert(`My name is ${data.fullName}. My last name is ${data.lastName}. My Phone Number is ${data.number}.
      My Email is ${data.email}. The Message is ${data.message}`)
  ]
  return (
    <>
    <Navbar/>
      <div className="my-5">
        <h1 className="os text-center">Contact Us</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto my-5">
            <form action='https://formspree.io/f/xknayvry' method='POST'>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="fullName"
                  value={data.fullName}
                  onChange={inputEvent}
                />
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="lastName"
                  value={data.lastName}
                  onChange={inputEvent}
                />
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Phone Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="number"
                  value={data.number}
                  onChange={inputEvent}
                />
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={inputEvent}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  name="message"
                  value={data.message}
                  onChange={inputEvent}
                  rows="3"
                ></textarea>
              </div>
              <div className="col-12">
                <button className="homea" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
