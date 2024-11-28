import React from "react";
import useHome from "../hooks/useHome";
import AuctionPropertyFields from "../components/home/AuctionPropertyFields";

const AuctionProperty = () => {
  const { auctionProperty } = useHome();

  return (
    <div className="w-11/12 mx-auto">
      <p className="text-[#8F90A6] text-lg font-interRegular py-2 max-sm:text-sm">
        Auction Properties:
      </p>
      <hr />
      <div className="flex flex-col gap-10 my-5">
        {auctionProperty?.map((item) => {
          return <AuctionPropertyFields key={item._id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default AuctionProperty;
