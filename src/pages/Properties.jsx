import React, { useState } from "react";

import RecentSearch from "../components/home/RecentSearch";
import PropertyTypeList from "../components/home/PropertyTypeList";
import {
  ListProperty,
  Loader,
  SellPropertyTypeForm,
} from "../components/index";
import { Button, Input } from "../components";
import { location, filter, upDownArrow } from "../utils/icons";
import useProperties from "../hooks/useProperties";

const Properties = () => {
  let searchHistory = ["land in dehradun", "properties in delhi"];

  const { handelChangePropertyType, property, isLoading } = useProperties();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-11/12 mx-auto">
          <div className="my-10">
            <div className="mt-10 max-sm:mt-5">
              <ul className="flex items-center gap-5 uppercase max-sm:gap-2">
                <PropertyTypeList
                  handelChangePropertyType={handelChangePropertyType}
                  property={property}
                  text="Buy"
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
            <div className="w-3/5 flex items-baseline max-md:w-full">
              <div className="flex flex-col gap-5">
                <form className="flex items-center">
                  {property === "exchange property" ? (
                    <div className="flex items-center gap-2">
                      <Input
                        className={"bg-transparent p-2 w-full max-sm:py-1"}
                        icon={location}
                        type={"text"}
                        placeholder={"From City"}
                      />
                      <Input
                        className={"bg-transparent p-2 w-full max-sm:py-1"}
                        icon={location}
                        type={"text"}
                        placeholder={"To City"}
                      />
                    </div>
                  ) : (
                    <Input
                      className={"bg-transparent p-2 w-full max-sm:py-1"}
                      icon={location}
                      type={"text"}
                      placeholder={"Please enter your location"}
                    />
                  )}

                  <Button className="text-white font-interMedium bg-primary-color py-2 px-5 border border-border-color max-sm:px-2 max-sm:py-1 max-sm:text-xs ">
                    Search
                  </Button>
                </form>
                <div className="flex items-center gap-5 text-[#8F90A6] text-base max-sm:hidden ">
                  Resent Searches:
                  {searchHistory?.map((item, index) => {
                    return (
                      <RecentSearch
                        className=" rounded-none"
                        key={index}
                        text={item}
                      />
                    );
                  })}
                </div>
              </div>
              <div className="ml-5 cursor-pointer flex font-interMedium items-center justify-center border border-border-color px-8 py-[0.43rem] max-sm:py-1 max-sm:px-4 max-sm:text-sm ">
                <img className="mr-2 h-4" src={filter} alt=" filter " />
                Filter
              </div>
            </div>
          </div>
          <hr />
          <div className=" pt-2 flex items-center justify-between max-[450px]:justify-center max-[450px]:gap-[0.15rem] ">
            <div className=" flex items-center gap-5 tracking-wider max-sm:tracking-normal max-sm:gap-2 max-[450px]:gap-1 ">
              <button
                className={`text-white bg-primary-color px-5 py-2 uppercase transition-all cursor-pointer max-sm:text-sm max-sm:px-2 max-sm:py-1 max-[450px]:text-xs max-[350px]:text-[0.65rem] max-[450px]:px-1`}
              >
                properties
              </button>
              {/* <div
            onClick={() => {
              setPropertyType("new projects");
            }}
            className={`${
              propertyType === "new projects"
                ? "text-white bg-primary-color  "
                : " text-[#8F90A6] bg-transparent "
            } px-5 py-2 uppercase transition-all cursor-pointer max-sm:text-sm max-sm:px-2 max-sm:py-1 max-[450px]:text-xs max-[350px]:text-[0.65rem] max-[450px]:px-1`}
          >
            new projects
          </div> */}
            </div>
            <div className="dropdown dropdown-hover bg-transparent hover:bg-transparent m-0">
              <div
                tabIndex={0}
                role="button"
                className="btn m-1 bg-transparent rounded-none max-sm:m-0 max-sm:px-2 max-[450px]:text-xs max-[350px]:text-[0.65rem]"
              >
                <img
                  className="mr-2 max-sm:mr-0 max-[450px]:hidden"
                  src={upDownArrow}
                  alt=" up and down arrow "
                />
                Sort by relevance
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 z-[1] p-2 shadow rounded-none"
              >
                <li>
                  <p className="max-sm:text-xs">price - Low to High</p>
                </li>
                <li>
                  <p className="max-sm:text-xs">price - High to Low</p>
                </li>
                <li>
                  <p className="max-sm:text-xs">Most Recent</p>
                </li>
                <li>
                  <p className="max-sm:text-xs">rate/sqft - Low to High </p>
                </li>
                <li>
                  <p className="max-sm:text-xs">rate/sqft - High to Low </p>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <p className="text-[#8F90A6] text-lg font-interRegular py-2 max-sm:text-sm">
            2398 results | Property in Dehradun for Sale
          </p>
          <ListProperty />
        </div>
      )}
    </>
  );
};

export default Properties;
