import React from "react";

const Modal = ({ isModalVisible, handleCancel }) => {
  console.log("Modal");
  console.log(isModalVisible);
  return (
    <Modal title="Basic Modal" visible={true} onCancel={handleCancel}>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
};

export default Modal;
