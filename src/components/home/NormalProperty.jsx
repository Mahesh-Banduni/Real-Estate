import React from "react";
import { CiLocationOn } from "react-icons/ci";

import { Input, SelectInput } from "../index";
import { searchButton } from "../../utils/icons";
import { location } from "../../utils/icons";

const NormalProperty = () => {
  return (
    <div className="bg-[#ffffff] px-5 py-2 inline-block">
      <form className="flex items-end justify-center gap-2" action="">
        <Input
          icon={location}
          label="location"
          placeholder="Search City"
          type="text"
          className="capitalize text-lg text-[#4B4B4B] bg-transparent py-[0.63rem]"
        />
        <SelectInput label={"Property type"} className={"w-full"} />
        <SelectInput label={"price range"} className={"w-full"} />
        <button className="bg-primary-color px-4">
          <img className=" w-16 h-14 " src={searchButton} alt="search" />
        </button>
      </form>
    </div>
  );
};

export default NormalProperty;