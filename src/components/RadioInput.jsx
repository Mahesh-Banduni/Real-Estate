import React from "react";

const RadioInput = React.forwardRef(function RadioInput(
  { label, name, id, defaultChecked, ...props },
  ref
) {
  return (
    <div className="flex items-center gap-1">
      {label && (
        <label className="capitalize font-interRegular " htmlFor={id}>
          {label}
        </label>
      )}
      <input
        ref={ref}
        className="radio radio-accent"
        name={name}
        id={id}
        type="radio"
        {...props}
        defaultChecked={defaultChecked}
      />
    </div>
  );
});

export default RadioInput;
