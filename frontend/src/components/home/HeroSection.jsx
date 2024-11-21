import React, { useState } from "react";

import { heroSectionBackground } from "../../utils/icons";
import PropertyTypeList from "./PropertyTypeList";
import PropertyType from "./PropertyType";
import RecentSearch from "./RecentSearch";

const HeroSection = () => {
  const [property, setProperty] = useState("buy");
  const handelChangePropertyType = (name) => {
    setProperty(name);
  };

  let searchHistory = ["land in dehradun", "properties in delhi"];
  return (
    <div
      style={{ backgroundImage: `url(${heroSectionBackground})` }}
      className={`bg-cover bg-center bg-no-repeat my-10 w-11/12 mx-auto max-sm:w-[96%] `}
    >
      <div className="px-12 py-14 max-md:px-6 max-md:py-7 max-sm:px-4">
        <div className="w-2/5 max-md:w-11/12 flex flex-col gap-4">
          <h1 className=" text-5xl max-sm:text-3xl font-interSemiBold max-sm:text-center">
            Easy way to find a perfect
          </h1>
          <p className="text-xl max-sm:text-base text-[#585981] font-interRegular max-sm:text-center">
            We provide a complete service for the sale, purchase or sharing
            property of real estate.
          </p>
        </div>
        <div className="mt-10 max-md:mt-5">
          <ul className="flex items-center gap-5 uppercase max-md:gap-2 max-sm:justify-center max-[400px]:gap-1">
            <PropertyTypeList
              handelChangePropertyType={handelChangePropertyType}
              property={property}
              text="buy"
            />
            <PropertyTypeList
              handelChangePropertyType={handelChangePropertyType}
              property={property}
              text="exchange property"
            />
            <PropertyTypeList
              handelChangePropertyType={handelChangePropertyType}
              property={property}
              text="partnership property"
            />
          </ul>
        </div>
        <PropertyType property={property} />
        <div className="flex items-center gap-5 mt-5 text-[#8F90A6] text-base max-sm:hidden ">
          Resent Searches:
          {searchHistory?.map((item, index) => {
            return <RecentSearch key={index} text={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
