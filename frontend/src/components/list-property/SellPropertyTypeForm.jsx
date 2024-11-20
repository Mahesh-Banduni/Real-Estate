import React from "react";

import Heading from "../Heading";

const SellPropertyTypeForm = ({ formInputValue, onPropertyTypeChange }) => {
  return (
    <div className="w-full">
      <Heading className="text-xl" text="Property Type" />
      <select
        name="propertyType"
        onChange={onPropertyTypeChange}
        value={formInputValue?.propertyType}
        className={`mt-2 rounded-md text-[#4B4B4B] py-0 text-lg bg-[#F2F2F2] select select-ghost max-[1120px]:w-full w-full outline-none border-none active:border-none hover:border-none active:outline-none hover:outline-none max-sm:text-sm `}
      >
        <optgroup label="ALL RESIDENTIAL">
          <option defaultValue="Residential Flat/Apartment">
            Residential Flat/Apartment
          </option>
          <option defaultValue="Residential Plot/Land">
            Residential Plot/Land
          </option>
          <option defaultValue="Residential House">Residential House</option>
        </optgroup>
        <optgroup className="text-" label="ALL COMMERCIAL">
          <option defaultValue="Commercial Shop">Commercial Shop</option>
          <option defaultValue="Commercial Showroom">
            Commercial Showroom
          </option>
          <option defaultValue="Commercial Plot">Commercial Plot/Land</option>
          <option defaultValue="Commercial Office Space">
            Commercial Office Space
          </option>
        </optgroup>
      </select>
    </div>
  );
};

export default SellPropertyTypeForm;
