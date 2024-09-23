import React from "react";

// import { residentialPropertyTypeList } from "../../utils/constant";
import SelectInput from "../SelectInput";
import ListPropertySelectInput from "../ListPropertySelectInput";
import Heading from "../Heading";

const PropertyTypeForm = () => {
  let residentialPropertyTypeList = [];
  return (
    <div>
      <Heading className="text-xl" text="Property Type" />

      <select
        className={`mt-2 rounded-none text-[#4B4B4B] py-0 text-lg bg-[#F2F2F2] select select-ghost max-[1120px]:w-full w-[20rem] outline-none border-none active:border-none hover:border-none active:outline-none hover:outline-none max-sm:text-sm `}
      >
        <optgroup label="ALL RESIDENTIAL">
          <option value="Residential Flat/Apartment">
            Residential Flat/Apartment
          </option>
          <option value="Residential Plot">Residential Plot</option>
          <option value="Residential House">Residential House</option>
        </optgroup>
        <optgroup className="text-" label="ALL COMMERCIAL">
          <option value="Commercial Shop">Commercial Shop</option>
          <option value="Commercial Showroom">Commercial Showroom</option>
          <option value="Commercial land">Commercial land</option>
        </optgroup>
      </select>
    </div>
  );
};

export default PropertyTypeForm;
