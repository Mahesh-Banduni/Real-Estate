import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { heroSectionBackground } from "../../utils/icons";
import PropertyTypeList from "./PropertyTypeList";
import PropertyType from "./PropertyType";

const HeroSection = () => {
  const [property, setProperty] = useState("buy");
  const handelChangePropertyType = (name) => {
    setProperty(name);
  };
  return (
    <div
      style={{ backgroundImage: `url(${heroSectionBackground})` }}
      className={`bg-cover bg-center bg-no-repeat `}
    >
      <div className="px-12 py-14">
        <div className="w-1/3 flex flex-col gap-4">
          <h1 className=" text-5xl ">Easy way to find a perfect</h1>
          <p className="text-base text-[#585981]">
            We provide a complete service for the sale, purchase or sharing
            property of real estate.
          </p>
        </div>
        <div className="mt-10">
          <ul className="flex items-center gap-5 uppercase">
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
        <PropertyType />
      </div>
    </div>
  );
};

export default HeroSection;
