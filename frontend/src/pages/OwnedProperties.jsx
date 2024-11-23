import React, { useEffect } from "react";
import { useSelector, useDispatch} from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import PropertyTypeList from "../components/home/PropertyTypeList";
import { Button, Input } from "../components";
import { location, upDownArrow } from "../utils/icons";
import useOwnedProperties from "../hooks/useOwnedProperties";
import { ListProperty, Loader } from "../components";
import {
  handlePriceLowToHigh,
  handlePriceHighToLow,
  handleMostRecent,
} from "../store/slice";

const OwnedProperties = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const data = useSelector((store) => store?.authReducer?.ownedProperties);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/signin", { state: { from: location.pathname } }); // Redirect to login page if token is not present
    }
  }, [navigate, location]);

  // Destructuring updated return values from the custom hook
  const {
    //user,
    handleInputChange,
    ownedProperty,
    cities,
    handleChangePropertyType,
    property,
    isLoading,
    handleSelectCity,
    localities,
    ownedFilter,
    handleDropdownChange,
    message,
  } = useOwnedProperties();

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
            <div className="mt-10 max-sm:mt-5">
              <ul className="flex items-center gap-5 uppercase max-sm:gap-2">
                <PropertyTypeList
                  handelChangePropertyType={handleChangePropertyType}
                  property={property === "Sale" ? "Buy" : ""}
                  text="Buy"
                  name="Sale"
                />
                <PropertyTypeList
                  handelChangePropertyType={handleChangePropertyType}
                  property={property}
                  text="Exchange Property"
                  name="Exchange Property"
                />
                <PropertyTypeList
                  handelChangePropertyType={handleChangePropertyType}
                  property={property}
                  text="Partnership Property"
                  name="Partnership Property"
                />
              </ul>
            </div>
            <div className="flex gap-5 items-center justify-start w-full">
              <div className="flex">
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
                  <div className="relative">
                    <Input
                      value={ownedProperty}
                      name="city"
                      handelChangeInputField={handleInputChange}
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
                                  handleSelectCity(item);
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
                )}
                <Button className="text-white font-interMedium bg-primary-color py-2 px-5 max-sm:px-2 max-sm:py-1 max-sm:text-xs">
                  Search
                </Button>
              </div>
              {ownedFilter.city && (
                <select
                  name="locality"
                  onChange={handleDropdownChange}
                  value={ownedFilter?.locality}
                  className="border border-primary-color p-1 py-2 "
                >
                  <option className="capitalize" value="">
                    Select Locality
                  </option>
                  {localities.map((locality) => {
                    return (
                      <option
                        className="capitalize"
                        key={locality._id}
                        defaultValue={locality.name}
                      >
                        {locality.name}
                      </option>
                    );
                  })}
                </select>
              )}
              <select
                value={ownedFilter.propertyType}
                onChange={handleDropdownChange}
                name="propertyType"
                className="rounded-none w-fit text-[#4B4B4B] border border-primary-color py-2 px-1 max-[1120px]:w-full outline-none active:border-none hover:outline-none max-sm:text-sm"
              >
                <option defaultValue="">Select Property Type</option>
                <option defaultValue="Residential Flat/Apartment">
                  Residential Flat/Apartment
                </option>
                <option valudefaultValuee="Residential Plot/Land">
                  Residential Plot/Land
                </option>
                <option defaultValue="Residential House">Residential House</option>
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
              <select
                value={
                  ownedFilter.minPrice && ownedFilter.maxPrice
                    ? `${ownedFilter.minPrice}-${ownedFilter.maxPrice}`
                    : ""
                }
                onChange={handleDropdownChange}
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
                    dispatch(handlePriceLowToHigh());
                  }}
                >
                  <p className="max-sm:text-xs capitalize">
                    price - Low to High
                  </p>
                </li>
                <li
                  onClick={() => {
                    dispatch(handlePriceHighToLow());
                  }}
                >
                  <p className="max-sm:text-xs capitalize">
                    price - High to Low
                  </p>
                </li>
                <li
                  onClick={() => {
                    dispatch(handleMostRecent());
                  }}
                >
                  <p className="max-sm:text-xs capitalize">Most Recent</p>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <p className="text-[#8F90A6] text-lg font-interRegular py-2 max-sm:text-sm">
          {data.length} results | Property {`in Dehradun`} for Sale
          </p>
          <ListProperty propertiesList={data} />
        </div>
      )}
    </>
  );
};

export default OwnedProperties;
