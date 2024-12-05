import React from "react";

import {
  carpet,
  facing,
  floor,
  furnishing,
  status,
  superArea,
} from "../../utils/icons";

const HouseSinglePropertyCard = ({ item }) => {
  console.log(item);

  return (
    <div className="w-4/5 h-full grid grid-cols-2 grid-rows-3 bg-[#F5F5F5] gap-10 p-8 max-sm:gap-2 max-sm:p-2">
      <div className="flex items-center gap-3 justify-start  ">
        <img src={superArea} alt={"super area"} />
        <div className=" flex flex-col">
          <span className="uppercase text-sm text-[#8F90A6] font-interRegular">
            Super Area
          </span>
          <span className="text-sm text-[#110229] font-interMedium">
            {item?.superArea} {item?.superAreaUnit}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-3 justify-start ">
        <img src={status} alt={"property status"} />

        <div className="flex flex-col">
          <span className="uppercase text-sm text-[#8F90A6] font-interRegular">
            status
          </span>
          <span className="capitalize text-sm text-[#110229] font-interMedium">
            {item?.possessionStatus}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-3 justify-start  ">
        <img src={floor} alt={"floor"} />

        <div className="flex flex-col ">
          <span className="uppercase text-sm text-[#8F90A6] font-interRegular">
            floor
          </span>
          <span className="capitalize text-sm text-[#110229] font-interMedium">
            {item?.floorNumber}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-3 justify-start ">
        <img src={furnishing} alt={"super area"} />

        <div className="flex flex-col">
          <span className="uppercase text-sm text-[#8F90A6] font-interRegular">
            furnishing
          </span>
          <span className="capitalize text-sm text-[#110229] font-interMedium">
            {item?.furnished}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-3 justify-start  ">
        <img className="w-4 h-5" src={carpet} alt={"carpet area"} />

        <div className=" flex flex-col">
          <span className="uppercase text-sm text-[#8F90A6] font-interRegular">
            carpet Area
          </span>
          <span className="text-sm text-[#110229] font-interMedium">
            {item?.carpetArea} {item?.carpetAreaUnit}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-3 justify-start ">
        <img src={facing} alt={"super area"} />

        <div className="flex flex-col">
          <span className="uppercase text-sm text-[#8F90A6] font-interRegular">
            facing
          </span>
          <span className="capitalize text-sm text-[#110229] font-interMedium">
            {item?.facing}
          </span>
        </div>
      </div>
    </div>
  );
};

export default HouseSinglePropertyCard;
