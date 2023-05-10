import React, { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(!showModal);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button primary onClick={handleClose}>
        I Accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <h1>Random Text</h1>
    </Modal>
  );

  return (
    <div>
      <Button primary onClick={handleClick}>
        {showModal ? "Close" : "Open"} Modal
      </Button>
      {showModal && modal}
    </div>
  );
};

export default ModalPage;
