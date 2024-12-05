import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "../index";
import ResidentialFlatProperties from "./ResidentialFlatProperties";
import ResidentialPlotProperties from "./ResidentialPlotProperty";
import ResidentialHouseProperties from "./ResidentialHouseProperty";
import CommercialShowroomProperties from "./CommercialShowroomProperty";
import useProperties from "../../hooks/useProperties";

const Property = ({ item, wishlistProperties }) => {
  const { sendEnquiry } = useProperties();
  const [markFavorite, setMarkFavorite] = useState(false);

  useEffect(() => {
    const findValue = wishlistProperties?.find((element) => {
      return element?._id === item?._id;
    });
    if (findValue) {
      setMarkFavorite(true);
    }
  }, [wishlistProperties, wishlistProperties.length]);
  return (
    <Link
      to={`/singleProperty/${item._id}`}
      className="hover:shadow-lg hover:shadow-gray-500 transition-all border-2 border-primary-color max-lg:grid-flow-col grid grid-cols-list-card grid-rows-1 gap-5 max-lg:gap-2 max-lg:grid-cols-large-screen max-lg:grid-rows-large-screen "
    >
      {/* property images */}
      <div className=" w-full p-2">
        <div className="w-full max-lg:h-full">
          <img
            className="w-full h-48 max-lg:h-[15rem]"
            src={item?.images?.[0] || "default-image.jpg"}
            alt="property"
          />
        </div>
      </div>

      {/* property features */}
      <div className="py-2">
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
      <div className="max-lg:col-start-1 max-lg:col-end-3 max-lg:row-start-2 w-full bg-price-card flex flex-col justify-between py-5 px-2 max-xl:mb-2 box-border max-lg:justify-start max-lg:h-fit max-lg:gap-5 ">
        <div className="text-center">
          <span className="text-2xl font-interSemiBold capitalize">
            {item?.expectedPrice
              ? `Rs. ${Number(item?.expectedPrice).toLocaleString("en-IN")}`
              : "N/A"}
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <Button
            id={item._id}
            sendEnquiry={sendEnquiry}
            className="w-full py-1 bg-primary-color text-white capitalize border border-primary-color font-interMedium text-lg"
          >
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
    </Link>
  );
};

export default Property;
