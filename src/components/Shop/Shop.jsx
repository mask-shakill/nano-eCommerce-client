import React, { useState } from "react";
import NewProducts from "../Products/NewProducts";

const Shop = () => {
  const [cart, setCart] = useState([]);
  const HandleCart = (id) => {
    const newCart = [...cart, id];
    setCart(newCart);
  };
  return (
    <>
      <div className="grid  grid-cols-[4fr,1fr] ">
        <div className="">
          <NewProducts HandleCart={HandleCart}></NewProducts>
        </div>
        <div className="mt-10 text-lg font-bold">
          <h1>Order Summary</h1>
          <h1 className="">Order items : {cart.length}</h1>
        </div>
      </div>
    </>
  );
};

export default Shop;
