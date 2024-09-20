import React from "react";
import { CiLocationOn } from "react-icons/ci";

import { Input, SelectInput } from "../index";
import { searchButton } from "../../utils/icons";
import { location } from "../../utils/icons";

const NormalProperty = () => {
  return (
    <div className="bg-[#ffffff] px-5 py-2 inline-block max-[1120px]:flex">
      <form
        className="grid grid-rows-1 grid-cols-property-type-form gap-2 max-[1120px]:grid-cols-1 max-[1120px]:grid-rows-4 max-[1120px]:w-full"
        action=""
      >
        <Input
          icon={location}
          label="location"
          placeholder="Search City"
          type="text"
          className="capitalize text-lg text-[#4B4B4B] bg-transparent py-[0.63rem]"
        />
        <SelectInput label={"Property type"} className={"w-full"} />
        <SelectInput label={"price range"} className={"w-full"} />
        <div className="w-full h-full flex max-[1120px]:items-start items-end justify-end">
          <button className="bg-primary-color w-12 h-12 max-sm:h-8 max-[1120px]:w-full max-[1120px]:mt-2 grid place-content-center">
            <img
              className=" max-sm:w-4 max-sm:h-4 "
              src={searchButton}
              alt="search"
            />
          </button>
        </div>
      </form>
    </div>
  );
};

export default NormalProperty;
