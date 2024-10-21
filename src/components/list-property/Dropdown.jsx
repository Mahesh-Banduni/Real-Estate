import React from "react";

import usePostProperty from "../../hooks/usePostProperty";

const Dropdown = ({
  array,
  method,
  name,
  className,
  handelToggleCityDropdown,
}) => {
  return (
    <div
      className={`h-[30vh] overflow-auto shadow-lg shadow-slate-600 z-20 w-52 border-2 border-primary-color ${className} outline-none`}
    >
      <ul
        className={`w-full bg-white font-interRegular text-sm flex flex-col h-full`}
      >
        {array.map((item, index) => {
          return (
            <li
              className="w-full cursor-pointer border-b-2 p-3 border-primary-color transition-all text-slate-800 hover:bg-gray-200"
              key={index}
              onClick={() => {
                method((pre) => {
                  return {
                    ...pre,
                    [name]: item,
                  };
                });
                handelToggleCityDropdown();
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dropdown;
