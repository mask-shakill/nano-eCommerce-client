import React from "react";

const Card = (props) => {
  const { name, img, content, price } = props.product;
  return (
    <>
      <div>
        <div className="h-[370px] w-[280px] border-2 border-amber-500 rounded-t-lg">
          <img
            className="h-[250px] w-[250px]  rounded-lg m-3 "
            src={img}
            alt=""
          />
          <div className="ms-4 py-1">
            <p className="font-bold">{name}</p>
            <p>{content}</p>
            <p>{price}</p>
          </div>
        </div>
        <button className="bg-amber-500  py-1 w-[280px] rounded-b-lg hover:bg-pink-400">
          Add to cart
        </button>
      </div>
    </>
  );
};

export default Card;
