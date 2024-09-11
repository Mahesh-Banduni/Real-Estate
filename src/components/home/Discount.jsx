import React from "react";

import { Button, Heading, Paragraph, SecondaryButton } from "../index";
import { discountBackground, discountGridImage } from "../../utils/icons";

const Discount = () => {
  return (
    <div className="mx-10 my-10 pt-10  flex flex-col gap-5">
      <Button
        text="offers and discounts"
        className="uppercase font-interMedium bg-tertiary-color text-primary-color px-[1.3rem] py-[0.6rem] text-lg w-fit"
      />
      <Heading text="Best Discount Offers" />
      <div className="flex items-end justify-between">
        <Paragraph
          text={
            "Discover our exclusive discounts and offers of the finest lands and properties with us."
          }
          className={"w-2/5"}
        />
        <SecondaryButton text={"view all"} />
      </div>
      <div
        className="bg-cover bg-center bg-no-repeat px-10 py-5 grid grid-rows-1 grid-cols-2"
        style={{ background: `url(${discountBackground})` }}
      >
        <div className=" flex items-center">
          <div className="flex flex-col gap-10">
            <h1 className="text-5xl text-[#3A3737] font-interSemiBold uppercase ">
              get <span className="text-primary-color "> 20% </span> Off on
              <br />
              <span className="text-4xl"> your first buy</span>
            </h1>
            <Button
              text="get the offers"
              className="uppercase font-interMedium bg-primary-color text-white px-10 py-[0.6rem] text-lg w-fit"
            />
          </div>
        </div>
        <div className="grid grid-rows-2 grid-cols-3">
          <img src={discountGridImage} alt="discount images" />
          <img src={discountGridImage} alt="discount images" />
          <img src={discountGridImage} alt="discount images" />
          <img src={discountGridImage} alt="discount images" />
          <img src={discountGridImage} alt="discount images" />
        </div>
      </div>
    </div>
  );
};

export default Discount;
