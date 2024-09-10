import React from "react";
import { CiLocationOn } from "react-icons/ci";

import { Input, SelectInput } from "../index";
import { searchButton } from "../../utils/icons";

const NormalProperty = () => {
  return (
    <div className="bg-[#ffffff] opacity-90 px-5 py-2 w-[75%] ">
      <form className="flex items-end justify-center gap-2" action="">
        <Input
          Icon={CiLocationOn}
          label="location"
          placeholder="Search City"
          type="text"
          className="capitalize text-lg text-[#8F90A6] bg-transparent py-[0.63rem]"
        />
        <SelectInput label={"Property type"} className={"w-full"} />
        <SelectInput label={"price range"} className={"w-full"} />
        <button className="bg-primary-color px-3">
          <img className=" w-14 h-12 " src={searchButton} alt="search" />
        </button>
      </form>
    </div>
  );
};

export default NormalProperty;
