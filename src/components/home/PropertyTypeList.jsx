import React from "react";

const PropertyTypeList = React.memo(
  ({ text, property, handelChangePropertyType }) => {
    return (
      <li
        className={`${
          property === `${text}`
            ? "bg-primary-color text-white"
            : " text-[#8F90A6] "
        } cursor-pointer transition-all overflow-hidden px-5 py-1`}
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
