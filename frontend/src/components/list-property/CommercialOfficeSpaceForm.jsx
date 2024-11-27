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
  commercialLocationAdvantage,
  commercialIdealForBusinesses,
  facingValue,
  customStyles,
} from "../../utils/constant";
import usePostProperty from "../../hooks/usePostProperty";

const CommercialOfficeSpaceForm = ({
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
    <div>
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
            name="buildingComplexName"
            type={"text"}
            placeholder="Enter Complex Name"
            label={"Complex Name"}
            className={
              "rounded-md border border-primary-color py-0 outline-none  "
            }
          />
          <ListPropertyInput
            formInputValue={formInputValue}
            handelChangeFormInputFields={handelChangeFormInputFields}
            type={"text"}
            placeholder="Enter Office Space address"
            label={"Address"}
            name={"address"}
            className={
              " rounded-md  border border-primary-color py-0 outline-none  "
            }
          />
          <div className="mt-1">
            <h2 className="capitalize font-interRegular">
              Ideal For Businesses:-
            </h2>
            <Select
              styles={customStyles}
              formInputValue={formInputValue}
              handelChangeFormInputFields={handelChangeFormInputFields}
              label={"Ideal For Businesses"}
              name="idealForBusinesses"
              options={commercialIdealForBusinesses}
              onChange={(value) => {
                let event = {
                  target: {
                    name: "idealForBusinesses",
                    value: value,
                  },
                };
                handelChangeFormInputFields(event);
              }}
              value={formInputValue.idealForBusinesses}
              isMulti
            />
          </div>
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
            label={"bathrooms:-"}
            className={"capitalize"}
            name="bathrooms"
            options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          />
          <ListPropertySelectInput
            name="furnished"
            formInputValue={formInputValue}
            handelChangeFormInputFields={handelChangeFormInputFields}
            label={"furnished status:-"}
            className={"capitalize"}
            options={["furnished", "unfurnished", "semi-furnished"]}
          />
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
                  id="noPersonalBathroom "
                  type="radio"
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
        <div className="flex flex-col gap-2 mt-1 w-1/3">
          <AreaInputField
            formInputValue={formInputValue}
            handelChangeFormInputFields={handelChangeFormInputFields}
            areaName="carpetArea"
            unitName="carpetAreaUnit"
            label={"Carpet Area"}
            type={"number"}
          />
          <AreaInputField
            formInputValue={formInputValue}
            handelChangeFormInputFields={handelChangeFormInputFields}
            areaName="superArea"
            unitName="superAreaUnit"
            label={"Super Area"}
            type={"number"}
          />
        </div>
      </div>

      {/* property availability */}
      <div className="flex flex-col w-1/3 mt-5 gap-2 ">
        <Heading className="text-xl pb-1 " text="property availability" />
        <ListPropertySelectInput
          formInputValue={formInputValue}
          handelChangeFormInputFields={handelChangeFormInputFields}
          name="possessionStatus"
          label={"Possession Status:-"}
          options={["under construction", "ready to move"]}
        />
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
        <div className="flex items-center gap-5">
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
        <div className=" flex flex-col gap-3 w-1/3">
          <div className="mt-1">
            <h2 className="capitalize font-interRegular">Amenities:-</h2>
            <Select
              styles={customStyles}
              name="locationAdvantages"
              className="w-full"
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
              className="w-full"
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
          <ListPropertySelectInput
            formInputValue={formInputValue}
            handelChangeFormInputFields={handelChangeFormInputFields}
            label={"facing:-"}
            name="facing"
            options={facingValue}
          />
        </div>
      </div>
    </div>
  );
};

export default CommercialOfficeSpaceForm;
