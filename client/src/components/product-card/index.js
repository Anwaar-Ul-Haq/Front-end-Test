import React from "react";

function ProductCard({ product, index, handleProductClick }) {
  return (
    <div
      key={product?.name}
      className="bg-white border rounded-sm shadow-md cursor-pointer"
      onClick={() => handleProductClick(index)}
    >
      <div className="flex justify-between px-5">
        <h4 className="py-5">{product?.name}</h4>
        <h4 className="py-5 text-right">{product?.price}</h4>
      </div>
      <div className="border rounded-sm shadow-md h-60">
        <img
          src={
            product?.image
              ? URL.createObjectURL(product?.image)
              : "https://wwwtest.logistec.com/wp-content/uploads/2017/12/placeholder.png"
          }
          alt="sample tree"
          className="w-full h-full object-cover"
        />
      </div>
      <p className="p-5 text-left h-32">
        {product?.description?.length > 120
          ? `${product?.description?.substr(0, 120)}...`
          : product?.description}
      </p>
      <div className="grid grid-cols-2 gap-5 mt-5 mb-3 px-5">
        <h4 className="py-5"> {product?.category}</h4>
        <button className="bg-blue-400 rounded-md p-2 h-12">Buy</button>
      </div>
    </div>
  );
}

export default ProductCard;
