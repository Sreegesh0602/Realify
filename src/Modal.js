import React from "react";
import './Modal.css';

function Modal({ isOpen, closeModal, image, name }) {
  if (!isOpen) return null; // Don't render the modal if isOpen is false

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{name}</h2>
        <img src={image} alt={name} className="modal-image" />
        <button className="close-btn" onClick={closeModal}>Close</button>
      </div>
    </div>
  );
}

export default Modal;
