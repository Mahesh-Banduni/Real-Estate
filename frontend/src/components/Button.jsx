import React from "react";

const Button = ({ children, type, className, ...props }) => {
  return (
    <button {...props} type={type} className={`${className} `}>
      {children}
    </button>
  );
};

export default Button;
