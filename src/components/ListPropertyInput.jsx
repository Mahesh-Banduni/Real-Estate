import React from "react";

const ListPropertyInput = React.memo(
  ({
    type,
    className,
    label,
    handelChangeFormInputFields,
    formInputValue,
    name,
    placeholder,
    handelToggleDropdown,
  }) => {
    return (
      <div
        onClick={() => {
          name === "city" || name === "locality" ? handelToggleDropdown() : "";
        }}
        className="flex flex-col gap-2"
      >
        {label && (
          <label className="font-interRegular text-base" htmlFor={label}>
            {label}:-
          </label>
        )}
        <input
          placeholder={placeholder}
          onChange={handelChangeFormInputFields}
          value={formInputValue[name]}
          name={name}
          type={type}
          id={label}
          className={`capitalize text-xl outline-none px-5 py-2 w-full ${className}`}
        />
      </div>
    );
  }
);

export default ListPropertyInput;
