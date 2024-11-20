import React from "react";

const Paragraph = ({ text, className }) => {
  return (
    <React.Fragment>
      <p
        className={`text-[#73788C] font-interRegular text-lg max-sm:text-sm ${className}`}
      >
        {text}
      </p>
    </React.Fragment>
  );
};

export default Paragraph;
