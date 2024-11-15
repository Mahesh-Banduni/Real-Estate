import React from "react";

import { Button } from "./index";

const PrimaryCards = ({ item }) => {
  console.log();

  return (
    <div className="border border-border-color p-3 w-fit flex flex-col gap-4 justify-center overflow-hidden">
      <div className="max-sm:w-full">
        <img
          className="w-[20rem] h-[15rem]"
          src={item?.images[0]}
          alt="property images"
        />
      </div>
      <h1 className="font-interSemiBold text-2xl max-sm:text-lg">
        {item?.propertyType}
      </h1>
      <p className="font-interRegular text-lg text-[#A6A6A6] max-sm:text-sm">
        city {`=>`} {item?.city}
      </p>
      <div className="flex items-center gap-10 max-sm:gap-4">
        <h2 className="text-primary-color font-interSemiBold text-2xl max-sm:text-base">
          {`Rs. ${item?.expectedPrice.toLocaleString("en-IN")}`}
        </h2>
      </div>
      <Button className="w-full grid place-content-center py-2 capitalize border-2 border-primary-color text-primary-color hover:text-white hover:bg-primary-color transition-all  bg-transparent text-lg max-sm:text-base max-sm:py-1 max-sm:px-0">
        send inquiry
      </Button>
    </div>
  );
};

export default PrimaryCards;
