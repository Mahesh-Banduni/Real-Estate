import React from "react";

const Input = ({ label, icon, placeholder, type, className, inputMode }) => {
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
          id={label && label}
          className={`outline-none border-none max-sm:text-sm ${className}`}
          placeholder={placeholder}
          type={type}
        />
      </div>
    </div>
  );
};

export default Input;
