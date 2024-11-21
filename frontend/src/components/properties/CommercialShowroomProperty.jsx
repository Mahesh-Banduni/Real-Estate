import React from "react";
import Heading from "../Heading";
import {
  carpet,
  facing,
  floor,
  furnishing,
  heart,
  status,
  superArea,
} from "../../utils/icons";

const CommercialShowroomProperties = ({ item }) => {
  return (
    <div className=" w-full h-[90%] my-auto flex flex-col gap-2 max-lg:justify-center max-sm:hidden max-xl:gap-1">
      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between max-lg:justify-center max-lg:gap-2">
          <Heading
            text={`${item?.propertyType} for sale in ${item?.locality} , ${item?.city}`}
            className="normal-case text-xl max-lg:w-3/5 max-md:text-base"
          />
          <div className="flex items-center justify-center gap-2">
            <img src={heart} alt="wishlist" />
            {/* <img src={share} alt="share" /> */}
          </div>
        </div>
        <p className="font-interRegular text-[#8F90A6] text-sm max-lg:hidden max-xl:text-xs">
  {` ${item?.propertyType} is available for Sale in ${item?.locality}, ${item?.city} for Rs. ${
    item?.expectedPrice ? item.expectedPrice.toLocaleString("en-IN") : "N/A"
  }`}
</p>
      </div>
      <div className="grid grid-cols-3 grid-rows-2 bg-[#F5F5F5] gap-1 p-5 max-lg:hidden">
        <div className="flex items-center gap-2 justify-start border-r border-border-color">
          <div>
            <img className="w-4 h-5" src={carpet} alt={"super area"} />
          </div>
          <div className=" flex flex-col">
            <span className="uppercase text-sm text-[#8F90A6] font-interRegular">
              carpet Area
            </span>
            <span className="text-sm text-[#110229] font-interMedium">
              {item?.carpetArea} {item?.carpetAreaUnit}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3 justify-start border-r border-border-color">
          <div>
            <img src={status} alt={"property status"} />
          </div>
          <div className="flex flex-col">
            <span className="uppercase text-sm text-[#8F90A6] font-interRegular">
              status
            </span>
            <span className="capitalize text-sm text-[#110229] font-interMedium">
              {item?.possessionStatus}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3 justify-start border-border-color">
          <div>
            <img src={floor} alt={"floor"} />
          </div>
          <div className="flex flex-col ">
            <span className="uppercase text-sm text-[#8F90A6] font-interRegular">
              floor
            </span>
            <span className="capitalize text-sm text-[#110229] font-interMedium">
              {item?.floorNumber} out of {item?.totalFloor}
            </span>
          </div>
        </div>
        {/* <div className="flex items-center gap-3 justify-start border-r border-border-color">
            <div>
              <img src={transaction} alt={"super area"} />
            </div>
            <div className="flex flex-col">
              <span className="uppercase text-sm text-[#8F90A6] font-interRegular">
                transaction
              </span>
              <span className="text-sm capitalize text-[#110229] font-interMedium">
                resale
              </span>
            </div>
          </div> */}
        <div className="flex items-center gap-3 justify-start border-r border-border-color">
          <div>
            <img src={furnishing} alt={"super area"} />
          </div>
          <div className="flex flex-col">
            <span className="uppercase text-sm text-[#8F90A6] font-interRegular">
              furnishing
            </span>
            <span className="capitalize text-sm text-[#110229] font-interMedium">
              {item?.furnished}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3 justify-start border-border-color">
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
    </div>
  );
};

export default CommercialShowroomProperties;