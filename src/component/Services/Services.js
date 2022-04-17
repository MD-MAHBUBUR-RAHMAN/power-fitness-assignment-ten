import React, { useEffect, useState } from "react";
import Singleservice from "../Singlesevice/Singleservice";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="container">
      <h2 className="mt-5">Services</h2>
      <div className="row g-5 mt-5">
        {services.map((service) => (
          <Singleservice key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
