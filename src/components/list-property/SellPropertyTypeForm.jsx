import React from "react";

import Heading from "../Heading";

const SellPropertyTypeForm = ({ propertyTypeState, onPropertyTypeChange }) => {
  return (
    <div>
      <Heading className="text-xl" text="Property Type" />

      <select
        onChange={onPropertyTypeChange}
        value={propertyTypeState?.propertyType}
        className={`mt-2 rounded-none text-[#4B4B4B] py-0 text-lg bg-[#F2F2F2] select select-ghost max-[1120px]:w-full w-[20rem] outline-none border-none active:border-none hover:border-none active:outline-none hover:outline-none max-sm:text-sm `}
      >
        <optgroup label="ALL RESIDENTIAL">
          <option value="Residential Flat/Apartment">
            Residential Flat/Apartment
          </option>
          <option value="Residential Land">Residential Land</option>
          <option value="Residential House">Residential House</option>
        </optgroup>
        <optgroup className="text-" label="ALL COMMERCIAL">
          <option value="Commercial Shop">Commercial Shop</option>
          <option value="Commercial Showroom">Commercial Showroom</option>
          <option value="Commercial Plot">Commercial Plot</option>
          <option value="Commercial Office Space">
            Commercial Office Space
          </option>
        </optgroup>
      </select>
    </div>
  );
};

export default SellPropertyTypeForm;
