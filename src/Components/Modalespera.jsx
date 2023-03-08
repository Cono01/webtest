import React, { useState } from "react";
import loading from "../Assets/img/loading.gif";
function Modal(props) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>              
              &times;
            </span>
            <p>
            <img id="loading" width="50%" height="50%" src={loading} alt="loading" />
</p>

          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;