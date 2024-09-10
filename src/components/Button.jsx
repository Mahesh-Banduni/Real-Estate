import React from "react";

const Button = React.memo(({ className, text }) => {
  return <button className={`${className} `}>{text}</button>;
});

export default Button;
