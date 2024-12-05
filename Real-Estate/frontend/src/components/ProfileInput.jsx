import React from "react";

const ProfileInput = ({
  className,
  label,
  value,
  name,
  placeholder,
  type,
  readOnly,
  handelInputChange,
}) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label ? <label>{label}</label> : ""}
      <input
        onChange={handelInputChange}
        className={`w-full border rounded border-border-color px-2 py-1 input input-bordered input-success max-w-xs ${className}`}
        type={type}
        defaultValue={value}
        name={name}
        placeholder={placeholder}
        readOnly={readOnly && readOnly}
      />
    </div>
  );
};

export default ProfileInput;
