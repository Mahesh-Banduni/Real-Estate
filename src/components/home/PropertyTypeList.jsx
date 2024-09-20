import React from "react";

const PropertyTypeList = React.memo(
  ({ text, property, handelChangePropertyType }) => {
    return (
      <li
        className={`${
          property === `${text}`
            ? "bg-primary-color text-white"
            : " text-[#8F90A6] "
        } cursor-pointer transition-all overflow-hidden px-5 py-1 tracking-wider w-fit font-interMedium max-sm:px-1 max-sm:py-[0.15rem] max-md:tracking-normal max-md:text-base max-sm:text-xs max-[400px]:text-[8px] `}
        onClick={() => {
          handelChangePropertyType(text);
        }}
      >
        {text}
      </li>
    );
  }
);

export default PropertyTypeList;
