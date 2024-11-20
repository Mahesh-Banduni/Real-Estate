import React from "react";

import { Input, SelectInput } from "../index";
import { location, searchButton } from "../../utils/icons";

const PartnershipPropertyForm = () => {
  return (
    <div className="bg-[#ffffff] px-5 py-2 inline-block max-[1120px]:flex">
      <form
        className="max-[1120px]:w-full grid grid-rows-1 grid-cols-property-type-form gap-2 max-[1120px]:grid-cols-1 max-[1120px]:grid-rows-4"
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
        <SelectInput label={"Price range"} className={"w-full"} />
        <div className="w-full h-full flex max-[1120px]:items-start items-end justify-end">
          <button className="bg-primary-color w-12 h-12 max-[1120px]:w-full max-[1120px]:mt-2 grid place-content-center">
            <img className=" " src={searchButton} alt="search" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default PartnershipPropertyForm;
