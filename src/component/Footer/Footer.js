import React from "react";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div
      style={{ height: "50px" }}
      className=" mt-5 fixed-bottom mx-auto bg-dark min-h-25  d-flex align-items-center justify-content-center"
    >
      <h6 className="text-center text-white">
        <small>copyright &copy; {year} </small>
      </h6>
    </div>
  );
};

export default Footer;
