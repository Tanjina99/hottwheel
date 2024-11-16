import React from "react";

const CustomerFeedback = () => {
  const feedbackData = [
    {
      image: "/images/feedback/femaleuser.webp",
      customerName: "John Doe",
      stars: 5,
      description:
        "Amazing service! My bike was repaired quickly, and I couldn't be happier with the results. Highly recommend!",
    },
    {
      image: "/images/feedback/femaleuser1.webp",
      customerName: "Jane Smith",
      stars: 4.5,
      description:
        "The best bike shop around! They helped me customize my bike exactly how I wanted. Excellent customer service.",
    },
    {
      image: "/images/feedback/femaleuser2.webp",
      customerName: "Emily Johnson",
      stars: 4,
      description:
        "I had a great experience with the maintenance service. Very professional, and the bike is running smoother than ever.",
    },
    {
      image: "/images/feedback/maleuser.webp",
      customerName: "Michael Brown",
      stars: 5,
      description:
        "Fast and reliable! The diagnostic service saved me a lot of time and money. Great team.",
    },
    {
      image: "/images/feedback/maleuser1.png",
      customerName: "Sarah Wilson",
      stars: 3.5,
      description:
        "They truly care about their customers. I trusted them with my bike repair, and it came back looking brand new.",
    },
    {
      image: "/images/feedback/maleuser2.png",
      customerName: "Jon Wilson",
      stars: 3.5,
      description:
        "I highly recommend this business.Their customer service is second to none. The product quality is consistently outstanding, exceeding my expectations every time.",
    },
  ];

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    return (
      <>
        {"★".repeat(fullStars)}
        {halfStars === 1 && "☆"}
        {"☆".repeat(emptyStars)}{" "}
      </>
    );
  };

  return (
    <section className="customer-feedback">
      <div className="container">
        <h2 className="feedback-title">Customer Feedback</h2>
        <div className="feedback-grid">
          {feedbackData.map((feedback, index) => (
            <div key={index} className="feedback-item">
              <div className="feedback-header">
                <img
                  src={feedback.image}
                  alt={feedback.customerName}
                  className="feedback-image"
                />
                <span className="customer-name">{feedback.customerName}</span>
              </div>
              <div className="feedback-body">
                <p className="feedback-description">{feedback.description}</p>
                <div className="stars">{renderStars(feedback.stars)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerFeedback;
