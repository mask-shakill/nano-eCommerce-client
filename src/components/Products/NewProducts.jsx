import React, { useEffect, useState } from "react";
import Card from "../Product/Card";

const NewProducts = (props) => {
  const [products, setProducts] = useState([]);
  const HandleCart = props.HandleCart;
  useEffect(() => {
    fetch("newProduct.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
    //   .then((data) => console.log(data));
  }, []);

  return (
    <>
      <div className="grid xl:grid-cols-3  sm:grid-cols-1 m-20">
        {products.map((product) => (
          <Card
            key={product.id}
            product={product}
            HandleCart={HandleCart}
          ></Card>
        ))}
      </div>
    </>
  );
};

export default NewProducts;
