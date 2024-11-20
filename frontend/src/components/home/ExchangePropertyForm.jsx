import React from "react";

import { Input, SelectInput } from "../index";
import { location, exchange, searchButton } from "../../utils/icons";

const ExchangePropertyForm = () => {
  return (
    <div className="bg-[#ffffff]  px-5 py-2 inline-block max-[1120px]:flex">
      <form
        className="grid grid-rows-1 grid-cols-property-type-form gap-2 max-[1120px]:grid-cols-1 max-[1120px]:grid-rows-4 max-[450px]:grid-rows-exchange-form-layout max-[1120px]:w-full"
        action=""
      >
        <div className="flex flex-col gap-2">
          <label
            className="capitalize font-medium text-xl text-[rgb(75,75,75)]"
            htmlFor=""
          >
            Location
          </label>
          <div className="relative w-full flex items-center justify-center gap-2 max-[450px]:flex-col max-[450px]:gap-3 ">
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
            <img
              className="absolute max-[450px]:rotate-90"
              src={exchange}
              alt="exchange"
            />
          </div>
        </div>
        <SelectInput label={"Property Type"} className={" py-0"} />
        <SelectInput label={"Price Range"} className={"py-0"} />
        <div className="w-full h-full flex max-[1120px]:items-start items-end justify-end">
          <button className="bg-primary-color w-12 h-12 max-[1120px]:w-full max-[1120px]:mt-2 grid place-content-center">
            <img className=" " src={searchButton} alt="search" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ExchangePropertyForm;
