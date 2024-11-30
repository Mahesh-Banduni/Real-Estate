import React from "react";
import { IoHeartSharp } from "react-icons/io5";

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
import useWishlist from "../../hooks/useWishlist";

const ResidentialHouseProperties = ({ item, markFavorite }) => {
  const { markFavoriteProperty, unMarkFavoriteProperty } = useWishlist();
  return (
    <div className=" w-full h-[90%] my-auto flex flex-col gap-2 max-lg:justify-center max-sm:hidden max-xl:gap-1">
      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between max-lg:justify-center max-lg:gap-2">
          <Heading
            text={`${item?.propertyType} for ${item?.propertyPurpose} in ${item?.city}`}
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
          {` ${item?.propertyType} is available for ${
            item?.propertyPurpose
          } in ${item?.city} for Rs. ${
            item?.expectedPrice && item.expectedPrice.toLocaleString("en-IN")
          }`}
        </p>
      </div>
      <div className="grid grid-cols-3 grid-rows-2 bg-[#F5F5F5] gap-1 p-5 max-lg:hidden">
        <div className="flex items-center gap-2 justify-start border-r border-border-color">
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
        <div className="flex items-center gap-3 justify-start border-r border-border-color">
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
        <div className="flex items-center gap-3 justify-start border-border-color">
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
        <div className="flex items-center gap-2 justify-start border-r border-border-color">
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

        <div className="flex items-center gap-3 justify-start border-border-color">
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
    </div>
  );
};

export default ResidentialHouseProperties;
