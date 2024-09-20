import React from "react";

import { Button } from "./index";

const TertiaryCard = React.memo(
  ({ pic, heading, span1, span2, span3, price }) => {
    return (
      <div className="w-fit p-2 border border-border-color flex gap-5 max-[500px]:flex-col max-sm:m-2 ">
        <img
          className=" max-sm:h-32 max-sm:w-full"
          src={pic}
          alt="partnership property"
        />

        <div className="flex items-start flex-col gap-5 max-sm:gap-2">
          <h1 className="capitalize font-interSemiBold text-2xl max-sm:text-xl max-[400px]:text-lg text-center ">
            {heading}
          </h1>
          <p className="w-full flex items-center justify-between font-interMedium text-[#8F90A6] max-sm:text-xs">
            <span>{span1}</span>
            <span>{span2}</span>
            <span>{span3}</span>
          </p>
          <Button
            text={price}
            className="bg-primary-color text-white w-fit px-5 py-2 max-sm:w-full max-sm:text-sm"
          />
        </div>
      </div>
    );
  }
);

export default TertiaryCard;
