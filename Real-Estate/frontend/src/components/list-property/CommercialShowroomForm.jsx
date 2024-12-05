import React, { useState } from "react";
import Select from "react-select";

import {
  AreaInputField,
  Dropdown,
  Heading,
  ListPropertyInput,
  ListPropertySelectInput,
} from "../index";
import {
  commercialLocationAdvantage,
  commercialOverLookingValue,
  customStyles,
  facingValue,
} from "../../utils/constant";
import usePostProperty from "../../hooks/usePostProperty";

const CommercialShowroomForm = ({
  handelChangeFormInputFields,
  formInputValue,
  cities,
  localities,
  setFormInputValue,
}) => {
  const {
    showCities,
    handelToggleCityDropdown,
    handelToggleLocalityDropdown,
    showLocalities,
  } = usePostProperty();

  const totalFloors = Array.from({ length: 250 }, (_, i) => i + 1);

  return (
    <React.Fragment>
      {/* property location */}
      <div className="mt-5">
        <Heading
          className="text-xl max-md:text-base"
          text="Property location"
        />
        <div className="flex flex-col gap-5 w-1/3 max-md:text-base max-md:w-3/4">
          {formInputValue?.propertyPurpose === "Exchange" ? (
            <div className="relative max-md:text-base">
              <ListPropertyInput
                handelToggleDropdown={handelToggleCityDropdown}
                formInputValue={formInputValue}
                handelChangeFormInputFields={handelChangeFormInputFields}
                type={"text"}
                placeholder="Enter City"
                label={"From City"}
                name="city"
                className={
                  "max-md:text-base rounded-md border border-primary-color py-0 outline-none  "
                }
              />

              {showCities ? (
                <Dropdown
                  showCities={showCities}
                  handelToggleCityDropdown={handelToggleCityDropdown}
                  className={"absolute max-md:text-base top-24 rounded-md"}
                  name={"city"}
                  array={cities}
                  method={setFormInputValue}
                />
              ) : (
                ""
              )}
            </div>
          ) : (
            <div className="relative max-md:text-base">
              <ListPropertyInput
                handelToggleDropdown={handelToggleCityDropdown}
                formInputValue={formInputValue}
                handelChangeFormInputFields={handelChangeFormInputFields}
                type={"text"}
                placeholder="Enter City"
                label={"City"}
                name="city"
                className={
                  "max-md:text-base rounded-md border border-primary-color py-0 outline-none  "
                }
              />

              {showCities ? (
                <Dropdown
                  showCities={showCities}
                  handelToggleCityDropdown={handelToggleCityDropdown}
                  className={"absolute max-md:text-base top-24 rounded-md"}
                  name={"city"}
                  array={cities}
                  method={setFormInputValue}
                />
              ) : (
                ""
              )}
            </div>
          )}

          <ListPropertyInput
            formInputValue={formInputValue}
            handelChangeFormInputFields={handelChangeFormInputFields}
            type={"text"}
            name="projectMarketName"
            placeholder="Enter Market Name"
            label={"Market Name"}
            className={
              "rounded-md max-md:text-base  border border-primary-color py-0 outline-none  "
            }
          />
          <ListPropertyInput
            formInputValue={formInputValue}
            handelChangeFormInputFields={handelChangeFormInputFields}
            type={"text"}
            placeholder="Enter Showroom address"
            label={"Address"}
            name={"address"}
            className={
              "rounded-md max-md:text-base border border-primary-color py-0 outline-none  "
            }
          />
          <ListPropertySelectInput
            formInputValue={formInputValue}
            handelChangeFormInputFields={handelChangeFormInputFields}
            label={"Land Zone"}
            name="landZone"
            options={[
              "Industrial",
              "Commercial",
              "Residential",
              "Transport and Communication",
              "Public Utilities",
              "Public and Semi Public Use",
              "Open Spaces",
              "Agriculture Zone",
              "Special Economic Zone",
              "Natural Conservation Zone",
              "Government Use",
            ]}
          />
        </div>
      </div>

      {/* property features */}
      <div className="mt-5">
        <Heading
          className="text-xl max-md:text-base "
          text="Property features"
        />
        <div className="grid grid-cols-3 grid-rows-2 gap-3 max-[850px]:grid-rows-5 max-[850px]:grid-cols-1 max-[850px]:w-3/4 max-[400px]:w-11/12">
          <ListPropertySelectInput
            name="floorNumber"
            formInputValue={formInputValue}
            handelChangeFormInputFields={handelChangeFormInputFields}
            label={"Floor no. :-"}
            className={"capitalize"}
            options={[
              "lower basement",
              "upper basement",
              "ground",
              ...totalFloors,
              "<250",
            ]}
          />
          <ListPropertySelectInput
            name="totalFloor"
            formInputValue={formInputValue}
            handelChangeFormInputFields={handelChangeFormInputFields}
            label={"Total Floors:-"}
            className={"capitalize"}
            options={totalFloors}
          />
          <ListPropertySelectInput
            name="furnished"
            formInputValue={formInputValue}
            handelChangeFormInputFields={handelChangeFormInputFields}
            label={"furnished status:-"}
            className={"capitalize"}
            options={["furnished", "unfurnished", "semi-furnished"]}
          />
          <div className="flex items-center gap-2 max-sm:text-sm max-sm:gap-1 mt-2">
            <p className="max-sm:text-sm">Main Road Facing :-</p>
            <div className="flex items-center gap-5 max-sm:gap-2">
              <div className="flex items-center justify-center gap-1">
                <label htmlFor="yesFacing">Yes</label>
                <input
                  defaultValue={"yes"}
                  onChange={handelChangeFormInputFields}
                  type="radio"
                  id="yesFacing"
                  name="mainRoadFacing"
                  className="radio radio-accent"
                />
              </div>
              <div className="flex items-center justify-center gap-1">
                <label htmlFor="noFacing">No</label>
                <input
                  defaultValue={"no"}
                  onChange={handelChangeFormInputFields}
                  id="noFacing "
                  type="radio"
                  name="mainRoadFacing"
                  className="radio radio-accent"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center max-sm:text-sm gap-2 max-sm:gap-1 mt-2">
            <p className="max-sm:text-sm">Personal Washroom :-</p>
            <div className="flex items-center gap-5 ">
              <div className="flex items-center justify-center gap-1">
                <label htmlFor="yesPersonalBathroom">Yes</label>
                <input
                  defaultValue={"yes"}
                  onChange={handelChangeFormInputFields}
                  type="radio"
                  id="yesPersonalBathroom"
                  name="personalWashroom"
                  className="radio radio-accent"
                />
              </div>
              <div className="flex items-center justify-center gap-1">
                <label htmlFor="noPersonalBathroom">No</label>
                <input
                  defaultValue={"no"}
                  onChange={handelChangeFormInputFields}
                  type="radio"
                  id="yesPersonalBathroom"
                  name="personalWashroom"
                  className="radio radio-accent"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Property Area */}
      <div className="mt-5">
        <Heading className="text-xl max-md:text-base " text="Area" />
        <div className="flex flex-col justify-between w-1/3 mt-1 max-md:text-base max-md:w-3/4 ">
          <AreaInputField
            formInputValue={formInputValue}
            handelChangeFormInputFields={handelChangeFormInputFields}
            areaName="carpetArea"
            unitName="carpetAreaUnit"
            label={"Carpet Area"}
            type={"number"}
            className={"w-full "}
          />
          <AreaInputField
            formInputValue={formInputValue}
            handelChangeFormInputFields={handelChangeFormInputFields}
            type={"number"}
            areaName="plotArea"
            unitName="plotAreaUnit"
            label={"Plot Area"}
            className={"w-full"}
          />
          <AreaInputField
            formInputValue={formInputValue}
            handelChangeFormInputFields={handelChangeFormInputFields}
            areaName="coveredArea"
            unitName="coveredAreaUnit"
            label={"covered Area"}
            type={"number"}
            className={"w-full"}
          />
        </div>
      </div>

      {/* property availability */}
      <div className="flex flex-col gap-2 w-1/3 max-md:text-base max-md:w-3/4 max-[400px]:w-11/12">
        <Heading
          className="text-xl pb-1 max-md:text-base "
          text="property availability"
        />
        <ListPropertySelectInput
          formInputValue={formInputValue}
          handelChangeFormInputFields={handelChangeFormInputFields}
          name="possessionStatus"
          label={"Possession Status:-"}
          options={["under construction", "ready to move"]}
        />
        <div className="flex items-center gap-5 max-sm:gap-2 mb-3">
          <h1 className="max-sm:text-sm">Currently Leased Out:-</h1>
          <div className="flex items-center gap-5 max-sm:gap-2 ">
            <div className="flex items-center gap-1">
              <label htmlFor="yes-Currently-Leased-Out">Yes</label>
              <input
                defaultValue={"yes"}
                onChange={handelChangeFormInputFields}
                id="yes-Currently-Leased-Out"
                name="currentlyLeasedOut"
                type="radio"
                className="radio radio-success"
              />
            </div>
            <div className="flex items-center gap-1">
              <label htmlFor="No-Currently-Leased-Out">No</label>
              <input
                defaultValue={"no"}
                onChange={handelChangeFormInputFields}
                id="No-Currently-Leased-Out"
                name="currentlyLeasedOut"
                type="radio"
                className="radio radio-success"
              />
            </div>
          </div>
        </div>

        <ListPropertySelectInput
          name="ownership"
          formInputValue={formInputValue}
          handelChangeFormInputFields={handelChangeFormInputFields}
          label={"Ownership Status :-"}
          className={"capitalize"}
          options={[
            "Freehold",
            "Leasehold",
            "Power Of Attorney",
            "Co-operative Society",
          ]}
        />
      </div>

      {/* price details */}
      <div className="mt-5 max-md:text-base ">
        <Heading
          className="text-xl pb-1 max-md:text-base "
          text="Price Details"
        />
        <div className="w-1/3 max-md:text-base max-md:w-3/4 capitalize flex flex-col gap-2  max-[400px]:w-11/12">
          <ListPropertyInput
            formInputValue={formInputValue}
            handelChangeFormInputFields={handelChangeFormInputFields}
            className={
              "border w-fit max-md:text-base border-primary-color rounded-md"
            }
            placeholder={"Enter Total Price"}
            type={"number"}
            label={"expected price"}
            name="expectedPrice"
          />
          <ListPropertyInput
            formInputValue={formInputValue}
            handelChangeFormInputFields={handelChangeFormInputFields}
            className={
              "border w-fit max-md:text-base border-primary-color rounded-md"
            }
            placeholder={"Enter booking amount"}
            type={"number"}
            label={"booking amount"}
            name="bookingAmount"
          />
          <div className="flex items-center gap-2 mt-2">
            <p className="max-sm:text-sm">Price Negotiable:-</p>
            <div className="flex items-center gap-5 max-sm:gap-2 ">
              <div className="flex items-center justify-center gap-1">
                <label htmlFor="yesNegotiable">yes</label>
                <input
                  defaultValue={"yes"}
                  onChange={handelChangeFormInputFields}
                  type="radio"
                  id="yesNegotiable"
                  name="priceNegotiable"
                  className="radio radio-accent"
                />
              </div>
              <div className="flex items-center justify-center gap-1">
                <label htmlFor="noNegotiable">No</label>
                <input
                  defaultValue={"no"}
                  onChange={handelChangeFormInputFields}
                  id="noNegotiable "
                  type="radio"
                  name="priceNegotiable"
                  className="radio radio-accent"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* amenities */}
      <div className="mt-5">
        <Heading className="text-xl " text="Amenities" />
        <div className="mt-1">
          <h2 className="capitalize font-interRegular">Amenities:-</h2>
          <Select
            styles={customStyles}
            name="locationAdvantages"
            className="w-1/3 max-md:text-base max-md:w-3/4 max-[400px]:w-11/12"
            options={commercialLocationAdvantage}
            onChange={(value) => {
              let event = {
                target: {
                  name: "locationAdvantages",
                  value: value,
                },
              };
              handelChangeFormInputFields(event);
            }}
            value={formInputValue.locationAdvantages}
            isMulti
          />
        </div>
        <div className="mt-1">
          <h2 className="capitalize font-interRegular">Overlooking:-</h2>
          <Select
            styles={customStyles}
            name="overlooking"
            className="w-1/3 max-md:text-base max-md:w-3/4 max-[400px]:w-11/12"
            options={commercialOverLookingValue}
            onChange={(value) => {
              let event = {
                target: {
                  name: "overlooking",
                  value: value,
                },
              };
              handelChangeFormInputFields(event);
            }}
            value={formInputValue.overlooking}
            isMulti
          />
        </div>
        <div className="w-1/3 max-md:text-base max-md:w-3/4 max-[400px]:w-11/12">
          <ListPropertySelectInput
            formInputValue={formInputValue}
            handelChangeFormInputFields={handelChangeFormInputFields}
            label={"facing:-"}
            name="facing"
            className
            options={facingValue}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default CommercialShowroomForm;
