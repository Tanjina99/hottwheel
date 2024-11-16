import React from "react";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1 className="about-title">About Us</h1>

      {/* Section 1 - Image Right */}
      <div className="about-section">
        <div className="about-text">
          <h1>Our Beginnings</h1>
          <p>
            Started with a passion for motorcycles, our shop has been dedicated
            to providing top-notch bikes, accessories, and repair services. We
            believe in quality, reliability, and the thrill of the ride.
          </p>
        </div>
        <img
          src="/images/aboutimg/img1.webp"
          alt="Our Beginnings"
          className="about-image"
        />
      </div>

      {/* Section 2 - Image Left */}
      <div className="about-section reverse">
        <img
          src="/images/aboutimg/img2.webp"
          alt="Our Commitment"
          className="about-image"
        />
        <div className="about-text">
          <h1>Our Commitment</h1>
          <p>
            We are committed to offering the best in motorcycle services and
            products. From sourcing high-quality bikes to providing repair and
            maintenance, we strive to meet the needs of every rider.
          </p>
        </div>
      </div>

      {/* Section 3 - Image Right */}
      <div className="about-section">
        <div className="about-text">
          <h1>Our Future</h1>
          <p>
            Looking forward, we aim to be a hub for motorcycle enthusiasts
            everywhere. Our goal is to expand our services, grow our community,
            and continue to fuel the passion for motorcycling.
          </p>
        </div>
        <img
          src="/images/aboutimg/img3.webp"
          alt="Our Future"
          className="about-image"
        />
      </div>
    </div>
  );
};

export default AboutUs;
