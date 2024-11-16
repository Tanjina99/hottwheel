import React from "react";
import { FaWrench, FaOilCan, FaTools, FaCar } from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Engine Repair",
    description:
      "Fix engine issues, including diagnostics and part replacements.",
    icon: <FaWrench />,
    image: "/images/serviceimg/fixengine.png",
  },
  {
    id: 2,
    title: "Oil Change",
    description:
      "Change the engine oil and filter to keep your engine running smoothly.",
    icon: <FaOilCan />,
    image: "/images/serviceimg/oilchange.png",
  },
  {
    id: 3,
    title: "Tire Replacement",
    description: "Replacing tires for better grip and safety on the road.",
    icon: <FaTools />,
    image: "/images/serviceimg/tirechange.png",
  },
  {
    id: 4,
    title: "Brakes Service",
    description: "Inspect and repair braking systems to ensure safety.",
    icon: <FaCar />,
    image: "/images/serviceimg/brake.png",
  },
];

const Service = () => {
  return (
    <div className="services-page">
      <h1 className="services-header">
        Motorcycle Repair & Maintenance Services
      </h1>
      <div className="services-container">
        {services.map((service) => (
          <div className="service-card" key={service.id}>
            <div className="service-image">
              <img src={service.image} alt={service.title} />
            </div>
            <div className="service-info">
              <div className="service-icon">{service.icon}</div>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
