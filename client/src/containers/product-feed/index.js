import React, { useEffect, useState } from "react";
import ProductCard from "../../components/product-card";

const ProductFeed = () => {
  const [products, setProducts] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [updatedNumber, setUpdatedNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const fetchProducts = async () => {
    try {
      const res = await fetch("http://localhost:4001/products");
      let data = await res.json();
      data = data.slice(0, 10);
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
    setOpen(!open);
  };

  const getUpdatedNumber = (data) => {
    setUpdatedNumber(data + 1);
  };

  return (
    <>
      <p className="py-5 text-center mt-10 text-lg">
        Product {updatedNumber && updatedNumber !== 0 ? updatedNumber : ""} was
        changed
      </p>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-20 mx-10">
        {products?.map((product, index) => {
          return (
            <ProductCard
              key={index}
              product={product}
              index={index}
              handleProductClick={() => handleProductClick(index)}
              activeIndex={activeIndex}
              getUpdatedNumber={(number) => getUpdatedNumber(number)}
              open={open}
            />
          );
        })}
      </div>
    </>
  );
};

export default ProductFeed;
