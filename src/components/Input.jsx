import React from "react";

const Input = React.memo(({ label, Icon, placeholder, type, className }) => {
  return (
    <div className="flex flex-col bg-transparent gap-2">
      {label && (
        <label
          className="capitalize font-medium text-xl text-[#4B4B4B]"
          htmlFor={label}
        >
          {label}
        </label>
      )}
      <div className="px-2 bg-[#F2F2F2] flex items-center gap-1">
        {Icon && <Icon className="text-lg font-semibold" />}

        <input
          id={label && label}
          className={`outline-none border-none ${className}`}
          placeholder={placeholder}
          type={type}
        />
      </div>
    </div>
  );
});

export default Input;
