/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./Navbar";
import { useCart } from "react-use-cart";
import { NavLink } from "react-router-dom";

const Shop = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  if (isEmpty)
    return (
      <h1 className="text-center">
        <Navbar />
        <div className="my-5 text-center text-danger">
          <span> The Cart is Empty</span>
        </div>
      </h1>
    );

  return (
    <>
    <Navbar/>
      <section className="py-4 container">
        <div className="row justify-content-center">
          <div className="col-12">
            <h5>
              Cart ({totalUniqueItems}) total Items: ({totalItems})
            </h5>
            <table className="table table-light table-hover m-0">
              <tbody>
                {items.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <img src={item.imgSrc} style={{ height: "6rem" }} />
                      </td>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                      <td>Quantity {item.quantity}</td>
                      <td>
                        <button
                          className="btn btn-info ms-2"
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity - 1)
                          }
                        >
                          -
                        </button>
                        <button
                          className="btn btn-info ms-2"
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                        <button
                          className="btn btn-danger ms-2"
                          onClick={() => removeItem(item.id)}
                        >
                          Remove Item
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="col-auto ms-auto my-3">
            <h4>Total Price: Rs {cartTotal}</h4>
          </div>
          <div className="col-auto">
            <button
              className="btn btn-danger m-2 my-2"
              onClick={() => emptyCart()}
            >
              Clear Cart
            </button>
            <NavLink to="/checkout">
              <button className="btn btn-primary m-2 my-2">Buy Now</button>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
