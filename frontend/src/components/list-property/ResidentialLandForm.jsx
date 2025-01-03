import React, { useState } from "react";
import Select from "react-select";

import {
  AreaInputField,
  Heading,
  Dropdown,
  ListPropertyInput,
  ListPropertySelectInput,
} from "../index";
import {
  customStyles,
  facingValue,
  locationAdvantage,
  overLookingValue,
} from "../../utils/constant";
import usePostProperty from "../../hooks/usePostProperty";

const ResidentialLandForm = ({
  handelChangeFormInputFields,
  formInputValue,
  cities,
  setFormInputValue,
}) => {
  const { showCities, handelToggleCityDropdown } = usePostProperty();
  return (
    <React.Fragment>
      {/* property location */}
      <div className="mt-5">
        <Heading
          className="text-xl max-md:text-base"
          text="Property location"
        />
        <div className="flex flex-col gap-5 w-1/3 max-md:w-2/3">
          {formInputValue?.propertyPurpose === "Exchange" ? (
            <div className="relative">
              <ListPropertyInput
                handelToggleDropdown={handelToggleCityDropdown}
                formInputValue={formInputValue}
                handelChangeFormInputFields={handelChangeFormInputFields}
                type={"text"}
                placeholder="Enter City"
                label={"From City"}
                name="city"
                className={
                  " rounded-md border border-primary-color py-0 outline-none max-md:text-base  "
                }
              />

              {showCities && cities.length > 0 ? (
                <Dropdown
                  showCities={showCities}
                  handelToggleCityDropdown={handelToggleCityDropdown}
                  className={"absolute top-24 rounded-md"}
                  name={"city"}
                  array={cities}
                  method={setFormInputValue}
                />
              ) : (
                ""
              )}
            </div>
          ) : (
            <div className="relative">
              <ListPropertyInput
                handelToggleDropdown={handelToggleCityDropdown}
                formInputValue={formInputValue}
                handelChangeFormInputFields={handelChangeFormInputFields}
                type={"text"}
                placeholder="Enter City"
                label={"City"}
                name="city"
                className={
                  " rounded-md border border-primary-color py-0 outline-none max-md:text-base  "
                }
              />

              {showCities && cities.length > 0 ? (
                <Dropdown
                  showCities={showCities}
                  handelToggleCityDropdown={handelToggleCityDropdown}
                  className={"absolute top-24 rounded-md"}
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
            name="projectSocietyName"
            placeholder="Name of Project/Society"
            label={"Name of Project/Society"}
            className={
              " rounded-md max-md:text-base border border-primary-color py-0 outline-none  "
            }
          />

          <ListPropertyInput
            formInputValue={formInputValue}
            handelChangeFormInputFields={handelChangeFormInputFields}
            type={"text"}
            placeholder="Enter House No/Flat No"
            label={"Address"}
            name={"address"}
            className={
              " rounded-md max-md:text-base border border-primary-color py-0 outline-none  "
            }
          />
        </div>
      </div>

      {/* property features */}
      <div className="mt-5">
        <Heading
          className="text-xl max-md:text-base "
          text="Property features"
        />
        <div className="grid grid-cols-3 grid-rows-2 gap-3 max-[850px]:grid-cols-1 max-[850px]:grid-rows-4 ">
          <ListPropertyInput
            formInputValue={formInputValue}
            handelChangeFormInputFields={handelChangeFormInputFields}
            type={"number"}
            placeholder="Enter open sides"
            label={"Open Sides"}
            name="openSides"
            className={
              "rounded-md max-[850px]:w-1/3 max-md:w-2/3 max-md:text-base border border-primary-color py-0 outline-none  "
            }
          />
          <ListPropertyInput
            formInputValue={formInputValue}
            handelChangeFormInputFields={handelChangeFormInputFields}
            type={"number"}
            placeholder="Enter facing road width in Metre"
            label={"Facing Road Width in Metre"}
            name="facingRoadWidth"
            className={
              "rounded-md max-[850px]:w-1/3 max-md:w-2/3 max-md:text-base border border-primary-color py-0 outline-none  "
            }
          />

          <div className="flex items-center gap-2 ">
            <p>Boundary Wall:-</p>
            <div className="flex items-center gap-5">
              <div className="flex items-center justify-center gap-1">
                <label htmlFor="yesNegotiable">yes</label>
                <input
                  defaultValue={"yes"}
                  onChange={handelChangeFormInputFields}
                  type="radio"
                  id="yesNegotiable"
                  name="boundaryWall"
                  className="radio radio-accent max-md:text-base"
                />
              </div>
              <div className="flex items-center justify-center gap-1">
                <label htmlFor="noNegotiable">No</label>
                <input
                  defaultValue={"no"}
                  onChange={handelChangeFormInputFields}
                  id="noNegotiable "
                  type="radio"
                  name="boundaryWall"
                  className="radio radio-accent max-md:text-base"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 ">
            <p>Gated Colony:-</p>
            <div className="flex items-center gap-5">
              <div className="flex max-md:text-sm items-center justify-center gap-1">
                <label htmlFor="yesNegotiable">yes</label>
                <input
                  defaultValue={"yes"}
                  onChange={handelChangeFormInputFields}
                  type="radio"
                  id="yesNegotiable"
                  name="gatedColony"
                  className="radio radio-accent max-md:text-sm"
                />
              </div>
              <div className="flex items-center max-md:text-sm justify-center gap-1">
                <label htmlFor="noNegotiable">No</label>
                <input
                  defaultValue={"no"}
                  onChange={handelChangeFormInputFields}
                  id="noNegotiable "
                  type="radio"
                  name="gatedColony"
                  className="radio radio-accent max-md:text-base"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Area */}
      <div className="mt-5 w-1/3 max-md:w-2/3 max-md:text-base ">
        <Heading className="text-xl " text="Area" />
        <div className="flex flex-col gap-2 mt-1 w-full">
          <AreaInputField
            formInputValue={formInputValue}
            handelChangeFormInputFields={handelChangeFormInputFields}
            type={"number"}
            areaName="plotArea"
            unitName="plotAreaUnit"
            label={"Plot Area"}
            className={"w-full p-0"}
          />
          <div className="w-full border-b border-primary-color flex flex-col gap-[0.15rem]">
            <label htmlFor={""}>Length:-</label>
            <div className="flex items-center justify-between">
              <input
                value={formInputValue.lengthDimension}
                onChange={handelChangeFormInputFields}
                type={"number"}
                placeholder={"Enter length dimension"}
                className={`capitalize py-1 outline-none`}
                name="lengthDimension"
              />
              <input
                defaultValue={"ft"}
                type={"text"}
                placeholder={"ft"}
                disabled
                className={`capitalize py-1 w-10 outline-none border-none `}
              />
            </div>
          </div>
          <div className="w-full border-b border-primary-color flex flex-col gap-[0.15rem]">
            <label>Width:-</label>
            <div className="flex items-center justify-between">
              <input
                value={formInputValue.widthDimension}
                onChange={handelChangeFormInputFields}
                name="widthDimension"
                type={"number"}
                placeholder={"Enter Width dimension"}
                className={`capitalize py-1 outline-none`}
              />

              <input
                defaultValue={"ft"}
                type={"text"}
                placeholder={"ft"}
                disabled
                className={`capitalize py-1 w-10 outline-none border-none `}
              />
            </div>
          </div>
        </div>
      </div>

      {/* construction status */}
      <div className="w-1/3 max-lg:w-2/5 max-md:w-2/3">
        <ListPropertySelectInput
          name="ownership"
          formInputValue={formInputValue}
          handelChangeFormInputFields={handelChangeFormInputFields}
          label={"Ownership Status :-"}
          className={"capitalize w-full"}
          options={[
            "Freehold",
            "Leasehold",
            "Power Of Attorney",
            "Co-operative Society",
          ]}
        />
      </div>

      {/* price details */}
      <div className="mt-5">
        <Heading
          className="text-xl pb-1 max-md:text-base "
          text="Price Details"
        />
        <div className="w-1/3 max-md:w-2/3 capitalize flex flex-col gap-2">
          <ListPropertyInput
            formInputValue={formInputValue}
            handelChangeFormInputFields={handelChangeFormInputFields}
            className={
              "border rounded-md w-full max-md:text-base border-primary-color "
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
              "border rounded-md w-full max-md:text-base border-primary-color"
            }
            placeholder={"Enter booking amount"}
            type={"number"}
            label={"booking amount"}
            name="bookingAmount"
          />
          <div className="flex w-full items-center gap-2 mt-2">
            <p className="text-sm">Price Negotiable:-</p>
            <div className="flex items-center gap-5">
              <div className="flex items-center justify-center gap-1">
                <label htmlFor="yesNegotiable">yes</label>
                <input
                  formInputValue={formInputValue}
                  handelChangeFormInputFields={handelChangeFormInputFields}
                  type="radio"
                  id="yesNegotiable"
                  name="priceNegotiable"
                  className="radio radio-accent"
                />
              </div>
              <div className="flex items-center justify-center gap-1">
                <label htmlFor="noNegotiable">No</label>
                <input
                  formInputValue={formInputValue}
                  handelChangeFormInputFields={handelChangeFormInputFields}
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

        <div className="mt-1 flex flex-col gap-2">
          <h2 className="capitalize font-interRegular">Location advantage:-</h2>
          <Select
            styles={customStyles}
            name="locationAdvantages"
            className="w-1/3 max-md:w-2/3"
            options={locationAdvantage}
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
        <div className="mt-2 flex flex-col gap-2">
          <h2 className="capitalize font-interRegular">Overlooking:-</h2>
          <Select
            styles={customStyles}
            name="overlooking"
            className="w-1/3 max-md:w-2/3"
            options={overLookingValue}
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
        <div className="w-1/3 max-md:w-2/3 mt-2">
          <ListPropertySelectInput
            formInputValue={formInputValue}
            handelChangeFormInputFields={handelChangeFormInputFields}
            label={"facing:-"}
            name="facing"
            options={facingValue}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ResidentialLandForm;
