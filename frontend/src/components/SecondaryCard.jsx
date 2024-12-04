import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import useProperties from "../hooks/useProperties";
import { handelUpdateFilters } from "../store/slice";

const SecondaryCard = ({ pic, text }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { handelSetCity } = useProperties();
  return (
    <div
      onClick={() => {
        dispatch(handelUpdateFilters({ name: "city", value: text }));
        navigate("/properties");
      }}
      to={"/properties"}
      className="flex items-center justify-center flex-col gap-5"
    >
      <img className="w-[18rem]" src={pic} alt="city" />
      <h1 className="text-[#000000] font-interMedium uppercase"> {text} </h1>
    </div>
  );
};

export default SecondaryCard;
