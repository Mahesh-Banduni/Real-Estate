import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { Button } from "../index";
import ResidentialFlatProperties from "./ResidentialFlatProperties";
import ResidentialPlotProperties from "./ResidentialPlotProperty";
import ResidentialHouseProperties from "./ResidentialHouseProperty";
import CommercialShowroomProperties from "./CommercialShowroomProperty";

const Property = ({ item }) => {
  const [markFavorite, setMarkFavorite] = useState(false);
  const data = useSelector((store) => store.authReducer.wishlist);

  useEffect(() => {
    const findValue = data.find((element) => {
      return element?._id === item?._id;
    });
    if (findValue) {
      setMarkFavorite(true);
    }
  }, []);
  return (
    <div className=" border-2 border-primary-color max-lg:grid-flow-col grid grid-cols-list-card grid-rows-1 gap-5 max-lg:gap-2 max-lg:grid-cols-2 max-lg:grid-rows-2 max-sm:grid-cols-2 max-sm:grid-rows-property-card ">
      {/* property images */}
      <div className=" relative w-full p-2 max-lg:row-span-2 max-sm:row-span-1">
        <div className="w-full max-lg:h-full">
          <img
            className="w-full h-48"
            src={item?.images?.[0] || "default-image.jpg"}
            alt="property"
          />
          <span className="absolute z-10 text-xs top-[0.8rem] left-[0.8rem] bg-[#42423E] px-3 py-[0.4rem] text-white max-lg:hidden">
            {item?.images?.length || 0}+ Images
          </span>
        </div>
      </div>

      {/* property features */}
      <div className="py-2 max-sm:hidden">
        {(item?.propertyType === "Residential Flat/Apartment" ||
          item?.propertyType === "Commercial Office Space") && (
          <ResidentialFlatProperties markFavorite={markFavorite} item={item} />
        )}
        {(item?.propertyType === "Residential Plot/Land" ||
          item?.propertyType === "Commercial Plot/Land") && (
          <ResidentialPlotProperties markFavorite={markFavorite} item={item} />
        )}
        {item?.propertyType === "Residential House" && (
          <ResidentialHouseProperties markFavorite={markFavorite} item={item} />
        )}
        {(item?.propertyType === "Commercial Showroom" ||
          item?.propertyType === "Commercial Shop") && (
          <CommercialShowroomProperties
            markFavorite={markFavorite}
            item={item}
          />
        )}
      </div>

      {/* property price */}
      <div className=" w-full bg-price-card flex flex-col justify-between py-5 px-2 max-xl:mb-2 box-border max-lg:justify-start max-lg:h-fit max-lg:gap-5 ">
        <div className="text-center">
          <span className="text-2xl font-interSemiBold capitalize">
            {item?.expectedPrice
              ? `Rs. ${item.expectedPrice.toLocaleString("en-IN")}`
              : "N/A"}
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <Button className="w-full py-1 bg-primary-color text-white capitalize border border-primary-color font-interMedium text-lg">
            send enquiry
          </Button>
          <Link
            to={"/contact"}
            className="w-full grid place-content-center py-1 bg-white text-primary-color capitalize border border-primary-color font-interMedium text-lg"
          >
            contact us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Property;
