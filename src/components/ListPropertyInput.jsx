import React from "react";

const ListPropertyInput = ({ type, className, label, ...props }) => {
  return (
    <div>
      {label && (
        <label className="font-interRegular text-base" htmlFor={label}>
          {label}:-
        </label>
      )}
      <input
        type={type}
        id={label}
        {...props}
        className={`capitalize text-xl outline-none px-5 py-1 w-full ${className}`}
      />
    </div>
  );
};

export default ListPropertyInput;
