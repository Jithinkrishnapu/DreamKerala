import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CloseIcon from "./CloseIocn.jsx";
import CloseIocn from "./CloseIocn.jsx";

function ModalComponent({ children, showModal, setShowModal }) {
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  return (
    <>
      <Modal
        size="lg"
        scrollable
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={showModal}
        onHide={handleClose}
      >
        <Modal.Header>
          <Modal.Title
            className="d-flex w-100 px-3 flex-row justify-content-between"
            id="contained-modal-title-vcenter"
          >
            <span>Book Your Trip</span>
            <button
              onClick={handleClose}
              type="button"
              class="close bg-transparent"
              aria-label="Close"
            >
             <CloseIocn size={12} />
            </button>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </>
  );
}

export default ModalComponent;
