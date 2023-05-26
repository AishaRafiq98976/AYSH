import './App.css'
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Contact from "./components/Contact"
import Service from "./components/Service"
import About from "./components/About"
import Footer from './components/Footer';
import Login from './components/Login';
import Shop from './components/Shop';
import Checkout from './components/Checkout';
import 'animate.css';
import "./shop.scss"
import { CartProvider } from 'react-use-cart';

function App() {
  

  return (
    <>
    <CartProvider>
      <Routes>
      <Route exact path="/" element={<Login/>}/>
        <Route exact path='/home' element={<Home/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/service" element={<Service/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path='/cart' element={<Shop/>}/>
        <Route exact path='/checkout' element={<Checkout/>}/>
      </Routes>
      </CartProvider>
      <Footer/>
    </>
  )
}

export default App
