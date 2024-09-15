import React, { useState } from "react";

import RecentSearch from "../components/home/RecentSearch";
import PropertyTypeList from "../components/home/PropertyTypeList";
import { ListProperty } from "../components/index";
import { Button, Input } from "../components";
import { location, filter, upDownArrow } from "../utils/icons";

const Properties = () => {
  let searchHistory = ["land in dehradun", "properties in delhi"];
  const [propertyType, setPropertyType] = useState("properties");
  const [property, setProperty] = useState("buy");
  const handelChangePropertyType = (name) => {
    setProperty(name);
  };

  return (
    <div className="w-11/12 mx-auto">
      <div className="my-10">
        <div className="flex items-center gap-5 mt-5 text-[#8F90A6] text-base ">
          Resent Searches:
          {searchHistory?.map((item, index) => {
            return (
              <RecentSearch className=" rounded-none" key={index} text={item} />
            );
          })}
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
        <div className="w-3/5 flex items-center">
          <Input
            className={"bg-transparent p-2 w-full"}
            icon={location}
            type={"text"}
            placeholder={"Please enter your location"}
          />
          <Button
            text="Search"
            className="text-white font-interMedium bg-primary-color py-2 px-5 border border-border-color "
          />
          <div className="ml-5 cursor-pointer flex items-center justify-center border border-border-color px-8 py-2 ">
            <img className="mr-2" src={filter} alt=" filter " />
            Filter
          </div>
        </div>
      </div>
      <hr />
      <div className=" pt-2 flex items-center justify-between">
        <div className=" flex items-center gap-5 tracking-wider">
          <div
            onClick={() => {
              setPropertyType("properties");
            }}
            className={`${
              propertyType === "properties"
                ? "text-white bg-primary-color  "
                : " text-[#8F90A6] bg-transparent "
            } px-5 py-2 text uppercase transition-all cursor-pointer`}
          >
            properties
          </div>
          <div
            onClick={() => {
              setPropertyType("new projects");
            }}
            className={`${
              propertyType === "new projects"
                ? "text-white bg-primary-color  "
                : " text-[#8F90A6] bg-transparent "
            } px-5 py-2 text uppercase transition-all cursor-pointer`}
          >
            new projects
          </div>
        </div>
        <div className="dropdown dropdown-hover bg-transparent hover:bg-transparent m-0">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 bg-transparent rounded-none"
          >
            <img className="mr-2" src={upDownArrow} alt=" up and down arrow " />
            Sort by relevance
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 z-[1] w-52 p-2 shadow rounded-none"
          >
            <li>
              <a>price - Low to High</a>
            </li>
            <li>
              <a>price - High to Low</a>
            </li>
            <li>
              <a>Most Recent</a>
            </li>
            <li>
              <a>rate/sqft - Low to High </a>
            </li>
            <li>
              <a>rate/sqft - High to Low </a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="text-[#8F90A6] text-lg font-interRegular py-2">
        2398 results | Property in Dehradun for Sale
      </p>
      <ListProperty />
    </div>
  );
};

export default Properties;
