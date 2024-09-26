import React from "react";

const SelectInput = ({ label, className, options }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label
          className="capitalize font-medium text-xl text-[#4B4B4B] max-sm:text-base"
          htmlFor={label}
        >
          {label}
        </label>
      )}

      <select
        className={`${className} rounded-none text-[#4B4B4B] py-0 text-lg bg-[#F2F2F2] select select-ghost max-[1120px]:w-full w-[20rem] outline-none border-none active:border-none hover:border-none active:outline-none hover:outline-none max-sm:text-sm `}
      >
        <option className="z-10" disabled selected>
          Select Options
        </option>
        {options?.map((option, index) => {
          return <option className="capitalize">{option}</option>;
        })}
      </select>
    </div>
  );
};

export default SelectInput;