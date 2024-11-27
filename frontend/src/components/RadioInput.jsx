import React from "react";

const RadioInput = ({
  label,
  name,
  id,
  defaultChecked,
  handelChangePropertyDetail,
  defaultValue,
}) => {
  return (
    <div className="flex items-center gap-1">
      {label && (
        <label className="capitalize font-interRegular " htmlFor={id}>
          {label}
        </label>
      )}
      <input
        defaultValue={defaultValue}
        onChange={handelChangePropertyDetail}
        className="radio radio-accent"
        name={name}
        id={id}
        type="radio"
        defaultChecked={defaultChecked}
      />
    </div>
  );
};

export default RadioInput;
