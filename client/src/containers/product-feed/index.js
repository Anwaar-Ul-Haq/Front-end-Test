import React, { useEffect, useState } from "react";
import EditModal from "../../components/modal";
import ProductCard from "../../components/product-card";

const ProductFeed = () => {
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const onCloseModal = () => setOpen(false);

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

  const handleInputChange = (e) => {
    const updatedProducts = [...products];
    updatedProducts[activeIndex][e.target.name] = e.target.value;
    setProducts(updatedProducts);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const updatedProducts = [...products];
    updatedProducts[activeIndex].image = file;
    setProducts(updatedProducts);
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
      <EditModal
        product={products[activeIndex]}
        open={open}
        onCloseModal={onCloseModal}
        handleInputChange={handleInputChange}
        handleFileChange={handleFileChange}
      />
    </div>
  );
};

export default ProductFeed;
