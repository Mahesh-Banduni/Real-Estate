import React from "react";

const ListPropertySelectInput = React.memo(
  ({
    label,
    className,
    options,
    handelChangeFormInputFields,
    formInputValue,
    name,
  }) => {
    return (
      <div className="flex flex-col gap-2 w-full">
        {label && (
          <label
            className={`font-interRegular text-[#4B4B4B] capitalize text-base max-sm:text-base ${className}`}
            htmlFor={label}
          >
            {label}
          </label>
        )}

        <select
          onChange={handelChangeFormInputFields}
          value={formInputValue[name]}
          name={name}
          className={`${className} mt-0 rounded-md text-[#4B4B4B] py-0 text-lg bg-[#F2F2F2] select select-ghost max-[1120px]:w-full w-full outline-none border-none active:border-none hover:border-none active:outline-none hover:outline-none max-sm:text-sm `}
        >
          <option defaultValue={""} className="z-10">
            Select Options
          </option>
          {options?.map((option, index) => {
            return (
              <option defaultValue={option} key={index} className="capitalize">
                {option}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
);

export default ListPropertySelectInput;
