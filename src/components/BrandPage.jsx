import React from "react";
import Marquee from "react-fast-marquee";

const BrandPage = () => {
  const brands = [
    { name: "BMW", image: "/images/brands/bmw.png" },
    { name: "Honda", image: "/images/brands/honda.png" },
    { name: "Suzuki", image: "/images/brands/suzuki.png" },
    { name: "Ducati", image: "/images/brands/duc.png" },
    { name: "Yamaha", image: "/images/brands/Yamaha.png" },
  ];

  return (
    <div className="brand-page">
      <h1 className="brand-page-title">Our Featured Brands</h1>
      <Marquee speed={50} gradient={false}>
        <div className="brands-container">
          {brands.map((brand, index) => (
            <div key={index} className="brand-item">
              <img
                src={brand.image}
                alt={`${brand.name} logo`}
                className="brand-image"
              />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default BrandPage;
