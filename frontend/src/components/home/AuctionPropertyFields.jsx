import React from "react";
import {
  facing,
  floor,
  furnishing,
  heart,
  status,
  superArea,
} from "../../utils/icons";
import Heading from "../Heading";
import Button from "../Button";
import { Link } from "react-router-dom";

const AuctionPropertyFields = ({ item }) => {
  let date = new Date(item?.auctionStartDateTime).toLocaleDateString();

  return (
    <div className=" border-2 border-primary-color max-lg:grid-flow-col grid grid-cols-list-card grid-rows-1 gap-5 max-lg:gap-2 max-lg:grid-cols-2 max-lg:grid-rows-2 max-sm:grid-cols-2 max-sm:grid-rows-property-card ">
      {/* property images */}
      <div className=" relative w-full p-2 max-lg:row-span-2 max-sm:row-span-1">
        <div className="w-full max-lg:h-full">
          <img
            className="w-full h-48"
            src={item?.image || "default-image.jpg"}
            alt="property"
          />
        </div>
      </div>

      {/* property features */}
      <div className="py-2 max-sm:hidden">
        <div className=" w-full h-[90%] my-auto flex flex-col gap-2 max-lg:justify-center max-sm:hidden max-xl:gap-1">
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between max-lg:justify-center max-lg:gap-2">
              <Heading
                text={`${item?.propertyType} for sale in ${item?.city}`}
                className="normal-case text-xl max-lg:w-3/5 max-md:text-base"
              />
              <div className="flex items-center justify-center gap-2">
                <img src={heart} alt="wishlist" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 grid-rows-2 bg-[#F5F5F5] gap-1 p-5 max-lg:hidden">
            <div className="flex items-center gap-2 justify-start border-border-color">
              <div>
                <img src={superArea} alt={"super area"} />
              </div>
              <div className=" flex flex-col">
                <span className="uppercase text-sm text-[#8F90A6] font-interRegular">
                  Borrower Name
                </span>
                <span className="text-sm text-[#110229] font-interMedium">
                  {item?.borrowerName}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3 justify-start border-border-color">
              <div>
                <img src={status} alt={"emdAmount"} />
              </div>
              <div className="flex flex-col">
                <span className="uppercase text-sm text-[#8F90A6] font-interRegular">
                  EMD Amount
                </span>
                <span className="capitalize text-sm text-[#110229] font-interMedium">
                  {item?.emdAmount.toLocaleString("en-IN")}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3 justify-start border-border-color">
              <div>
                <img src={floor} alt={"floor"} />
              </div>
              <div className="flex flex-col ">
                <span className="uppercase text-sm text-[#8F90A6] font-interRegular">
                  property Type
                </span>
                <span className="capitalize text-sm text-[#110229] font-interMedium">
                  {item?.propertyType}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3 justify-start border-border-color">
              <div>
                <img src={furnishing} alt={"city"} />
              </div>
              <div className="flex flex-col">
                <span className="uppercase text-sm text-[#8F90A6] font-interRegular">
                  city
                </span>
                <span className="capitalize text-sm text-[#110229] font-interMedium">
                  {item?.city}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3 justify-start border-border-color">
              <div>
                <img src={facing} alt={"Date"} />
              </div>
              <div className="flex flex-col">
                <span className="uppercase text-sm text-[#8F90A6] font-interRegular">
                  Auction Start Date
                </span>
                <span className="capitalize text-sm text-[#110229] font-interMedium">
                  {date}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3 justify-start border-border-color">
              <div>
                <img src={facing} alt={"bankName"} />
              </div>
              <div className="flex flex-col">
                <span className="uppercase text-sm text-[#8F90A6] font-interRegular">
                  Bank Name
                </span>
                <span className="capitalize text-sm text-[#110229] font-interMedium">
                  {item?.bankName}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* property price */}
      <div className=" w-full bg-price-card flex flex-col justify-between py-5 px-2 max-xl:mb-2 box-border max-lg:justify-start max-lg:h-fit max-lg:gap-5 ">
        <div className="text-center">
          <span className="text-2xl font-interSemiBold capitalize">
            {item?.reservePrice
              ? `Rs. ${item.reservePrice.toLocaleString("en-IN")}`
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

export default AuctionPropertyFields;
