/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import { NavLink } from 'react-router-dom';
import Brand from "../components/images/Brand.png"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const Navbar = () => {
  return (
   <>
   <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg ">
              <div className="container-fluid">
                <NavLink className="navbar-brand" to="/home">
                  <img className='logo' src={Brand} style={{width : "6rem"}}/>
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button" 
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a 
                      
                        className="nav-link"
                        aria-current="page"
                        href="/home">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/service">
                        Services
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/about">
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/contact">
                        Contact
                      </a>
                    </li>
                  </ul>
                  <NavLink to="/">
                  <button className='cart-button'>
                    <PersonIcon/>
                  </button>
                  </NavLink>
                  <NavLink to="/cart">
                  <button className='shop_button'>
                    <ShoppingCartIcon/>
                  </button>
                  </NavLink> 
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
   </>
  )
}

export default Navbar
