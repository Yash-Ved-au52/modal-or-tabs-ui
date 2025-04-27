import { useState } from "react";
import Modal from "./components/Modal";
import Tabs from "./components/Tabs";
import Testimonial from "./components/TestimonialSlider";
import "./App.css"; // Global CSS

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showTestimonial, setShowTestimonial] = useState(false);

  const tabsData = [
    { label: "Home", content: <p>Welcome to the Home Tab 🏠</p> },
    { label: "Profile", content: <p>Here is your Profile Info 👤</p> },
    { label: "Settings", content: <p>Manage your Settings ⚙️</p> },
  ];

  // Agar testimonial view on hai to Testimonial page dikhana
  if (showTestimonial) {
    return (
      <div className="app-container">
        <h1 className="app-title">Testimonials</h1>
        <Testimonial />
        <button className="button back-btn" onClick={() => setShowTestimonial(false)}>
          🔙 Back
        </button>
      </div>
    );
  }

  // Normal Modal + Tabs ka flow
  return (
    <div className="app-container">

      <div className="button-group">
        <button className="button open-modal-btn" onClick={() => setIsModalOpen(true)}>
          Open Modal
        </button>

        <button className="button view-testimonial-btn" onClick={() => setShowTestimonial(true)}>
          View Testimonials
        </button>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="modal-heading">Modal with Tabs</h2>
        <Tabs tabs={tabsData} />
      </Modal>
    </div>
  );
}

export default App;
