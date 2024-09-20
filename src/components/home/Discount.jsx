import React from "react";

import { Button, Heading, Paragraph, SecondaryButton } from "../index";
import { discountBackground, discountGridImage } from "../../utils/icons";

const Discount = () => {
  return (
    <div className="w-11/12 mx-auto my-10 flex flex-col gap-5 max-sm:items-center max-sm:gap-2">
      <Button
        text="offers and discounts"
        className="uppercase font-interMedium bg-tertiary-color text-primary-color px-[1.3rem] py-[0.6rem] text-lg w-fit max-sm:text-sm  max-sm:px-[0.8rem] max-sm:py-[0.3rem]"
      />
      <Heading className="max-sm:text-center" text="Best Discount Offers" />
      <div className="flex items-end justify-between max-sm:flex-col max-sm:items-center max-sm:gap-2 ">
        <Paragraph
          text={
            "Discover our exclusive discounts and offers of the finest lands and properties with us."
          }
          className={"w-2/5 text-balance max-sm:w-full max-sm:text-center"}
        />
        <SecondaryButton text={"view all"} />
      </div>
      <div
        className=" bg-center px-10 py-5 flex items-center justify-between max-md:flex-col-reverse max-md:gap-5 max-[380px]:px-2"
        style={{
          background: `url(${discountBackground})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-[48%] flex items-center max-md:w-full max-md:justify-center">
          <div className="flex flex-col gap-10 max-md:items-center">
            <h1 className="text-5xl text-[#3A3737] font-interSemiBold uppercase max-md:text-3xl ">
              get <span className="text-primary-color "> 20% </span> Off on
              <br />
              <span className="text-4xl max-md:text-xl"> your first buy</span>
            </h1>
            <Button
              text="get the offers"
              className="uppercase font-interMedium bg-primary-color text-white px-10 py-[0.6rem] text-lg w-fit max-md:text-sm max-md:py-[0.4rem] max-md:px-0 max-md:w-full"
            />
          </div>
        </div>
        <div className="w-[48%] grid grid-rows-2 grid-cols-3 place-content-center gap-2 max-md:w-full ">
          <img
            className="w-full"
            src={discountGridImage}
            alt="discount images"
          />
          <img
            className="w-full"
            src={discountGridImage}
            alt="discount images"
          />
          <img
            className="w-full"
            src={discountGridImage}
            alt="discount images"
          />
          <img
            className="w-full"
            src={discountGridImage}
            alt="discount images"
          />
          <img
            className="w-full"
            src={discountGridImage}
            alt="discount images"
          />
        </div>
      </div>
    </div>
  );
};

export default Discount;
