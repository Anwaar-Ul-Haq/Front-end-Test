import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

function EditModal({
  open,
  product,
  handleInputChange,
  handleFileChange,
  onCloseModal,
}) {
  return (
    <Modal
      open={open}
      onClose={onCloseModal}
      center
      className="rounded-lg border"
    >
      <div className="p-10 h-full">
        <form>
          <div className="">
            <label className="block py-3">Name</label>
            <input
              type="text"
              name="name"
              value={product?.name}
              onChange={(e) => handleInputChange(e)}
              className="border w-full p-2 rounded-md"
            />
          </div>
          <div>
            <label className="block py-3">Price</label>
            <input
              type="text"
              name="price"
              value={product?.price}
              onChange={(e) => handleInputChange(e)}
              className="border w-full p-2 rounded-md"
            />
          </div>
          <div>
            <label className="block py-3">Description</label>
            <textarea
              type="text"
              rows={5}
              cols="50"
              name="description"
              value={product?.description}
              onChange={(e) => handleInputChange(e)}
              className="border w-full p-2 rounded-md"
            />
          </div>
          <div className="py-5">
            <input
              type="file"
              name="image"
              onChange={(e) => handleFileChange(e)}
              className="border w-full p-2 rounded-md"
            />
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default EditModal;
