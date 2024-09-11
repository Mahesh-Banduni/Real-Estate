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
  PrimaryCards,
} from "../index";
import { recommend } from "../../utils/icons";

const RecommendationSection = () => {
  return (
    <div className="mx-10 my-10 pt-10  flex flex-col gap-5">
      <Button
        text="Discover"
        className="uppercase font-interMedium bg-tertiary-color text-primary-color px-[1.3rem] py-[0.6rem] text-lg w-fit"
      />
      <Heading text="Best Recommendation" />
      <div className="flex items-end justify-between">
        <Paragraph
          text={
            "Discover our exclusive discounts and offers of the finest lands and properties with us."
          }
          className={"w-2/5"}
        />
        <SecondaryButton text={"view all"} />
      </div>
      <div className="my-5">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={3.5}
          loop={true}
          pagination={false}
        >
          <SwiperSlide>
            <PrimaryCards
              pic={recommend}
              heading={"Perum griya asri"}
              para="Bogor, Jawa Barat"
              price="$25,000"
            />
          </SwiperSlide>
          <SwiperSlide>
            <PrimaryCards
              pic={recommend}
              heading={"Perum griya asri"}
              para="Bogor, Jawa Barat"
              price="$25,000"
            />
          </SwiperSlide>
          <SwiperSlide>
            <PrimaryCards
              pic={recommend}
              heading={"Perum griya asri"}
              para="Bogor, Jawa Barat"
              price="$25,000"
            />
          </SwiperSlide>
          <SwiperSlide>
            <PrimaryCards
              pic={recommend}
              heading={"Perum griya asri"}
              para="Bogor, Jawa Barat"
              price="$25,000"
            />
          </SwiperSlide>
          <SwiperSlide>
            <PrimaryCards
              pic={recommend}
              heading={"Perum griya asri"}
              para="Bogor, Jawa Barat"
              price="$25,000"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default RecommendationSection;
