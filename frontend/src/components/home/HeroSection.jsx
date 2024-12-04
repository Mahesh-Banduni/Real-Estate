import React, { useState } from "react";

import { heroSectionBackground } from "../../utils/icons";
import PropertyTypeList from "./PropertyTypeList";
import PropertyType from "./PropertyType";
import { useDispatch } from "react-redux";
import { handelUpdateFilters } from "../../store/slice";

const HeroSection = () => {
  const dispatch = useDispatch();
  const [property, setProperty] = useState("Sale");
  const handelChangePropertyType = (name) => {
    dispatch(handelUpdateFilters({ name: "propertyPurpose", value: name }));
    setProperty(name);
  };

  return (
    <div
      style={{ backgroundImage: `url(${heroSectionBackground})` }}
      className={`bg-cover bg-center bg-no-repeat my-10 w-11/12 mx-auto max-sm:w-[96%] `}
    >
      <div className="px-12 py-14 max-md:px-6 max-md:py-7 max-sm:px-4">
        <div className="w-1/2 max-md:w-11/12 flex flex-col gap-4">
          <h1 className="text-5xl max-md:text-3xl max-sm:text-2xl font-interSemiBold max-sm:text-center">
            Easy way to find a perfect{" "}
            <span className="text-primary-color"> Property </span>
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
              text="Sale"
              name="Sale"
            />
            <PropertyTypeList
              handelChangePropertyType={handelChangePropertyType}
              property={property}
              text="Exchange"
              name="Exchange"
            />
            <PropertyTypeList
              handelChangePropertyType={handelChangePropertyType}
              property={property}
              text="Partnership"
              name="Partnership"
            />
          </ul>
        </div>
        <PropertyType property={property} />
      </div>
    </div>
  );
};

export default HeroSection;
