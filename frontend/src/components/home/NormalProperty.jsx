import React from "react";
import { CiLocationOn } from "react-icons/ci";

import useSalePropertyForm from "../../hooks/useProperties";
//import { Input, SelectInput } from "../index";
import { searchButton } from "../../utils/icons";
import { useSelector, useDispatch } from "react-redux";

import PropertyTypeList from "./PropertyTypeList";
import { Button, Input } from "../";
import {SelectInput} from "../index";
import { location, upDownArrow } from "../../utils/icons";
import useProperties from "../../hooks/useProperties";
import { ListProperty, Loader } from "../";
import {
  handelPriceLowToHigh,
  handelPriceHighToLow,
  handelMostRecent,
} from "../../store/slice";

const NormalProperty = () => {
  
  const dispatch = useDispatch();
  const data = useSelector((store) => store?.authReducer?.searchedProperties);
  
  const {
    handelChangeInputField,
    filterProperties,
    cities,
    handelChangePropertyType,
    property,
    isLoading,
    handelSelectCity,
    localities,
    filters,
    handelChangeDropdown,
    message,
    submitForm,
    formLoading,
    formErrorMessage,
    handleSubmit,
    register,
    errors
    
  } = useProperties();
  //console.log(cities);

  //const { submitForm, handleSubmit, register, errors } = useProperties();
  return (
    <div className="bg-[#ffffff] px-5 py-2 inline-block max-[1120px]:flex">
      <form
        onSubmit={handleSubmit(submitForm)}
        className="grid grid-rows-1 grid-cols-property-type-form gap-2 max-[1120px]:grid-cols-1 max-[1120px]:grid-rows-4 max-[1120px]:w-full"
        action=""
      >
        {/* <Input
          {...register("city", {
            required: true,
          })}
          icon={location}
          label="location"
          placeholder="Search City"
          type="text"
          className="capitalize text-lg text-[#4B4B4B] bg-transparent py-[0.63rem]"
        /> */}
        
        <Input
                      value={filterProperties}
                      label={"Enter City"}
                      name="city"
                      handelChangeInputField={handelChangeInputField}
                      className={"bg-transparent p-2 w-full max-sm:py-1"}
                      icon={location}
                      type={"text"}
                      placeholder={"Please enter your location"}
                    />
                    {cities.length > 0 ? (
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
                    ) : (
                      ""
                    )}
{/* <label htmlFor="propertyType" className="text-[#4B4B4B] font-semibold">
          Property Type
        </label> */}
<select

                value={filters.propertyType}
                label={"Property type"}
                onChange={handelChangeDropdown}
                name="propertyType"
                className={`rounded-none w-fit text-[#4B4B4B] border border-primary-color py-2 px-1 max-[1120px]:w-full outline-none active:border-none active:outline-none hover:outline-none max-sm:text-sm `}
              >
                <option defaultValue="">Select Property Type</option>

                <option defaultValue="Residential Flat/Apartment">
                  Residential Flat/Apartment
                </option>
                <option defaultValue="Residential Plot/Land">
                  Residential Plot/Land
                </option>
                <option defaultValue="Residential House">
                  Residential House
                </option>
                <option defaultValue="Commercial Shop">Commercial Shop</option>
                <option defaultValue="Commercial Showroom">
                  Commercial Showroom
                </option>
                <option defaultValue="Commercial Plot">
                  Commercial Plot/Land
                </option>
                <option defaultValue="Commercial Office Space">
                  Commercial Office Space
                </option>
              </select>
        {/* <SelectInput
          {...register("propertyType")}
          label={"Property type"}
          className={"w-full"}
          options={[
            "Residential Flat/Apartment",
            "Residential Plot/Land",
            "Residential House",
            "Commercial Shop",
            "Commercial Showroom",
            "Commercial Plot",
            "Commercial Office Space",
          ]}
        /> */}
        {/* <SelectInput
          label={"price range"}
          className={"w-full"}
          options={[
            "Under Rs 25 lakh",
            "Rs 25 Lakh - Rs 50 Lakh",
            "Rs 50 Lakh - Rs 1 Crore",
            "Rs 1 Crore - Rs 2.5 Crore",
            "Above 2.5 Crore",
          ]}
        /> */}
         {/* <label htmlFor="priceRange" className="text-[#4B4B4B] font-semibold">
          Price Range
        </label> */}
        <select 
        label={"Price Range"}
                value={
                  filters.minPrice && filters.maxPrice
                    ? `${filters.minPrice}-${filters.maxPrice}`
                    : ""
                }
                onChange={handelChangeDropdown}
                name="priceRange"
                className="rounded-none w-fit text-[#4B4B4B] border border-primary-color py-2 px-1 max-[1120px]:w-full outline-none hover:outline-none max-sm:text-sm"
              >
                <option value="">Select Price Range</option>
                <option value="0-2500000">Under Rs 25 Lakh</option>
                <option value="2500000-5000000">Rs 25 Lakh - Rs 50 Lakh</option>
                <option value="5000000-10000000">
                  Rs 50 Lakh - Rs 1 Crore
                </option>
                <option value="10000000-25000000">
                  Rs 1 Crore - Rs 2.5 Crore
                </option>
                <option value="25000000-">Above Rs 2.5 Crore</option>
              </select>
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
