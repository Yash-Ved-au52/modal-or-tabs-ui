import React, { useState } from "react";
import "../styles/TestimonialSlider.css";

const testimonials = [
  {
    name: "Rahul Sharma",
    review: "Bahut accha service tha, highly recommended!",
    image:
      "https://th.bing.com/th/id/OIP.4ngpXpi4AA0ViOpJGZu4jwHaHR?pid=ImgDet&w=186&h=183&c=7&dpr=2.1",
    role: "CEO, Tech Solutions",
    rating: 5,
  },
  {
    name: "Priya Mehta",
    review: "Very professional and quick support!",
    image:
      "https://th.bing.com/th/id/OIP.4ngpXpi4AA0ViOpJGZu4jwHaHR?pid=ImgDet&w=186&h=183&c=7&dpr=2.1",
    role: "Marketing Director",
    rating: 4,
  },
  {
    name: "Aman Verma",
    review:
      "Amazing experience. 5 stars! Will definitely work with them again.",
    image:
      "https://th.bing.com/th/id/OIP.4ngpXpi4AA0ViOpJGZu4jwHaHR?pid=ImgDet&w=186&h=183&c=7&dpr=2.1",
    role: "Founder, Startup Ventures",
    rating: 5,
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const renderStars = (rating) => {
    return (
      <div className="rating-stars">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={`star ${i < rating ? "filled" : ""}`}>
            {i < rating ? "★" : "☆"}
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="testimonial-slider">
      <h2 className="section-title">Client Testimonials</h2>
      <p className="section-subtitle">What people say about our services</p>

      <div className="testimonial-container">
        <button onClick={prevSlide} className="nav-btn prev-btn">
          ‹
        </button>

        <div className="testimonial-card">
          <div className="testimonial-content">
            <div className="quote-icon">"</div>
            <p className="testimonial-text">
              {testimonials[currentIndex].review}
            </p>
            <div className="testimonial-author">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="author-image"
              />
              <div className="author-info">
                <h4 className="author-name">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="author-role">{testimonials[currentIndex].role}</p>
                {renderStars(testimonials[currentIndex].rating)}
              </div>
            </div>
          </div>
        </div>

        <button onClick={nextSlide} className="nav-btn next-btn">
          ›
        </button>
      </div>

      <div className="dots-container">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
