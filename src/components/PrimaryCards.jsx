import React from "react";

import { Button } from "./index";

const PrimaryCards = ({ pic, heading, para, price }) => {
  return (
    <div className="border border-border-color p-3 w-fit flex flex-col gap-4 justify-center ">
      <div>
        <img src={pic} alt="" />
      </div>
      <h1 className="font-interSemiBold text-2xl">{heading}</h1>
      <p className="font-interRegular text-lg text-[#A6A6A6]"> {para} </p>
      <div className="flex items-center gap-10">
        <h2 className="text-primary-color font-interSemiBold text-2xl ">
          {price}
        </h2>
        <p className="font-interRegular text-[#A6A6A6] bg-[#F5F5F5] p-1 capitalize ">
          <span className="font-interRegular text-[#1F2744] mr-1 ">
            360m<sup>2</sup>
          </span>
          Living area
        </p>
      </div>
      <Button
        text="send inquiry"
        className="w-full grid place-content-center py-2 capitalize border-2 border-primary-color text-primary-color hover:text-white hover:bg-primary-color transition-all  bg-transparent "
      />
    </div>
  );
};

export default PrimaryCards;
