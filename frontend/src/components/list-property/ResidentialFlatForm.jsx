import React from "react";
import Select from "react-select";

import usePostProperty from "../../hooks/usePostProperty";
import {
  locationAdvantage,
  facingValue,
  overLookingValue,
  residentialAmenities,
  customStyles,
} from "../../utils/constant";
import {
  AreaInputField,
  Dropdown,
  Heading,
  ListPropertyInput,
  ListPropertySelectInput,
  TotalFlats,
} from "../index";

const ResidentialFlatForm = ({
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
    <div className="flex flex-col gap-2">
      {/* property location */}
      <div className="mt-5">
        <Heading
          className="text-xl max-md:text-base"
          text="Property location"
        />
        <div className="flex flex-col gap-5 w-1/3 max-md:w-2/3">
          {formInputValue?.propertyPurpose === "Exchange" ? (
            <div className="w-full relative">
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
                  " rounded-md border border-primary-color py-0 outline-none max-md:text-base "
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

          <ListPropertyInput
            formInputValue={formInputValue}
            handelChangeFormInputFields={handelChangeFormInputFields}
            type={"text"}
            name="projectSocietyName"
            placeholder="Name of Project/Society"
            label={"Name of Project/Society"}
            className={
              " rounded-md  border border-primary-color py-0 outline-none max-md:text-base  "
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
              " rounded-md  border border-primary-color py-0 outline-none max-md:text-base  "
            }
          />
        </div>
      </div>

      {/* property features */}
      <div className="mt-5">
        <Heading
          className="text-xl max-md:text-base  "
          text="Property features"
        />
        <div className="grid grid-cols-3 grid-rows-2 gap-3 max-[550px]:grid-cols-1 max-[550px]:grid-rows-6 max-md:w-2/3">
          <ListPropertySelectInput
            name="bedrooms"
            formInputValue={formInputValue}
            handelChangeFormInputFields={handelChangeFormInputFields}
            label={"bedrooms:-"}
            className={"capitalize max-md:text-base"}
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
          <ListPropertySelectInput
            formInputValue={formInputValue}
            handelChangeFormInputFields={handelChangeFormInputFields}
            label={"bathrooms:-"}
            className={"capitalize"}
            name="bathrooms"
            options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          />
        </div>
      </div>

      {/* Area */}
      <div className="mt-5 max-md:w-2/3">
        <Heading className="text-xl max-md:text-base  " text="Area" />
        <div className="flex flex-col justify-between w-1/3 max-md:w-2/3">
          <AreaInputField
            formInputValue={formInputValue}
            handelChangeFormInputFields={handelChangeFormInputFields}
            className={"w-full max-md:text-base "}
            areaName="carpetArea"
            unitName="carpetAreaUnit"
            label={"Carpet Area"}
            type={"number"}
          />
          <AreaInputField
            formInputValue={formInputValue}
            handelChangeFormInputFields={handelChangeFormInputFields}
            className={"w-full max-md:text-base "}
            areaName="superArea"
            unitName="superAreaUnit"
            label={"Super Area"}
            type={"number"}
          />
        </div>
      </div>

      {/* construction status */}
      <div className="w-1/3 mt-5 flex flex-col max-md:w-2/3">
        <Heading
          className="text-xl pb-1 max-md:text-base  "
          text="property availability"
        />
        <ListPropertySelectInput
          formInputValue={formInputValue}
          handelChangeFormInputFields={handelChangeFormInputFields}
          name="possessionStatus"
          label={"Possession Status:-"}
          className="max-md:text-base"
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
      <div className="mt-5 w-1/3 max-md:w-2/3 ">
        <Heading
          className="text-xl pb-1 max-md:text-base "
          text="Price Details "
        />
        <div className="w-full  capitalize flex flex-col gap-2">
          <ListPropertyInput
            formInputValue={formInputValue}
            handelChangeFormInputFields={handelChangeFormInputFields}
            className={
              " w-full border-primary-color rounded-md border max-md:text-base"
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
              " w-full border-primary-color rounded-md border max-md:text-base"
            }
            placeholder={"Enter booking amount"}
            type={"number"}
            label={"booking amount"}
            name="bookingAmount"
          />
        </div>
      </div>

      {/*=======================amenities===================*/}
      <div className="mt-5 w-1/3 max-md:w-2/3">
        <Heading className="text-xl max-md:text-base" text="Amenities" />

        <div className="mt-1 w-full">
          <h2 className="capitalize font-interRegular max-md:text-base">
            Residential Amenities:-
          </h2>
          <Select
            styles={customStyles}
            name="residentialAmenities"
            className=" border-primary-color max-md:text-base"
            options={residentialAmenities}
            onChange={(value) => {
              let event = {
                target: {
                  name: "residentialAmenities",
                  value: value,
                },
              };
              handelChangeFormInputFields(event);
            }}
            value={formInputValue.residentialAmenities}
            isMulti
          />
        </div>
        <div className="mt-1 w-full">
          <h2 className="capitalize font-interRegular max-md:text-base">
            Location advantage:-
          </h2>
          <Select
            styles={customStyles}
            name="locationAdvantages"
            className="border-primary-color max-md:text-base"
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
        <div className="mt-1 w-full ">
          <h2 className="capitalize font-interRegular max-md:text-base">
            Overlooking:-
          </h2>
          <Select
            styles={customStyles}
            name="overlooking"
            className="border-primary-color max-md:text-base"
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
        <ListPropertySelectInput
          formInputValue={formInputValue}
          handelChangeFormInputFields={handelChangeFormInputFields}
          label={"facing:-"}
          name="facing"
          options={facingValue}
          className="max-md:text-base"
        />
      </div>
    </div>
  );
};

export default ResidentialFlatForm;
