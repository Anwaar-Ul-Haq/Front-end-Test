import React, { useEffect, useState } from "react";
import ProductCard from "../../components/product-card";

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
          <ProductCard
            product={product}
            index={index}
            handleProductClick={handleProductClick}
          />
        );
      })}
    </div>
  );
};

export default ProductFeed;
