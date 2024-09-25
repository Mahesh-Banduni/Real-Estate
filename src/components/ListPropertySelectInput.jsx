import React from "react";

const ListPropertySelectInput = ({ label, className, options }) => {
  return (
    <div className="flex flex-col gap-2 w-fit">
      {label && (
        <label
          className={`${
            label === "Possession Status:-"
              ? "text-xl font-interSemiBold text-heading-color"
              : "font-interRegular text-[#4B4B4B]"
          } capitalize  text-base max-sm:text-base ${className}`}
          htmlFor={label}
        >
          {label}
        </label>
      )}

      <select
        className={`${className} rounded-md text-[#4B4B4B] py-0 text-lg bg-[#F2F2F2] select select-ghost max-[1120px]:w-full w-[20rem] outline-none border-none active:border-none hover:border-none active:outline-none hover:outline-none max-sm:text-sm `}
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

export default ListPropertySelectInput;
