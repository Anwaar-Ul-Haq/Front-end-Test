import React, { useEffect, useState } from "react";
import EditModal from "../modal";

function ProductCard({
  product,
  index,
  handleProductClick,
  activeIndex,
  getUpdatedNumber,
  open,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState(null);
  const [upatedProduct, setUpdatedProduct] = useState({
    name: product?.name,
    price: product?.price,
    description: product?.description,
  });
  const onCloseModal = () => setIsOpen(false);
  let condition = activeIndex ?? activeIndex === index;
  useEffect(() => {
    if (activeIndex === index) {
      setIsOpen(true);
    }
  }, [condition, open]);

  const getDataFromChild = (data, number, image) => {
    setUpdatedProduct(data);
    getUpdatedNumber(number);
    setImage(image);
  };
  return (
    <>
      <div
        key={product?.name}
        className="bg-white border rounded-sm shadow-md cursor-pointer"
        onClick={() => handleProductClick(index)}
      >
        <div className="flex justify-between px-5">
          <h4 className="py-5">{upatedProduct?.name}</h4>
          <h4 className="py-5 text-right">{upatedProduct?.price}</h4>
        </div>
        <div className="border rounded-sm shadow-md h-60">
          <img
            src={
              image
                ? URL.createObjectURL(image)
                : "https://wwwtest.logistec.com/wp-content/uploads/2017/12/placeholder.png"
            }
            alt="sample tree"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="p-5 text-left h-32">
          {upatedProduct?.description?.length > 120
            ? `${upatedProduct?.description?.substr(0, 120)}...`
            : upatedProduct?.description}
        </p>
        <div className="grid grid-cols-2 gap-5 mt-5 mb-3 px-5">
          <h4 className="py-5"> {product?.category}</h4>
          <button className="bg-blue-400 rounded-md p-2 h-12">Buy</button>
        </div>
      </div>
      <EditModal
        product={product}
        open={isOpen}
        number={activeIndex}
        onCloseModal={onCloseModal}
        getDataFromChild={(data, number, image) =>
          getDataFromChild(data, number, image)
        }
        handleProductClick={handleProductClick}
      />
    </>
  );
}

export default ProductCard;
