import React from "react";
import {
  FaWrench,
  FaTools,
  FaCarAlt,
  FaShieldAlt,
  FaSearch,
  FaAdjust,
} from "react-icons/fa";

const FeaturedServices = () => {
  const servicesTop = [
    {
      id: 1,
      icon: <FaWrench />,
      title: "Bike Repairs",
      description: "Quick and reliable repairs to get you back on the road.",
    },
    {
      id: 2,
      icon: <FaTools />,
      title: "Maintenance",
      description:
        "Comprehensive bike maintenance to keep it running smoothly.",
    },
    {
      id: 3,
      icon: <FaCarAlt />,
      title: "Customization",
      description: "Custom upgrades and modifications tailored to your needs.",
    },
  ];

  const servicesBottom = [
    {
      id: 4,
      icon: <FaShieldAlt />,
      title: "Diagnostics",
      description: "Accurate diagnostics to identify and fix issues fast.",
    },
    {
      id: 5,
      icon: <FaSearch />,
      title: "Safety Checks",
      description:
        "Thorough safety inspections to ensure your bike is road-ready.",
    },
    {
      id: 6,
      icon: <FaAdjust />,
      title: "Tune-Ups",
      description: "Expert tune-ups for optimal performance.",
    },
  ];

  return (
    <section className="featured-services">
      <div className="container">
        <h2 className="section-title">Featured Services</h2>

        <div className="services-grid">
          {servicesTop.map((service) => (
            <div key={service.id} className="service-item">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="services-grid-bottom">
          {servicesBottom.map((service) => (
            <div key={service.id} className="service-item">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
