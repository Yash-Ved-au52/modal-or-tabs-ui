import React from "react";
import "../styles/Modal.css"; // Isme apn normal CSS likhenge

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <div className={`modal-overlay ${isOpen ? "show" : ""}`}>
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>×</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
