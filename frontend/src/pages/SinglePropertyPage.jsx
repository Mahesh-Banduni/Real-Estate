import React from "react";
import useSingleProperty from "../hooks/useSingleProperty";

import { heart } from "../utils/icons";
import { Heading, Paragraph } from "../components/index";
import { Link } from "react-router-dom";
import FlatOfficeSinglePropertyCard from "../components/properties/FlatOffliceSingleProperty";
import PlotSinglePropertyCard from "../components/properties/PlotSinglePropertyCard";
import HouseSinglePropertyCard from "../components/properties/HouseSinglePropertyCard";
import ShowroomShopSinglePropertyCard from "../components/properties/ShowroomShopSinglePropertyCard";
import useProperties from "../hooks/useProperties";

const SinglePropertyPage = () => {
  const { propertyData } = useSingleProperty();
  const { sendEnquiry } = useProperties();

  return (
    <div className="w-11/12 m-auto">
      {/* property */}
      <div className="flex items-center justify-between my-5">
        <div className="flex gap-3 max-sm:flex-col">
          <div className="flex items-baseline w-fit border-r-2 max-sm:border-none border-border-color  pr-5 max-sm:pr-0">
            <Heading
              className="text-[2rem] max-md:text-2xl max-sm:text-xl"
              text={
                propertyData.expectedPrice &&
                `Rs. ${propertyData?.expectedPrice.toLocaleString("en-IN")}`
              }
            />
          </div>
          <div className="flex gap-1 flex-col">
            <span className="text-2xl max-md:text-xl max-[380px]:text-sm text-[#666666] font-interRegular">
              {propertyData.propertyType}
            </span>
            <p className="font-interRegular text-sm text-[#666666]">
              {propertyData?.city}
            </p>
            <p className="text-xs font-interRegular text-[#666666]">
              {propertyData?.address}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <button
            onClick={() => {
              sendEnquiry(propertyData._id);
            }}
            className="px-5 py-2 max-md:px-2 flex items-center justify-center bg-green-btn text-white font-interRegular text-base capitalize max-[380px]:text-sm"
          >
            send enquiry
          </button>
        </div>
      </div>
      <hr />
      {/* property details */}
      <div className="flex items-center justify-between my-5 max-sm:flex-col">
        <div className="w-[30%] max-sm:w-4/5 max-sm:m-auto">
          <img
            className="w-full h-48"
            src={propertyData?.images ? propertyData?.images[0] : ""}
            alt="property picture"
          />
        </div>
        <div className="flex items-center justify-start w-[65%] max-md:justify-end max-sm:w-full max-sm:justify-center max-sm:m-auto">
          {(propertyData?.propertyType === "Residential Flat/Apartment" ||
            propertyData?.propertyType === "Commercial Office Space") && (
            <FlatOfficeSinglePropertyCard propertyData={propertyData} />
          )}

          {(propertyData?.propertyType === "Residential Plot/Land" ||
            propertyData?.propertyType === "Commercial Plot/Land") && (
            <PlotSinglePropertyCard item={propertyData} />
          )}

          {propertyData?.propertyType === "Residential House" && (
            <HouseSinglePropertyCard item={propertyData} />
          )}

          {(propertyData?.propertyType === "Commercial Showroom" ||
            propertyData?.propertyType === "Commercial Shop") && (
            <ShowroomShopSinglePropertyCard item={propertyData} />
          )}
        </div>
      </div>
      <hr />
      {/* property features  */}
      <div className="flex flex-col gap-2 my-5">
        <p className="font-interSemiBold text-black">
          {" "}
          Why should choose this property
        </p>
        <div className="flex items-center gap-5 flex-wrap">
          {propertyData?.locationAdvantages?.map((item, index) => {
            return (
              <span
                key={`${index}${item}`}
                className="bg-primary-color text-white font-interMedium py-1 px-2"
              >
                {item}
              </span>
            );
          })}
          {propertyData?.overlooking?.map((item, index) => {
            return (
              <span
                key={`${index}${item}`}
                className="bg-primary-color text-white font-interMedium py-1 px-2"
              >
                {item}
              </span>
            );
          })}
        </div>
      </div>
      {/* property description */}
      <div className="mt-10">
        <Heading className={"text-xl"} text="Description" />
        <p className="text-sm font-interRegular mt-2">
          {propertyData?.description}
        </p>
      </div>
    </div>
  );
};

export default SinglePropertyPage;
