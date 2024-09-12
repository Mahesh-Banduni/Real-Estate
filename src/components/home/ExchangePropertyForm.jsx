import React from "react";

import { Input, SelectInput } from "../index";
import { location, exchange, searchButton } from "../../utils/icons";

const ExchangePropertyForm = () => {
  return (
    <div className="bg-[#ffffff]  px-5 py-2 inline-block">
      <form className="flex items-end justify-center gap-2" action="">
        <div className="flex flex-col gap-2">
          <label
            className="capitalize font-medium text-xl text-[rgb(75,75,75)]"
            htmlFor=""
          >
            Location
          </label>
          <div className="relative w-full flex items-center justify-center gap-2 ">
            <Input
              icon={location}
              className={"bg-transparent py-[0.7rem] w-36 text-[#4B4B4B]"}
              placeholder="From City"
              type="text"
            />
            <Input
              icon={location}
              className={"bg-transparent py-[0.7rem] w-36 text-[#4B4B4B]"}
              placeholder="To City"
              type="text"
            />
            <img className="absolute" src={exchange} alt="exchange" />
          </div>
        </div>
        <SelectInput label={"Property Type"} className={" py-0"} />
        <SelectInput label={"Price Range"} className={"py-0"} />
        <button className="bg-primary-color px-4">
          <img className=" w-16 h-14 " src={searchButton} alt="search" />
        </button>
      </form>
    </div>
  );
};

export default ExchangePropertyForm;