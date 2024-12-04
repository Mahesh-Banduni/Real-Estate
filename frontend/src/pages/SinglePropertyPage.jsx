import React from "react";
import useSingleProperty from "../hooks/useSingleProperty";

import {
  facing,
  floor,
  furnishing,
  heart,
  recommend,
  status,
  superArea,
  transaction,
} from "../utils/icons";
import { Heading, Paragraph } from "../components/index";
import { Link } from "react-router-dom";

const SinglePropertyPage = () => {
  const { id } = useSingleProperty();
  console.log(id);

  let constantValue = {
    price: "Rs 4000 Lac",
    rate: "@ 30,000 per sq.ft.",
    propertyType: "1BHK 2Baths",
    address:
      "in Vasdev Gangotri Vihar Duplexes,Rajpur Road, Dehradun,Uttrakhand",
    carpetArea: "5000 sqft",
    description:
      "3BHK Duplex plus Big Study Puja Room, Servant Room with attached BathroomAradhana Greens is a heavenly adobe of serenity, nirvana and bliss which is built right in the heart of nature, and yet is a few minutes away from the center of Dehradun. These strategically placed apartments are a synonym for luxury living in a pollution free environment. Priced affordable, Aradhana Greens provides an opportunity to live comfortably in your dream house amidst nature.Just 10 to 15mins drive from center of the city.Surrounded by majestic Sal ForestZero noise pollution and air pollution",
  };
  return (
    <div className="w-11/12 m-auto">
      {/* property */}
      <div className="flex items-center justify-between mt-5">
        <div className="flex gap-3">
          <div className="flex items-baseline w-fit border-r-2 border-border-color  pr-5">
            <Heading className="text-[2rem]" text={constantValue.price} />
            <Paragraph text={constantValue.rate} />
          </div>
          <div className="flex gap-1 flex-col">
            <span className="text-2xl text-[#666666] font-interRegular">
              {constantValue.propertyType}
            </span>
            <p className="font-interRegular text-sm text-[#666666]">
              Flat/Apartment for Sale
            </p>
            <p className="text-xs font-interRegular text-[#666666]">
              {constantValue.address}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Link
            className="w-40 px-5 py-2 bg-green-btn text-white font-interRegular text-base capitalize"
            to={"#"}
          >
            send enquiry
          </Link>
          <button className="w-40 flex items-center justify-center gap-1 border-2 border-green-btn text-green-btn px-5 py-2">
            <img src={heart} alt="wishlist" />
            wishlist
          </button>
        </div>
      </div>
      {/* property details */}
      <div className="flex items-center justify-between mt-10">
        <div className="w-[30%]">
          <img src={recommend} alt="property picture" />
        </div>
        <div className="flex items-center justify-start w-[65%]">
          <div className="w-4/5 h-full grid grid-cols-2 grid-rows-3 bg-[#F5F5F5] gap-10 p-8">
            <div className="flex items-center gap-3 justify-start  ">
              <div>
                <img src={superArea} alt={"super area"} />
              </div>
              <div className=" flex flex-col">
                <span className="uppercase text-sm text-[#8F90A6] font-interRegular">
                  Super Area
                </span>
                <span className="text-sm text-[#110229] font-interMedium">
                  {" "}
                  5500 sqft
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3 justify-start ">
              <div>
                <img src={status} alt={"super area"} />
              </div>
              <div className="flex flex-col">
                <span className="uppercase text-sm text-[#8F90A6] font-interRegular">
                  status
                </span>
                <span className="capitalize text-sm text-[#110229] font-interMedium">
                  ready to move
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3 justify-start  ">
              <div>
                <img src={floor} alt={"super area"} />
              </div>
              <div className="flex flex-col ">
                <span className="uppercase text-sm text-[#8F90A6] font-interRegular">
                  floor
                </span>
                <span className="capitalize text-sm text-[#110229] font-interMedium">
                  3 out of 3
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3 justify-start ">
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
            </div>
            <div className="flex items-center gap-3 justify-start  ">
              <div>
                <img src={furnishing} alt={"super area"} />
              </div>
              <div className="flex flex-col">
                <span className="uppercase text-sm text-[#8F90A6] font-interRegular">
                  furnishing
                </span>
                <span className="capitalize text-sm text-[#110229] font-interMedium">
                  furnished
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3 justify-start ">
              <div>
                <img src={facing} alt={"super area"} />
              </div>
              <div className="flex flex-col">
                <span className="uppercase text-sm text-[#8F90A6] font-interRegular">
                  facing
                </span>
                <span className="capitalize text-sm text-[#110229] font-interMedium">
                  South-East
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* property description */}
      <div className="mt-10">
        <Heading className={"text-xl"} text="Description" />
        <p className="text-sm font-interRegular mt-2">
          {constantValue.description}
        </p>
      </div>
    </div>
  );
};

export default SinglePropertyPage;
