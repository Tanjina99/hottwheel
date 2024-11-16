import React, { useState, useEffect } from "react";

const HomePage = () => {
  const slides = [
    {
      image: "/images/racerr.webp",
      heading: "Discover Our Latest Bikes",
      description:
        "Browse through our collection of the latest bikes that combine performance with style.",
    },
    {
      image: "/images/repair.jpg",
      heading: "Expert Repairs at Your Fingertips",
      description: "From Broken Parts to Roaring Engines, We Fix It All.",
    },
    {
      image: "/images/homepage.jpg",
      heading: "Seasonal Promotions Just for You",
      description:
        "Enjoy amazing discounts on selected Hot Wheels this season. Don't miss out!",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 2 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="homepage">
      <div className="slider">
        <div className="slider-container">
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].heading}
            className="slider-image"
          />
          <div className="slider-content">
            <h2 className="slider-heading">{slides[currentSlide].heading}</h2>
            <p className="slider-description">
              {slides[currentSlide].description}
            </p>
          </div>
        </div>
        <button className="button-all slider-button prev" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="button-all slider-button next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>

      <p className="tagline">Feel the speed, experience the power.</p>
      <button className="button-all shop-now-btn">Shop Now</button>
    </div>
  );
};

export default HomePage;
