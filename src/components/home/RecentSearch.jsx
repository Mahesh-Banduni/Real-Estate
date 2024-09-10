import React from "react";

import { recent } from "../../utils/icons";

const RecentSearch = ({ text }) => {
  return (
    <div className="flex items-center gap-2 px-2 py-1 border border-[#8F90A6] rounded-full ">
      <img src={recent} alt="recent search" />
      <p className="capitalize text-base text-[#8F90A6]">{text}</p>
    </div>
  );
};

export default RecentSearch;
