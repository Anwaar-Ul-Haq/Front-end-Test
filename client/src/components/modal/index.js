import React, { useEffect, useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

function EditModal({ open, product, onCloseModal, getDataFromChild, number }) {
  const [values, setValues] = useState({
    name: "",
    price: "",
    description: "",
  });
  const [image, setImage] = useState(null);

  useEffect(() => {
    setValues({
      name: product?.name,
      price: product?.price,
      description: product?.description,
    });
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleOnChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getDataFromChild(values, number, image);
    onCloseModal();
  };

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
              value={values.name}
              onChange={handleOnChange}
              className="border w-full p-2 rounded-md"
            />
          </div>
          <div>
            <label className="block py-3">Price</label>
            <input
              type="text"
              name="price"
              value={values.price}
              onChange={handleOnChange}
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
              value={values.description}
              onChange={handleOnChange}
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
          <div
            className="py-3 bg-blue-400 text-center rounded-md cursor-pointer"
            onClick={handleSubmit}
          >
            <button>Save</button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default EditModal;
