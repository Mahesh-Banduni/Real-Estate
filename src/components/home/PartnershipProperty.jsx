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
  SecondaryButton,
  TertiaryCard,
} from "../index";
import { partnershipPropertyImage } from "../../utils/icons";

const PartnershipProperty = () => {
  return (
    <div className="w-11/12 mx-auto my-10 flex flex-col gap-5 max-sm:gap-2">
      <div className="flex flex-col gap-5 max-sm:items-center max-sm:gap-2">
        <Button text="Partnership Property" />
        <Button className="uppercase font-interMedium bg-tertiary-color text-primary-color px-[1.3rem] py-[0.6rem] text-lg w-fit max-sm:text-sm  max-sm:px-[0.8rem] max-sm:py-[0.3rem]">
          partnership property
        </Button>
        <Heading className="max-sm:text-center" text="PARTNERSHIP PROPERTIES" />
        <div className="flex items-end justify-between max-sm:flex-col max-sm:items-center max-sm:gap-2 ">
          <Paragraph
            text={
              "Discover our exclusive selection of the finest one-of-a-kind luxury properties architectural masterpieces."
            }
            className={"w-2/5 text-balance max-sm:w-full max-sm:text-center"}
          />
          <SecondaryButton text={"view all"} />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={10}
            loop={true}
            pagination={false}
            breakpoints={{
              1000: {
                slidesPerView: 2.5,
              },
              720: {
                slidesPerView: 1.5,
              },
              350: {
                slidesPerView: 1.3,
              },
            }}
          >
            <SwiperSlide>
              <TertiaryCard
                pic={partnershipPropertyImage}
                heading={"103/143 West Street,Crows Nest"}
                span1="10 Bedroom"
                span2="150 M"
                span3="2 Garage"
                price="Rs 45,500"
              />
            </SwiperSlide>
            <SwiperSlide>
              <TertiaryCard
                pic={partnershipPropertyImage}
                heading={"103/143 West Street,Crows Nest"}
                span1="10 Bedroom"
                span2="150 M"
                span3="2 Garage"
                price="Rs 45,500"
              />
            </SwiperSlide>
            <SwiperSlide>
              <TertiaryCard
                pic={partnershipPropertyImage}
                heading={"103/143 West Street,Crows Nest"}
                span1="10 Bedroom"
                span2="150 M"
                span3="2 Garage"
                price="Rs 45,500"
              />
            </SwiperSlide>
            <SwiperSlide>
              <TertiaryCard
                pic={partnershipPropertyImage}
                heading={"103/143 West Street,Crows Nest"}
                span1="10 Bedroom"
                span2="150 M"
                span3="2 Garage"
                price="Rs 45,500"
              />
            </SwiperSlide>
            <SwiperSlide>
              <TertiaryCard
                pic={partnershipPropertyImage}
                heading={"103/143 West Street,Crows Nest"}
                span1="10 Bedroom"
                span2="150 M"
                span3="2 Garage"
                price="Rs 45,500"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={10}
            loop={true}
            pagination={false}
            breakpoints={{
              1000: {
                slidesPerView: 2.5,
              },
              720: {
                slidesPerView: 1.5,
              },
              350: {
                slidesPerView: 1.3,
              },
            }}
          >
            <SwiperSlide>
              <TertiaryCard
                pic={partnershipPropertyImage}
                heading={"103/143 West Street,Crows Nest"}
                span1="10 Bedroom"
                span2="150 M"
                span3="2 Garage"
                price="Rs 45,500"
              />
            </SwiperSlide>
            <SwiperSlide>
              <TertiaryCard
                pic={partnershipPropertyImage}
                heading={"103/143 West Street,Crows Nest"}
                span1="10 Bedroom"
                span2="150 M"
                span3="2 Garage"
                price="Rs 45,500"
              />
            </SwiperSlide>
            <SwiperSlide>
              <TertiaryCard
                pic={partnershipPropertyImage}
                heading={"103/143 West Street,Crows Nest"}
                span1="10 Bedroom"
                span2="150 M"
                span3="2 Garage"
                price="Rs 45,500"
              />
            </SwiperSlide>
            <SwiperSlide>
              <TertiaryCard
                pic={partnershipPropertyImage}
                heading={"103/143 West Street,Crows Nest"}
                span1="10 Bedroom"
                span2="150 M"
                span3="2 Garage"
                price="Rs 45,500"
              />
            </SwiperSlide>
            <SwiperSlide>
              <TertiaryCard
                pic={partnershipPropertyImage}
                heading={"103/143 West Street,Crows Nest"}
                span1="10 Bedroom"
                span2="150 M"
                span3="2 Garage"
                price="Rs 45,500"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default PartnershipProperty;
