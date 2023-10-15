import React from "react";
import NewProducts from "../Products/NewProducts";

const Shop = () => {
  return (
    <>
      <div className="grid  grid-cols-[4fr,1fr] ">
        <div className="">
          <NewProducts></NewProducts>
        </div>
        <div className="mt-10 text-lg font-bold">
          <h1>Order Summary</h1>
        </div>
      </div>
    </>
  );
};

export default Shop;
