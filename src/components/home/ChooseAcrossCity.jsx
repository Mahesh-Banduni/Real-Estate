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
    <div className="mx-10 my-10 pt-10  flex flex-col gap-5">
      <Button
        text="wide availability"
        className="uppercase font-interMedium bg-tertiary-color text-primary-color px-[1.3rem] py-[0.6rem] text-lg w-fit"
      />
      <Heading text="CHOOSE ACROSS CITIES" />
      <div className="flex items-end justify-between">
        <Paragraph
          text={
            "Discover our exclusive selection of the finest one-of-a-kind luxury properties architectural masterpieces."
          }
          className={"w-2/5"}
        />
        <SecondaryButton text={"view all"} />
      </div>
      <div className="flex items-center justify-center gap-5">
        <SecondaryCard pic={cityImage} text="UDAIPUR" />
        <SecondaryCard pic={delhi} text="Delhi" />
        <SecondaryCard pic={dehradun} text="dehradun" />
        <SecondaryCard pic={kolkata} text="kolkata" />
      </div>
    </div>
  );
};

export default ChooseAcrossCity;
