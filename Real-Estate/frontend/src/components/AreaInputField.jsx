import React, { useState } from "react";
import ListPropertySelectInput from "./ListPropertySelectInput";

const AreaInputField = ({
  label,
  type,
  className,
  formInputValue,
  handelChangeFormInputFields,
  areaName,
  unitName,
}) => {
  let options = [
    "Sq-ft",
    "Sq-yrd",
    "Sq-m",
    "Acre",
    "Bigha",
    "Hectare",
    "Marla",
    "Kanal",
    "Biswa1",
    "Biswa2",
    "Ground",
    "Aankadam",
    "Rood",
    "Chatak",
    "Kottah",
    "Marla",
    "Cent",
    "Perch",
    "Guntha",
    "Are",
    "Kuncham",
    "Katha",
    "Gaj",
    "Killa",
  ];

  return (
    <div
      className={` border-b border-primary-color w-full flex flex-col gap-[0.15rem] ${className} `}
    >
      {label && <label htmlFor={label}>{label}</label>}
      <div className="flex items-center justify-between max-sm:justify-center">
        <input
          onChange={handelChangeFormInputFields}
          value={formInputValue[areaName]}
          name={areaName}
          type={type}
          placeholder={label}
          className={`capitalize py-1 outline-none w-full `}
        />
        <select
          onChange={handelChangeFormInputFields}
          name={unitName}
          value={formInputValue[unitName]}
          id=""
        >
          {options.map((items, index) => {
            return (
              <option key={index} defaultValue={items}>
                {items}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default AreaInputField;
