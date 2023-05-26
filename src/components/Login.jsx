/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import 'animate.css';

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault(); // Prevents the form from submitting normally

    if (username === "aisharafiq" && password === "aisharafiq") {
      navigate("/home");
    } else {
      alert("Password is Incorrect");
    }
    // TODO: Add logic to authenticate user with server
  };

  return (
    <>
    <div className="animate__animated animate__fadeInDownBig">
      <form
        onSubmit={handleLogin}
        className="animate_animated animate_fadeInDown"
      >
        <div className="container">
          <div className="login-wrap">
            <div className="login-html">
              <input
                id="tab-1"
                type="radio"
                name="tab"
                className="sign-in"
                checked
              />
              <label for="tab-1" className="tab">
                Sign In
              </label>
              <input id="tab-2" type="radio" name="tab" className="sign-up" />
              <label for="tab-2" className="tab">
                Sign Up
              </label>
              <div className="login-form">
                <div className="sign-in-htm">
                  <div className="group">
                    <label for="user" className="label">
                      Username
                    </label>
                    <input className="input"
                    type="text"
                    id="username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)} />
                  </div>
                  <div className="group">
                    <label
                      for="pass"
                      className="label"
                      type="password"
                      id="password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="input"
                      data-type="password"
                      id="password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                    />
                  </div>
                  <div className="group">
                    <input id="check" type="checkbox" className="check" checked />
                    <label for="check">
                      <span className="icon"></span> Keep me Signed in
                    </label>
                  </div>
                  <div className="group">
                    <input type="submit" className="button" value="Sign In" />
                  </div>
                  <div className="hr"></div>
                  <div className="foot-lnk">
                    <a href="#forgot">Forgot Password?</a>
                  </div>
                </div>
                <div className="sign-up-htm">
                  <div className="group">
                    <label for="user" className="label">
                      Username
                    </label>
                    <input id="user" type="text" className="input" />
                  </div>
                  <div className="group">
                    <label>
                      Password
                    </label>
                    <input
                      id="pass"
                     type="pas sword"
                      className="input"
                      data-type="password"
                    />
                  </div>
                  <div className="group">
                    <label for="pass" className="label">
                      Repeat Password
                    </label>
                    <input
                      id="pass"
                      type="password"
                      className="input"
                      data-type="password"
                    />
                  </div>
                  <div className="group">
                    <label for="pass" className="label">
                      Email Address
                    </label>
                    <input id="pass" type="text" className="input" />
                  </div>
                  <div className="group">
                    <input type="submit" className="button" value="Sign Up" />
                  </div>
                  <div className="hr"></div>
                  <div className="foot-lnk">
                    <label for="tab-1" />
                    <a>Already Member?</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      </div>
    </>
  );
};

export default Login;
