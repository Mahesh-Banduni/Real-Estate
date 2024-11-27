import React from "react";
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

const CommercialShopForm = ({
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
  const totalFloors = Array.from({ length: 250 }, (_, i) => i + 1);
  return (
    <React.Fragment>
      {/* property location */}
      <div className="mt-5">
        <Heading className="text-xl" text="Property location" />
        <div className="flex flex-col gap-5 w-1/3">
          {formInputValue?.propertyPurpose === "exchange" ? (
            <div>
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
                    " rounded-md border border-primary-color py-0 outline-none  "
                  }
                />

                {FromCity ? (
                  <Dropdown
                    showCities={showCities}
                    handelToggleCityDropdown={handelToggleCityDropdown}
                    className={"absolute -bottom-[11.5rem] rounded-md"}
                    name={"city"}
                    array={cities}
                    method={setFormInputValue}
                  />
                ) : (
                  ""
                )}
              </div>
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
                    " rounded-md border border-primary-color py-0 outline-none  "
                  }
                />

                {toCity ? (
                  <Dropdown
                    showCities={showCities}
                    handelToggleCityDropdown={handelToggleCityDropdown}
                    className={"absolute -bottom-[11.5rem] rounded-md"}
                    name={"city"}
                    array={cities}
                    method={setFormInputValue}
                  />
                ) : (
                  ""
                )}
              </div>
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
                  " rounded-md border border-primary-color py-0 outline-none  "
                }
              />

              {showCities ? (
                <Dropdown
                  showCities={showCities}
                  handelToggleCityDropdown={handelToggleCityDropdown}
                  className={"absolute -bottom-[11.5rem] rounded-md"}
                  name={"city"}
                  array={cities}
                  method={setFormInputValue}
                />
              ) : (
                ""
              )}
            </div>
          )}

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
            name="projectMarketName"
            type={"text"}
            placeholder="Enter Market Name"
            label={"Market Name"}
            className={
              "rounded-md border border-primary-color py-0 outline-none "
            }
          />
          <ListPropertyInput
            formInputValue={formInputValue}
            handelChangeFormInputFields={handelChangeFormInputFields}
            type={"text"}
            placeholder="Enter shope address"
            label={"Address"}
            name={"address"}
            className={
              "rounded-md  border border-primary-color py-0 outline-none  "
            }
          />
        </div>
      </div>

      {/* property features */}
      <div className="mt-5">
        <Heading className="text-xl " text="Property features" />
        <div className="grid grid-cols-3 grid-rows-2 gap-3">
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
            formInputValue={formInputValue}
            handelChangeFormInputFields={handelChangeFormInputFields}
            name="furnished"
            label={"furnished status:-"}
            className={"capitalize"}
            options={["furnished", "unfurnished", "semi-furnished"]}
          />
          <div className="flex items-center gap-2 mt-2">
            <p>Main Road Facing :-</p>
            <div className="flex items-center gap-5">
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
          <div className="flex items-center gap-2 mt-2">
            <p>Personal Washroom :-</p>
            <div className="flex items-center gap-5">
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
        <Heading className="text-xl " text="Area" />
        <div className="flex flex-col justify-between w-1/3 mt-1 ">
          <AreaInputField
            formInputValue={formInputValue}
            handelChangeFormInputFields={handelChangeFormInputFields}
            areaName="coveredArea"
            unitName="coveredAreaUnit"
            type={"number"}
            label={"Covered Area"}
            className={"w-full"}
          />
          <AreaInputField
            formInputValue={formInputValue}
            handelChangeFormInputFields={handelChangeFormInputFields}
            areaName="carpetArea"
            unitName="carpetAreaUnit"
            label={"Carpet Area"}
            type={"number"}
            className={"w-full"}
          />
        </div>
      </div>

      {/* property availability */}
      <div className="flex flex-col gap-5 w-1/3">
        <Heading className="text-xl pb-1 " text="property availability" />
        <div className="w-full">
          <ListPropertySelectInput
            formInputValue={formInputValue}
            handelChangeFormInputFields={handelChangeFormInputFields}
            name="possessionStatus"
            label={"Possession Status:-"}
            options={["under construction", "ready to move"]}
            className="w-full"
          />
        </div>
        <div className="flex items-center gap-5 w-full">
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
      <div className="mt-5">
        <Heading className="text-xl pb-1 " text="Price Details" />
        <div className="w-1/3 capitalize flex flex-col gap-2">
          <ListPropertyInput
            formInputValue={formInputValue}
            handelChangeFormInputFields={handelChangeFormInputFields}
            className={"border w-full rounded border-primary-color"}
            placeholder={"Enter Total Price"}
            type={"number"}
            label={"expected price"}
            name="expectedPrice"
          />
          <ListPropertyInput
            formInputValue={formInputValue}
            handelChangeFormInputFields={handelChangeFormInputFields}
            className={"border w-full rounded border-primary-color"}
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
        <div className="mt-1 flex flex-col gap-2">
          <h2 className="capitalize font-interRegular">Amenities:-</h2>
          <Select
            styles={customStyles}
            name="locationAdvantages"
            className="w-1/3"
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
        <div className="mt-1 flex flex-col gap-2">
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
        <div className="w-1/3 mt-2">
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

export default CommercialShopForm;
