import React from "react";

import {
  Button,
  Heading,
  Paragraph,
  SecondaryButton,
  SecondaryCard,
} from "../index";
import { dehradun, haridwar, mussorie, rishikesh } from "../../utils/icons";

const ChooseAcrossCity = () => {
  return (
    <div className="w-11/12 mx-auto my-10 flex flex-col gap-5 max-md:items-center max-md:gap-2">
      <Button className="uppercase font-interMedium bg-tertiary-color text-primary-color px-[1.3rem] py-[0.6rem] text-lg w-fit max-md:text-sm  max-md:px-[0.8rem] max-md:py-[0.3rem]">
        wide availability
      </Button>
      <Heading
        className="max-md:text-center max-md:text-xl"
        text="CHOOSE ACROSS CITIES"
      />
      <div className="flex items-end justify-between max-md:flex-col max-md:items-center max-md:gap-2 ">
        <Paragraph
          text={
            "Discover our exclusive selection of the finest one-of-a-kind luxury properties architectural masterpieces."
          }
          className={"w-2/5 text-balance max-md:w-full max-md:text-center"}
        />
        <SecondaryButton link="/properties" text={"view all"} />
      </div>
      <div className="flex items-center justify-between max-md:flex-wrap max-xl:justify-center max-xl:gap-5">
        <SecondaryCard pic={haridwar} text="Haridwar" />
        <SecondaryCard pic={mussorie} text="Mussoorie" />
        <SecondaryCard pic={dehradun} text="Dehradun" />
        <SecondaryCard pic={rishikesh} text="Rishikesh" />
      </div>
    </div>
  );
};

export default ChooseAcrossCity;
