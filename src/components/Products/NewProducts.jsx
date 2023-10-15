import React, { useEffect, useState } from "react";
import Card from "../Product/Card";

const NewProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("newProduct.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
    //   .then((data) => console.log(data));
  }, []);
  return (
    <>
      <div className="grid grid-cols-3  m-20">
        {products.map((product) => (
          <Card key={product.id} product={product}></Card>
        ))}
      </div>
    </>
  );
};

export default NewProducts;
