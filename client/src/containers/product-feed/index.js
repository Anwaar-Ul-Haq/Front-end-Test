import React, { useEffect, useState } from "react";

const ProductFeed = () => {
  const [products, setProducts] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);

  const fetchProducts = async () => {
    try {
      const res = await fetch("http://localhost:4001/products");
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleProductClick = (index) => {
    setActiveIndex(index);
    setOpen(true);
  };

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-20 mx-10">
      {products?.map((product, index) => {
        return (
          <div
            key={product.name}
            className="bg-white border rounded-sm shadow-md cursor-pointer"
            onClick={() => handleProductClick(index)}
          >
            <div className="flex justify-between px-5">
              <h4 className="py-5">{product.name}</h4>
              <h4 className="py-5 text-right">{product.price}</h4>
            </div>
            <div className="border rounded-sm shadow-md h-60">
              <img
                src={
                  product.image
                    ? URL.createObjectURL(product.image)
                    : "https://wwwtest.logistec.com/wp-content/uploads/2017/12/placeholder.png"
                }
                alt="sample tree"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="p-5 text-left h-32">
              {product.description?.length > 120
                ? `${product.description?.substr(0, 120)}...`
                : product.description}
            </p>
            <div className="grid grid-cols-2 gap-5 mt-5 mb-3 px-5">
              <h4 className="py-5"> {product.category}</h4>
              <button className="bg-blue-400 rounded-md p-2 h-12">Buy</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductFeed;
