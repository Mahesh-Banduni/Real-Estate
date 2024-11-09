import React from "react";

import {
  propertyImage,
  superArea,
  transaction,
  status,
  furnishing,
  floor,
  facing,
  heart,
  share,
} from "../../utils/icons";
import { Button, Heading } from "../index";
import ResidentialFlatProperties from "./ResidentialFlatProperties";
import ResidentialPlotProperties from "./ResidentialPlotProperty";
import ResidentialHouseProperties from "./ResidentialHouseProperty";
import CommercialShowroomProperties from "./CommercialShowroomProperty";

const Property = ({ item }) => {
  return (
    <div className=" border-2 border-primary-color max-lg:grid-flow-col grid grid-cols-list-card grid-rows-1 gap-5 max-lg:gap-2 max-lg:grid-cols-2 max-lg:grid-rows-2 max-sm:grid-cols-1 max-sm:grid-rows-property-card ">
      <div className=" relative w-full p-2 h-full max-lg:row-span-2 max-sm:row-span-1">
        <div className="w-full max-lg:h-full">
          <img className="h-full w-full " src={item?.images[0]} alt="" />
          <span className="absolute z-10 text-xs top-[0.8rem] left-[0.8rem] bg-[#42423E] px-3 py-[0.4rem] text-white max-lg:hidden">
            {item?.images?.length}+ Images
          </span>
        </div>
        {/* <div className="flex flex-col gap-[0.15rem] max-lg:hidden text-[#8F90A6] font-interRegular">
          <span>Owner : Mahesh baduni</span>
          <span className="text-sm">Updated 3 days ago.</span>
        </div> */}
      </div>
      <div>
        {(item.propertyType === "Residential Flat/Appartment" ||
          item.propertyType === "Commercial Office Space") && (
          <ResidentialFlatProperties item={item} />
        )}
        {(item.propertyType === "Residential Plot/Land" ||
          item.propertyType === "Commercial Plot/Land") && (
          <ResidentialPlotProperties item={item} />
        )}
        {item.propertyType === "Residential House" && (
          <ResidentialHouseProperties item={item} />
        )}
        {(item.propertyType === "Commercial Showroom" ||
          item.propertyType === "Commercial Shop") && (
          <CommercialShowroomProperties item={item} />
        )}
      </div>

      <div className=" w-full bg-price-card flex flex-col justify-between p-2 max-xl:mb-2 box-border max-lg:justify-start max-lg:h-fit max-lg:gap-5 ">
        <div className="text-center">
          <span className="text-2xl font-interSemiBold capitalize">
            Rs 1.95cr
          </span>
          <p className="text-[#8F90A6] font-interMedium">Rs 3,545 per sqft</p>
        </div>
        <div className="flex flex-col gap-2">
          <Button className="w-full py-1 bg-primary-color text-white capitalize border border-primary-color font-interMedium text-lg">
            send enquiry
          </Button>
          <Button className="w-full py-1 bg-white text-primary-color capitalize border border-primary-color font-interMedium text-lg">
            contact us
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Property;
