import React from "react";

const Input = React.forwardRef(function Input(
  {
    label,
    value,
    icon,
    handelChangeInputField,
    placeholder,
    type,
    name,
    className,
    ...props
  },
  ref
) {
  return (
    <div className="flex flex-col bg-transparent gap-2 w-full">
      {label && (
        <label
          className="capitalize font-medium text-xl text-[#4B4B4B] max-sm:text-base"
          htmlFor={label}
        >
          {label}
        </label>
      )}
      <div className="px-3 bg-[#F2F2F2] flex items-center gap-1 w-full">
        {icon && <img src={icon} alt="icon" />}
        {type === "number" && "+91 | "}
        <input
          value={value && value[name]}
          onChange={handelChangeInputField}
          name={name && name}
          id={label && label}
          className={`outline-none border-none max-sm:text-sm ${className}`}
          placeholder={placeholder}
          type={type}
          ref={ref}
          {...props}
        />
      </div>
    </div>
  );
});

export default Input;
