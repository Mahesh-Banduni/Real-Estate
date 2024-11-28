import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  Button,
  Heading,
  Paragraph,
  PrimaryCards,
  SecondaryButton,
  TertiaryCard,
} from "../index";
import useHome from "../../hooks/useHome";
import { partnershipPropertyImage } from "../../utils/icons";
import AuctionPropertyCard from "./AuctionPropertyCard";

const PartnershipProperty = () => {
  const { auctionProperty, sendQueryAuctionProperty } = useHome();

  return (
    <div className="w-11/12 mx-auto my-10 flex flex-col gap-5 max-sm:gap-2">
      <div className="flex flex-col gap-5 max-sm:items-center max-sm:gap-2">
        <Button className="uppercase font-interMedium bg-tertiary-color text-primary-color px-[1.3rem] py-[0.6rem] text-lg w-fit max-sm:text-sm  max-sm:px-[0.8rem] max-sm:py-[0.3rem]">
          Auction property
        </Button>
        <Heading className="max-sm:text-center" text="Auction Properties" />
        <div className="flex items-end justify-between max-sm:flex-col max-sm:items-center max-sm:gap-2 ">
          <Paragraph
            text={
              "Discover our exclusive selection of the finest one-of-a-kind luxury properties architectural masterpieces."
            }
            className={"w-2/5 text-balance max-sm:w-full max-sm:text-center"}
          />
          <SecondaryButton link={"/auction"} text={"view all"} />
        </div>
      </div>
      <div className="my-5">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          loop={true}
          pagination={false}
          breakpoints={{
            1000: {
              slidesPerView: 3.5,
            },
            720: {
              slidesPerView: 2.2,
            },
            470: {
              slidesPerView: 1.7,
            },
            370: {
              slidesPerView: 1.3,
            },
            280: {
              slidesPerView: 1,
            },
          }}
        >
          {auctionProperty?.map((item) => {
            return (
              <SwiperSlide key={item._id}>
                <AuctionPropertyCard
                  sendQueryAuctionProperty={sendQueryAuctionProperty}
                  item={item}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default PartnershipProperty;
