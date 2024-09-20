import React from "react";

import {
  Button,
  Heading,
  Paragraph,
  SecondaryButton,
  SecondaryCard,
} from "../index";
import { cityImage, dehradun, delhi, kolkata } from "../../utils/icons";

const ChooseAcrossCity = () => {
  return (
    <div className="w-11/12 mx-auto my-10 flex flex-col gap-5 max-sm:items-center max-sm:gap-2">
      <Button
        text="wide availability"
        className="uppercase font-interMedium bg-tertiary-color text-primary-color px-[1.3rem] py-[0.6rem] text-lg w-fit max-sm:text-sm  max-sm:px-[0.8rem] max-sm:py-[0.3rem]"
      />
      <Heading className="max-sm:text-center" text="CHOOSE ACROSS CITIES" />
      <div className="flex items-end justify-between max-sm:flex-col max-sm:items-center max-sm:gap-2 ">
        <Paragraph
          text={
            "Discover our exclusive selection of the finest one-of-a-kind luxury properties architectural masterpieces."
          }
          className={"w-2/5 text-balance max-sm:w-full max-sm:text-center"}
        />
        <SecondaryButton text={"view all"} />
      </div>
      <div className="flex items-center justify-between max-sm:flex-wrap max-xl:justify-center max-xl:gap-5">
        <SecondaryCard pic={cityImage} text="UDAIPUR" />
        <SecondaryCard pic={delhi} text="Delhi" />
        <SecondaryCard pic={dehradun} text="dehradun" />
        <SecondaryCard pic={kolkata} text="kolkata" />
      </div>
    </div>
  );
};

export default ChooseAcrossCity;
