import React from "react";
import Button from "../Button";

const AuctionPropertyCard = ({ item, sendQueryAuctionProperty }) => {
  return (
    <div className="border border-border-color p-3 w-fit flex flex-col gap-2 justify-center overflow-hidden">
      <div className="max-sm:w-full">
        <img
          className="w-[20rem] h-[15rem]"
          src={item?.image || "default-image.jpg"} // Provide a fallback for images
          alt="property images"
        />
      </div>
      <h1 className="font-interSemiBold text-2xl max-sm:text-lg">
        {item?.propertyType || "Property Type Unavailable"}
      </h1>
      <p className="font-interRegular text-lg text-[#A6A6A6] max-sm:text-sm">
        {item?.bankName || "Locality Unavailable"},{" "}
        {item?.city || "City Unavailable"}
      </p>
      <div className="flex items-center gap-10 max-sm:gap-4">
        <h2 className="text-primary-color font-interSemiBold text-2xl max-sm:text-base">
          {item?.reservePrice
            ? `Rs. ${item.reservePrice.toLocaleString("en-IN")}`
            : "N/A"}
        </h2>
      </div>
      <Button
        id={item._id}
        sendEnquiry={sendQueryAuctionProperty}
        className="w-full grid place-content-center py-2 capitalize border-2 border-primary-color text-primary-color hover:text-white hover:bg-primary-color transition-all  bg-transparent text-lg max-sm:text-base max-sm:py-1 max-sm:px-0"
      >
        send inquiry
      </Button>
    </div>
  );
};

export default AuctionPropertyCard;
