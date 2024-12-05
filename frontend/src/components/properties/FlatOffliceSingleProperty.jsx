import React from "react";

import {
  facing,
  floor,
  furnishing,
  status,
  superArea,
} from "../../utils/icons";

const FlatOfficeSinglePropertyCard = ({ propertyData }) => {
  console.log(propertyData);

  return (
    <div className="w-4/5 h-full grid grid-cols-2 grid-rows-3 bg-[#F5F5F5] gap-10 max-sm:gap-2 p-8 max-sm:p-2">
      <div className="flex items-center gap-3 justify-start  ">
        <div>
          <img src={superArea} alt={"super area"} />
        </div>
        <div className=" flex flex-col">
          <span className="uppercase text-sm text-[#8F90A6] font-interRegular">
            Super Area
          </span>
          <span className="text-sm text-[#110229] font-interMedium">
            {propertyData?.superArea} {propertyData?.superAreaUnit}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-3 justify-start ">
        <div>
          <img src={status} alt={"property status"} />
        </div>
        <div className="flex flex-col">
          <span className="uppercase text-sm text-[#8F90A6] font-interRegular">
            status
          </span>
          <span className="capitalize text-sm text-[#110229] font-interMedium">
            {propertyData?.possessionStatus}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-3 justify-start  ">
        <div>
          <img src={floor} alt={"floor"} />
        </div>
        <div className="flex flex-col ">
          <span className="uppercase text-sm text-[#8F90A6] font-interRegular">
            floor
          </span>
          <span className="capitalize text-sm text-[#110229] font-interMedium">
            {propertyData?.floorNumber}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-3 justify-start ">
        <div>
          <img src={furnishing} alt={"super area"} />
        </div>
        <div className="flex flex-col">
          <span className="uppercase text-sm text-[#8F90A6] font-interRegular">
            furnishing
          </span>
          <span className="capitalize text-sm text-[#110229] font-interMedium">
            {propertyData?.furnished}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-3 justify-start  ">
        <div>
          <img src={facing} alt={"super area"} />
        </div>
        <div className="flex flex-col">
          <span className="uppercase text-sm text-[#8F90A6] font-interRegular">
            facing
          </span>
          <span className="capitalize text-sm text-[#110229] font-interMedium">
            {propertyData?.facing}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FlatOfficeSinglePropertyCard;
