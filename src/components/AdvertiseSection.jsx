import React from "react";
import { FaCheckCircle, FaClock, FaCalendarAlt } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";

const AdvertiseSection = () => {
  const advertiseData = [
    {
      id: 1,
      icon: <FaCheckCircle />,
      heading: "Real-Time Availability",
      description:
        "Check product and service availability in real-time, ensuring you never miss an opportunity.",
    },
    {
      id: 2,
      icon: <FaCalendarAlt />,
      heading: "Instant Booking",
      description:
        "Easily book repairs or service appointments with just a few clicks.",
    },
    {
      id: 3,
      icon: <FaClock />,
      heading: "Flexible Scheduling",
      description:
        "Customize your appointments to fit your busy schedule. Choose the time that works for you.",
    },
    {
      id: 4,
      icon: <RiCustomerService2Fill />,
      heading: "24/7 Customer Support",
      description:
        "Our customer support team is available 24/7 to assist you with any concerns or questions.",
    },
  ];

  return (
    <section className="advertise-section">
      <div className="container">
        <h2 className="advertise-title">Why Choose Us?</h2>
        <div className="advertise-header">
          <div className="advertise-image">
            <img src="/images/whyus/cool.png" alt="Why Choose Us" />
          </div>
          <div className="advertise-content">
            <div className="advertise-cards">
              {advertiseData.map((item) => (
                <div key={item.id} className="advertise-card">
                  <div className="advertise-header-content">
                    <div className="advertise-icon">{item.icon}</div>
                    <h3 className="advertise-heading">{item.heading}</h3>
                  </div>
                  <p className="advertise-description">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvertiseSection;
