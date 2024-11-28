import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

import useSalePropertyForm from "../../hooks/useProperties";
//import { Input, SelectInput } from "../index";
import { searchButton } from "../../utils/icons";

import PropertyTypeList from "./PropertyTypeList";
import { Button, Heading, Input, SellPropertyTypeForm } from "../";
import { SelectInput } from "../index";
import { location, upDownArrow } from "../../utils/icons";
import useProperties from "../../hooks/useProperties";
import { useSelector } from "react-redux";
import store from "../../store/Store";

const NormalProperty = ({ property }) => {
  const navigate = useNavigate();
  const propertyFilter = useSelector((store) => store.authReducer.filters);
  const {
    handelChangeDropdown,
    handelSelectCity,
    handelChangeInputField,
    filterCity,
    cities,
  } = useProperties();

  // const { submitForm, handleSubmit, register, errors } = useProperties();
  return (
    <div className="bg-[#ffffff] px-5 py-2 inline-block max-[1120px]:flex">
      <form
        onSubmit={() => {
          navigate("/properties");
        }}
        className="grid grid-rows-1 grid-cols-property-type-form gap-2 max-[1120px]:grid-cols-1 max-[1120px]:grid-rows-4 max-[1120px]:w-full"
        action=""
      >
        {/*----------------------------- search city--------------------- */}
        {property === "Exchange" ? (
          <div>
            <Input
              value={filterCity}
              label={"from City"}
              name="city"
              handelChangeInputField={handelChangeInputField}
              className={
                "bg-transparent py-3 px-2 rounded-md w-full max-sm:py-1"
              }
              icon={location}
              type={"text"}
              placeholder={"Please enter your location"}
            />
            {cities.length > 0 && (
              <div
                className={`absolute h-[30vh] overflow-auto shadow-lg shadow-slate-600 z-20 w-52 border-2 border-primary-color outline-none`}
              >
                <ul
                  className={`w-full bg-white font-interRegular text-sm flex flex-col h-full`}
                >
                  {cities?.map((item, index) => {
                    return (
                      <li
                        onClick={() => {
                          handelSelectCity(item);
                        }}
                        className="w-full cursor-pointer border-b-2 p-3 border-primary-color transition-all text-slate-800 hover:bg-gray-200"
                        key={index}
                      >
                        {item?.name}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        ) : (
          <div>
            <Input
              value={filterCity}
              label={"Enter City"}
              name="city"
              handelChangeInputField={handelChangeInputField}
              className={
                "bg-transparent py-3 px-2 rounded-md w-full max-sm:py-1"
              }
              icon={location}
              type={"text"}
              placeholder={"Please enter your location"}
            />
            {cities.length > 0 && (
              <div
                className={`absolute h-[30vh] overflow-auto shadow-lg shadow-slate-600 z-20 w-52 border-2 border-primary-color outline-none`}
              >
                <ul
                  className={`w-full bg-white font-interRegular text-sm flex flex-col h-full`}
                >
                  {cities?.map((item, index) => {
                    return (
                      <li
                        onClick={() => {
                          handelSelectCity(item);
                        }}
                        className="w-full cursor-pointer border-b-2 p-3 border-primary-color transition-all text-slate-800 hover:bg-gray-200"
                        key={index}
                      >
                        {item?.name}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        )}

        {/*-------------------------------- property type ---------------------- */}
        <div className="flex flex-col w-full">
          <Heading className="text-xl" text=" Property Type " />
          <select
            value={propertyFilter?.propertyType}
            onChange={handelChangeDropdown}
            name="propertyType"
            className={`mt-2 rounded-md text-[#4B4B4B] py-0 text-lg bg-[#F2F2F2] select select-ghost max-[1120px]:w-full w-full outline-none border-none active:border-none hover:border-none active:outline-none hover:outline-none max-sm:text-sm `}
          >
            <option defaultValue="">Select Property Type</option>

            <option defaultValue="Residential Flat/Apartment">
              Residential Flat/Apartment
            </option>
            <option defaultValue="Residential Plot/Land">
              Residential Plot/Land
            </option>
            <option defaultValue="Residential House">Residential House</option>
            <option defaultValue="Commercial Shop">Commercial Shop</option>
            <option defaultValue="Commercial Showroom">
              Commercial Showroom
            </option>
            <option defaultValue="Commercial Plot">Commercial Plot/Land</option>
            <option defaultValue="Commercial Office Space">
              Commercial Office Space
            </option>
          </select>
        </div>

        {/*----------------------- price change------------------------ */}
        <div className="w-full">
          <Heading className="text-xl" text="Price Range" />
          <select
            value={
              propertyFilter.minPrice
                ? `${propertyFilter.minPrice}-${propertyFilter.maxPrice}`
                : ""
            }
            name="priceRange"
            onChange={handelChangeDropdown}
            className={`mt-2 rounded-md text-[#4B4B4B] py-0 text-lg bg-[#F2F2F2] select select-ghost max-[1120px]:w-full w-full outline-none border-none active:border-none hover:border-none active:outline-none hover:outline-none max-sm:text-sm `}
          >
            <option value="">Select Price Range</option>
            <option value="0-2500000">Under Rs 25 Lakh</option>
            <option value="2500000-5000000">Rs 25 Lakh - Rs 50 Lakh</option>
            <option value="5000000-10000000">Rs 50 Lakh - Rs 1 Crore</option>
            <option value="10000000-25000000">Rs 1 Crore - Rs 2.5 Crore</option>
            <option value="25000000-">Above Rs 2.5 Crore</option>
          </select>
        </div>

        {/*------------------------------ submit button--------------------------------- */}
        <div className="w-full h-full flex max-[1120px]:items-start items-end justify-end">
          <button className="bg-primary-color w-12 h-12 max-sm:h-8 max-[1120px]:w-full max-[1120px]:mt-2 grid place-content-center">
            <img
              className=" max-sm:w-4 max-sm:h-4 "
              src={searchButton}
              alt="search"
            />
          </button>
        </div>
      </form>
    </div>
  );
};

export default NormalProperty;
