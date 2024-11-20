import React from "react";
import { useNavigate } from "react-router-dom";

import useProperties from "../hooks/useProperties";

const SecondaryCard = ({ pic, text }) => {
  const navigate = useNavigate();
  const { handelSetCity } = useProperties();
  return (
    <div
      onClick={() => {
        handelSetCity(text);
        navigate("/properties");
      }}
      to={"/properties"}
      className="flex items-center justify-center flex-col gap-5"
    >
      <img src={pic} alt="city" />
      <h1 className="text-[#000000] font-interMedium uppercase"> {text} </h1>
    </div>
  );
};

export default SecondaryCard;
