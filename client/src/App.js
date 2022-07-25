import React, { useState } from "react";
import "./App.css";
import ProductFeed from "./containers/product-feed";

function App() {
  const [indexNumber, setIndexNumber] = useState(0);
  const getindexNumber = (data) => {
    setIndexNumber(data + 1);
  };
  return (
    <div className="App">
      <p className="py-5 text-center mt-10 text-lg">
        Product {indexNumber && indexNumber !== 0 ? indexNumber : ""} was
        changed
      </p>
      <ProductFeed getindexNumber={(data) => getindexNumber(data)} />
    </div>
  );
}

export default App;
