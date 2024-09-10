import React from "react";

import { Input, SelectInput } from "../index";
import { location, searchButton } from "../../utils/icons";

const PartnershipPropertyForm = () => {
  return (
    <div className="bg-[#ffffff] px-5 py-2 inline-block">
      <form className="flex items-end justify-center gap-2" action="">
        <Input
          icon={location}
          label="location"
          placeholder="Search City"
          type="text"
          className="capitalize text-lg text-[#8F90A6] bg-transparent py-[0.63rem]"
        />
        <SelectInput label={"Property type"} className={"w-full"} />
        <SelectInput label={"Price range"} className={"w-full"} />
        <button className="bg-primary-color px-4">
          <img className=" w-16 h-14 " src={searchButton} alt="search" />
        </button>
      </form>
    </div>
  );
};

export default PartnershipPropertyForm;
