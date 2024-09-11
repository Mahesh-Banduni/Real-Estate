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
    <div className="mx-10 my-10 pt-10  flex flex-col gap-5">
      <Button
        text="Partnership Property"
        className="uppercase font-interMedium bg-tertiary-color text-primary-color px-[1.3rem] py-[0.6rem] text-lg w-fit"
      />
      <Heading text="PARTNERSHIP PROPERTIES" />
      <div className="flex items-end justify-between">
        <Paragraph
          text={
            "Discover our exclusive selection of the finest one-of-a-kind luxury properties architectural masterpieces."
          }
          className={"w-2/5"}
        />
        <SecondaryButton text={"view all"} />
      </div>
      <div className="flex flex-col gap-2">
        <div>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={10}
            slidesPerView={2.5}
            loop={true}
            pagination={false}
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
            slidesPerView={2.5}
            loop={true}
            pagination={false}
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
