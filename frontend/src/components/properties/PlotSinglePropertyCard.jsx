import React from "react";
import { IoHeartSharp } from "react-icons/io5";
import { AiOutlineColumnWidth } from "react-icons/ai";
import { CgSidebarOpen } from "react-icons/cg";
import { RxDimensions } from "react-icons/rx";

import { facing, superArea } from "../../utils/icons";

const PlotSinglePropertyCard = ({ item }) => {
  console.log(item);

  return (
    <div className="w-4/5 h-full grid grid-cols-2 grid-rows-3 bg-[#F5F5F5] gap-10 p-8 max-sm:gap-2 max-sm:p-2">
      <div className="flex items-center gap-3 justify-start  ">
        <div>
          <img src={superArea} alt={"super area"} />
        </div>
        <div className=" flex flex-col">
          <span className="uppercase text-sm text-[#8F90A6] font-interRegular">
            Plot Area
          </span>
          <span className="text-sm text-[#110229] font-interMedium">
            {item?.plotArea} {item?.plotAreaUnit}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-3 justify-start ">
        <div>
          <RxDimensions />
        </div>
        <div className="flex flex-col">
          <span className="uppercase text-sm text-[#8F90A6] font-interRegular">
            Dimension
          </span>
          <span className="capitalize text-sm text-[#110229] font-interMedium">
            {item?.lengthDimension} X {item.widthDimension}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-3 justify-start  ">
        <div>
          <AiOutlineColumnWidth />
        </div>
        <div className="flex flex-col ">
          <span className="uppercase text-sm text-[#8F90A6] font-interRegular">
            width of road facing
          </span>
          <span className="capitalize text-sm text-[#110229] font-interMedium">
            {item?.facingRoadWidth} {item?.facingRoadWidthUnit}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-3 justify-start ">
        <div>
          <CgSidebarOpen />
        </div>
        <div className="flex flex-col">
          <span className="uppercase text-sm text-[#8F90A6] font-interRegular">
            Open Sides
          </span>
          <span className="capitalize text-sm text-[#110229] font-interMedium">
            {item?.openSides}
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
            {item?.facing}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PlotSinglePropertyCard;
