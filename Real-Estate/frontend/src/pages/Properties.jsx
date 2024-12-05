import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import PropertyTypeList from "../components/home/PropertyTypeList";
import { Input } from "../components";
import { location, upDownArrow } from "../utils/icons";
import useProperties from "../hooks/useProperties";
import { ListProperty, Loader } from "../components/index";
import {
  handelPriceLowToHigh,
  handelPriceHighToLow,
  handelMostRecent,
} from "../store/slice";
import useWishlist from "../hooks/useWishlist";

const Properties = () => {
  const { fetchWishlistProperties } = useWishlist();
  const dispatch = useDispatch();
  const data = useSelector((store) => store?.authReducer?.allProperties);

  const wishlistProperties = useSelector(
    (store) => store?.authReducer?.wishlist
  );

  const {
    handelChangeInputField,
    filterCity,
    cities,
    handelChangePropertyType,
    property,
    isLoading,
    handelSelectCity,
    handelChangeDropdown,
    message,
    propertyFilter,
    handelClearFilters,
    toggle,
  } = useProperties();

  useEffect(() => {
    fetchWishlistProperties();
  }, []);

  return (
    <>
      {message ? (
        <div className="w-full h-[42vh] flex items-center justify-center">
          <h1 className="text-center text-3xl font-interSemiBold capitalize text-red-500">
            {message}
          </h1>
        </div>
      ) : isLoading ? (
        <Loader />
      ) : (
        <div className="w-11/12 mx-auto">
          <div className="my-10">
            {/*---------------- property purpose--------------- */}
            <ul className="flex items-center mt-10 max-sm:mt-5 gap-5 uppercase max-sm:gap-2">
              <PropertyTypeList
                handelChangePropertyType={handelChangePropertyType}
                property={property === "Sale" ? "Buy" : ""}
                text="Buy"
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
            {/*---------------------- filters---------------------------- */}
            <div className="flex gap-5 items-center justify-start w-full max-md:flex-col max-md:items-start max-md:justify-center max-md:w-2/5 max-sm:w-3/4 ">
              <div className="flex w-fit max-xl:w-[20rem] max-md:w-full">
                <div className="relative w-full ">
                  <Input
                    value={filterCity}
                    name="city"
                    handelChangeInputField={handelChangeInputField}
                    className={"bg-transparent p-2 w-full max-sm:py-1"}
                    icon={location}
                    type={"text"}
                    placeholder={"Please enter your location"}
                  />
                  {cities?.length > 0 && toggle ? (
                    <div
                      className={`absolute bg-white h-[30vh] overflow-auto shadow-lg shadow-slate-600 z-20 w-52 border-2 border-primary-color outline-none`}
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
                </div>
              </div>
              {/* property type select input */}
              <select
                value={propertyFilter?.propertyType}
                onChange={handelChangeDropdown}
                name="propertyType"
                className={`rounded-none w-fit text-[#4B4B4B] border border-primary-color py-2 px-1 outline-none active:border-none active:outline-none hover:outline-none max-sm:text-sm max-md:w-full `}
              >
                <option defaultValue=" ">Select Property Type</option>

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
              {/* price range select input */}
              <select
                value={
                  propertyFilter.minPrice
                    ? `${propertyFilter.minPrice}-${propertyFilter.maxPrice}`
                    : ""
                }
                onChange={handelChangeDropdown}
                name="priceRange"
                className="rounded-none w-fit text-[#4B4B4B] border border-primary-color py-2 px-1 outline-none hover:outline-none max-sm:text-sm max-md:w-full"
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
            </div>
          </div>
          <hr />
          {/*------------------------------- properties button ----------------------------- */}
          <div className=" pt-2 flex items-center justify-between ">
            <div className=" flex items-center gap-5 tracking-wider max-sm:tracking-normal max-sm:gap-2 max-[450px]:gap-1 ">
              <button
                className={`text-white bg-primary-color px-5 py-2 uppercase transition-all cursor-pointer max-sm:text-sm max-sm:px-2 max-sm:py-1 max-[450px]:text-xs max-[350px]:text-[0.65rem] max-[450px]:px-1`}
              >
                properties
              </button>
              <button
                onClick={handelClearFilters}
                className={`text-white bg-red-500 px-5 py-2 uppercase transition-all cursor-pointer max-sm:text-sm max-sm:px-2 max-sm:py-1 max-[450px]:text-xs max-[350px]:text-[0.65rem] max-[450px]:px-1`}
              >
                Clear Filters
              </button>
            </div>
            <div className="dropdown dropdown-hover bg-transparent hover:bg-transparent m-0">
              <div
                tabIndex={0}
                role="button"
                className="btn m-1 bg-transparent capitalize rounded-none max-sm:m-0 max-sm:px-2 max-[450px]:text-xs max-[350px]:text-[0.65rem]"
              >
                <img
                  className=" mr-2 max-sm:mr-0 max-[450px]:hidden"
                  src={upDownArrow}
                  alt=" up and down arrow "
                />
                Sort by relevance
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 z-[1] p-2 shadow rounded-none"
              >
                <li
                  onClick={() => {
                    dispatch(handelPriceLowToHigh());
                  }}
                >
                  <p className="max-sm:text-xs capitalize">
                    price - Low to High
                  </p>
                </li>
                <li
                  onClick={() => {
                    dispatch(handelPriceHighToLow());
                  }}
                >
                  <p className="max-sm:text-xs capitalize">
                    price - High to Low
                  </p>
                </li>
                <li
                  onClick={() => {
                    dispatch(handelMostRecent());
                  }}
                >
                  <p className="max-sm:text-xs capitalize">Most Recent</p>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          {/*--------------------------------------- total properties length ------------------------------- */}
          <p className="text-[#8F90A6] text-lg font-interRegular py-2 max-sm:text-sm">
            {data.length} results | {propertyFilter?.city}  Property for{" "}
            {property}
          </p>
          {/*-------------------------- all properties------------------------------- */}
          <ListProperty
            wishlistProperties={wishlistProperties}
            propertiesList={data}
          />
        </div>
      )}
    </>
  );
};

export default Properties;
