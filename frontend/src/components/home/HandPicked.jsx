import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useSelector } from "react-redux";
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
import useHandpicked from "../../hooks/useHandpicked";

const HandPicked = () => {
  const data = useSelector((store) => store?.authReducer?.handpickedProperties);
  const { isLoading, message } = useHandpicked();
  return (
    <div className="w-11/12 mx-auto my-10 pt-10  flex flex-col gap-5 max-sm:gap-2">
      <div className="flex flex-col gap-5 max-sm:gap-2 max-sm:items-center">
        <Button className="uppercase font-interMedium bg-tertiary-color text-primary-color px-[1.3rem] py-[0.6rem] text-lg w-fit max-sm:text-sm  max-sm:px-[0.8rem] max-sm:py-[0.3rem]">
          special properties
        </Button>
        <Heading className="max-sm:text-center" text="hand picked properties" />
        <div className="flex items-end justify-between max-sm:flex-col max-sm:gap-2 max-sm:items-center">
          <Paragraph
            text={
              "Discover our exclusive selection of the finest one-of-a-kind luxury properties architectural masterpieces."
            }
            className={"w-2/5  text-balance max-sm:text-center max-sm:w-full "}
          />
          <SecondaryButton link="/handpicked" text={"View All"} />
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
          {data?.map((item) => {
            return (
              <SwiperSlide key={item._id}>
                <PrimaryCards item={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default HandPicked;