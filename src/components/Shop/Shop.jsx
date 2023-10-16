import React, { useState } from "react";
import NewProducts from "../Products/NewProducts";

const Shop = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalShipping, setTotalShipping] = useState(0);
  const [totalTax, setTotalTax] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);
  const HandleCart = (id, price, tax, shipping) => {
    const newCart = [...cart, id];
    setCart(newCart);
    let IntPrice = parseInt(price);
    let NewTotalPrice = totalPrice + IntPrice;
    setTotalPrice(NewTotalPrice);
    setTotalShipping(totalShipping + shipping);
    setTotalTax(totalTax + tax);
    setGrandTotal(grandTotal + NewTotalPrice + totalTax + totalShipping);
  };

  return (
    <>
      <div className="grid  grid-cols-[4fr,1fr] ">
        <div className="">
          <NewProducts HandleCart={HandleCart}></NewProducts>
        </div>

        <div className=" bg-slate-500 text-white">
          <h1 className="text-lg font-bold text-center mt-10">Order Summary</h1>
          <div className=" mt-10 flex flex-col gap-y-2 ms-5 me-5">
            <p>Selected items : {cart.length}</p>
            <p>Total Price : ${totalPrice}</p>
            <p>Total Shipping charge : ${totalShipping}</p>
            <p>Tax: ${totalTax}</p>
            <p>Grand Total: ${grandTotal}</p>
            <button className="bg-red-400  font-semibold hover:bg-red-600 py-1 rounded-lg ">
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
