import React from "react";

const Button = ({ id, sendEnquiry, children, type, className, ...props }) => {
  return (
    <button
      onClick={
        sendEnquiry
          ? () => {
              if (id) {
                sendEnquiry(`${id}`);
              }
            }
          : () => {}
      }
      {...props}
      type={type}
      className={`${className} `}
    >
      {children}
    </button>
  );
};

export default Button;
