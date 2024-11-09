import React from "react";
import Select from "react-select";

import {
  AreaInputField,
  Heading,
  Dropdown,
  ListPropertyInput,
  ListPropertySelectInput,
} from "../index";
import {
  commercialOverLookingValue,
  customStyles,
  facingValue,
} from "../../utils/constant";
import usePostProperty from "../../hooks/usePostProperty";

const CommercialPlotForm = ({
  handelChangeFormInputFields,
  formInputValue,
  cities,
  localities,
  setFormInputValue,
}) => {
  const {
    showCities,
    showLocalities,
    handelToggleCityDropdown,
    handelToggleLocalityDropdown,
  } = usePostProperty();

  return (
    <div>
      {/* property location */}
      <div className="mt-5">
        <Heading className="text-xl" text="Property location" />
        <div className="flex flex-col gap-5 w-1/3">
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
                "rounded-md  border border-primary-color py-0 outline-none  "
              }
            />
            {showCities && (
              <Dropdown
                showCities={showCities}
                handelToggleCityDropdown={handelToggleCityDropdown}
                className={"absolute -bottom-[15rem] rounded-md"}
                name={"city"}
                array={cities}
                method={setFormInputValue}
              />
            )}
          </div>
          <ListPropertyInput
            formInputValue={formInputValue}
            handelChangeFormInputFields={handelChangeFormInputFields}
            type={"text"}
            name="projectSocietyName"
            placeholder="Name of Project/Society"
            label={"Name of Project/Society"}
            className={
              " rounded-md  border border-primary-color py-0 outline-none  "
            }
          />
          <div className="relative">
            <ListPropertyInput
              handelToggleDropdown={handelToggleLocalityDropdown}
              formInputValue={formInputValue}
              handelChangeFormInputFields={handelChangeFormInputFields}
              type={"text"}
              placeholder="Enter Locality"
              label={"Locality"}
              name={"locality"}
              className={
                " rounded-md  border border-primary-color py-0 outline-none  "
              }
            />
            {showLocalities && (
              <Dropdown
                handelToggleCityDropdown={handelToggleLocalityDropdown}
                className={"absolute -bottom-[15rem] rounded-md"}
                name={"locality"}
                array={localities}
                method={setFormInputValue}
              />
            )}
          </div>
          <ListPropertyInput
            formInputValue={formInputValue}
            handelChangeFormInputFields={handelChangeFormInputFields}
            type={"text"}
            placeholder="Enter House No/Flat No"
            label={"Address"}
            name={"address"}
            className={
              " rounded-md  border border-primary-color py-0 outline-none  "
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
        <Heading className="text-xl " text="Property features" />
        <div className="grid grid-cols-3 grid-rows-1 gap-3">
          <ListPropertyInput
            formInputValue={formInputValue}
            handelChangeFormInputFields={handelChangeFormInputFields}
            type={"number"}
            placeholder="Enter open sides"
            label={"Open Sides"}
            name="openSides"
            className={
              "rounded-md  border border-primary-color py-0 outline-none  "
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
              "rounded-md  border border-primary-color py-0 outline-none  "
            }
          />
          <div className="flex items-center gap-2 mt-2">
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
                  name="boundaryWall"
                  className="radio radio-accent"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <p>Corner Plot:-</p>
            <div className="flex items-center gap-5">
              <div className="flex items-center justify-center gap-1">
                <label htmlFor="yesNegotiable">yes</label>
                <input
                  defaultValue={"yes"}
                  onChange={handelChangeFormInputFields}
                  type="radio"
                  id="yesNegotiable"
                  name="cornerPlot"
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
                  name="cornerPlot"
                  className="radio radio-accent"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Area */}
      <div className="mt-5">
        <Heading className="text-xl " text="Area" />
        <div className="flex flex-col gap-2 mt-1 w-1/3">
          <AreaInputField
            formInputValue={formInputValue}
            handelChangeFormInputFields={handelChangeFormInputFields}
            type={"number"}
            areaName="plotArea"
            unitName="plotAreaUnit"
            label={"Plot Area"}
            className={"w-full"}
          />
          <div className=" border-b border-primary-color w-full flex flex-col gap-[0.15rem]">
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
          <div className=" border-b border-primary-color w-full flex flex-col gap-[0.15rem]">
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

      {/* property availability */}

      <div className="flex items-center gap-5 my-5 ">
        <h1>Currently Leased Out:-</h1>
        <div className="flex items-center gap-5">
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

      {/* price details */}
      <div className="mt-5">
        <Heading className="text-xl pb-1 " text="Price Details" />
        <div className="w-1/3 capitalize flex flex-col gap-2">
          <ListPropertyInput
            formInputValue={formInputValue}
            handelChangeFormInputFields={handelChangeFormInputFields}
            className={"border w-fit border-primary-color rounded-md"}
            placeholder={"Enter Total Price"}
            type={"number"}
            label={"expected price"}
            name="expectedPrice"
          />
          <ListPropertyInput
            formInputValue={formInputValue}
            handelChangeFormInputFields={handelChangeFormInputFields}
            className={"border w-fit border-primary-color rounded-md"}
            placeholder={"Enter booking amount"}
            type={"number"}
            label={"booking amount"}
            name="bookingAmount"
          />
          <div className="flex items-center gap-2 mt-2">
            <p>Price Negotiable:-</p>
            <div className="flex items-center gap-5">
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
        <div className=" flex flex-col gap-2">
          <div className="mt-1 flex flex-col gap-1">
            <h2 className="capitalize font-interRegular">Overlooking:-</h2>
            <Select
              styles={customStyles}
              name="overlooking"
              className="w-1/3"
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
          <div className="w-1/3">
            <ListPropertySelectInput
              formInputValue={formInputValue}
              handelChangeFormInputFields={handelChangeFormInputFields}
              name="facing"
              label={"facing:-"}
              options={facingValue}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommercialPlotForm;
