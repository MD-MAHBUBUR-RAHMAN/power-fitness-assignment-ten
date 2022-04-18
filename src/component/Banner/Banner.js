import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../src/images/banner/img1.jpg";
import banner2 from "../../../src/images/banner/img2.jpg";
import banner3 from "../../../src/images/banner/img3.jpg";

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="d-block h-50 w-100" src={banner1} alt="First slide" />
        <Carousel.Caption>
          <h3 className="text-danger">
            ACHIEVE YOUR GOALS WITH A PERSONAL TRAINER
          </h3>
          <p>
            guide you on how to perform exercises correctly and safely, making
            sure you target the right muscles while preventing injuries.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block h-50 w-100" src={banner2} alt="Second slide" />

        <Carousel.Caption>
          <h3 className="text-danger">Get in Shape</h3>
          <p>To work to have good, robust health; to become strong or fit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block h-50 w-100" src={banner3} alt="Third slide" />

        <Carousel.Caption>
          <h3 className="text-danger">Achieve your goals as a team</h3>
          <p>
            Whatever your goal, working with a PT will challenge you and help
            you get there quicker than on your own.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
