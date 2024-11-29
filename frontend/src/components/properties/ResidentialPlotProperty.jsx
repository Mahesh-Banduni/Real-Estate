import React from "react";
import { IoHeartSharp } from "react-icons/io5";
import { AiOutlineColumnWidth } from "react-icons/ai";
import { CgSidebarOpen } from "react-icons/cg";
import { RxDimensions } from "react-icons/rx";

import Heading from "../Heading";
import useWishlist from "../../hooks/useWishlist";
import {
  facing,
  floor,
  furnishing,
  heart,
  status,
  superArea,
} from "../../utils/icons";

const ResidentialPlotProperties = ({ item, markFavorite }) => {
  const { markFavoriteProperty, unMarkFavoriteProperty } = useWishlist();
  return (
    <div className=" w-full h-[90%] my-auto flex flex-col gap-2 max-lg:justify-center max-sm:hidden max-xl:gap-1">
      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between max-lg:justify-center max-lg:gap-2">
          <Heading
            text={`${item?.propertyType} for sale in ${item?.city}`}
            className="normal-case text-xl max-lg:w-3/5 max-md:text-base"
          />
          <div className="flex items-center justify-center gap-2">
            {markFavorite ? (
              <IoHeartSharp
                onClick={() => {
                  unMarkFavoriteProperty(item._id);
                }}
                className="w-6 h-6 text-red-500 cursor-pointer"
              />
            ) : (
              <img
                className="cursor-pointer"
                onClick={() => {
                  markFavoriteProperty(item._id);
                }}
                src={heart}
                alt="wishlist"
              />
            )}
          </div>
        </div>
        <p className="font-interRegular text-[#8F90A6] text-sm max-lg:hidden max-xl:text-xs">
          {`${item?.propertyType} is available for Sale in ${item?.locality},
          ${item?.city} ${" "} for Rs. ${item?.expectedPrice.toLocaleString(
            "en-IN"
          )}`}
        </p>
      </div>
      <div className="grid grid-cols-3 grid-rows-2 bg-[#F5F5F5] gap-1 p-5 max-lg:hidden max-xl:gap-1">
        <div className="flex items-center gap-2 justify-start border-r border-border-color">
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
        <div className="flex items-center gap-3 justify-start border-r border-border-color">
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
        <div className="flex items-center gap-3 justify-start border-border-color">
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

export default ResidentialPlotProperties;
