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
  customStyles,
  facingValue,
  locationAdvantage,
  overLookingValue,
} from "../../utils/constant";
import usePostProperty from "../../hooks/usePostProperty";

const ResidentialHouseForm = ({
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
    <React.Fragment>
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
            {showCities ? (
              <Dropdown
                showCities={showCities}
                handelToggleCityDropdown={handelToggleCityDropdown}
                className={"absolute -bottom-[15rem] rounded-md"}
                name={"city"}
                array={cities}
                method={setFormInputValue}
              />
            ) : (
              ""
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
        </div>
      </div>

      {/* property features */}
      <div className="mt-5">
        <Heading className="text-xl " text="Property features" />
        <div className="grid grid-cols-3 grid-rows-2 gap-3">
          <ListPropertySelectInput
            name="bedrooms"
            formInputValue={formInputValue}
            handelChangeFormInputFields={handelChangeFormInputFields}
            label={"bedrooms:-"}
            className={"capitalize w-full"}
            options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ">10"]}
          />
          <ListPropertySelectInput
            name="balconies"
            formInputValue={formInputValue}
            handelChangeFormInputFields={handelChangeFormInputFields}
            label={"balconies:-"}
            className={"capitalize"}
            options={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          />
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
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9,
              10,
              11,
              12,
            ]}
          />
          <ListPropertySelectInput
            name="furnished"
            formInputValue={formInputValue}
            handelChangeFormInputFields={handelChangeFormInputFields}
            label={"furnished status:-"}
            className={"capitalize"}
            options={["furnished", "unfurnished", "semi-furnished"]}
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
            formInputValue={formInputValue}
            handelChangeFormInputFields={handelChangeFormInputFields}
            label={"facing:-"}
            name="facing"
            options={facingValue}
          />
        </div>
      </div>

      {/* Area */}
      <div className="mt-5">
        <Heading className="text-xl " text="Area" />
        <div className="flex flex-col gap-2 mt-1 w-1/3">
          <AreaInputField
            formInputValue={formInputValue}
            handelChangeFormInputFields={handelChangeFormInputFields}
            className={"w-full"}
            areaName="carpetArea"
            unitName="carpetAreaUnit"
            label={"Carpet Area"}
            type={"number"}
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
            areaName="superArea"
            unitName="superAreaUnit"
            label={"Super Area"}
            type={"number"}
            className={"w-full"}
          />
        </div>
      </div>

      {/* property availability */}
      <div className="w-1/3 max-lg:w-2/5 max-md:w-2/3">
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
      </div>

      {/* price details */}
      <div className="mt-5">
        <Heading className="text-xl pb-1 " text="Price Details" />
        <div className="w-1/3 capitalize flex flex-col gap-2">
          <ListPropertyInput
            formInputValue={formInputValue}
            handelChangeFormInputFields={handelChangeFormInputFields}
            className={"border border-primary-color rounded-md w-fit"}
            placeholder={"Enter Total Price"}
            type={"number"}
            label={"expected price"}
            name="expectedPrice"
          />
          <ListPropertyInput
            formInputValue={formInputValue}
            handelChangeFormInputFields={handelChangeFormInputFields}
            className={"border border-primary-color rounded-md w-fit"}
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

        <div className="mt-1">
          <h2 className="capitalize font-interRegular">Location advantage:-</h2>
          <Select
            styles={customStyles}
            name="locationAdvantages"
            className="w-1/3"
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
        <div className="mt-1">
          <h2 className="capitalize font-interRegular">Overlooking:-</h2>
          <Select
            styles={customStyles}
            name="overlooking"
            className="w-1/3"
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
      </div>
    </React.Fragment>
  );
};

export default ResidentialHouseForm;