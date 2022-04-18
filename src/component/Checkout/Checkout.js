import React from "react";
import "./Checkout.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Checkout = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast("thanks for checkout");
  };

  return (
    <>
      <div className="container d-flex">
        <div
          style={{ height: "1px" }}
          className="mt-5 bg-danger w-50
        "
        ></div>
        <h3 className="text-center text-danger mx-4 mt-3">Check Out Now</h3>
        <div
          style={{ height: "1px" }}
          className="mt-5 bg-danger w-50
        "
        ></div>
      </div>
      <div className="container">
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="name">Your name</label>
          <br />
          <input className="name" type="text" name="name" id="name" />
          <br />
          <label htmlFor="email">Enter your Email </label>
          <br />
          <input className="mail" type="email" name="email" id="email" />
          <br />
          <label htmlFor="phone">your Phone number</label>
          <br />
          <input className="phone" type="tel" name="phone" id="phone" />
          <br />
          <br />
          <label htmlFor="text">spcify your address</label>
          <br />
          <textarea
            className="text"
            name="text"
            id="text"
            cols="20"
            rows="5"
          ></textarea>
          <br />
          <br />
          <input className="submit" type="submit" value="Submit"></input>
        </form>
        <ToastContainer />
      </div>
    </>
  );
};

export default Checkout;
