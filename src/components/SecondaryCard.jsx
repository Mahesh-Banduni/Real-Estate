import React from "react";

const SecondaryCard = ({ pic, text }) => {
  return (
    <div className="flex items-center justify-center flex-col gap-5">
      <img src={pic} alt="city" />
      <h1 className="text-[#000000] font-interMedium uppercase"> {text} </h1>
    </div>
  );
};

export default SecondaryCard;
