import React from "react";
import Slider from "react-slick";
import { allBikesList } from "../staticData/allbikeslist";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BestSeller = () => {
  const bestSellers = allBikesList.map((category) => category.bikes).flat();

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Set to show 4 bikes at once
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="best-seller-bikes-slider">
      <h2>Best Seller Bikes</h2>
      <Slider {...settings}>
        {bestSellers.map((bike) => (
          <div key={bike.id} className="bike-slide">
            <h3 className="bike-name">{bike.name}</h3>
            <img src={bike.image} alt={bike.name} className="bike-image" />
            <div className="bike-details">
              <p>
                <strong>MSRP:</strong> ${bike.MSRP}
              </p>
              <p>
                <strong>Engine:</strong> ${bike.Engine}
              </p>
              <p>
                <strong>Horsepower:</strong> ${bike.Horsepower}
              </p>
              <p>
                <strong>Torque:</strong> ${bike.Torque}
              </p>
              <p>
                <strong>Weight:</strong> ${bike.Weight}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BestSeller;
