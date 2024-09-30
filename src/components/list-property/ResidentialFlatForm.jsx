import React from "react";
import Select from "react-select";

import {
  locationAdvantage,
  facingValue,
  overLookingValue,
  residentialAmenities,
} from "../../utils/constant";
import {
  AreaInputField,
  Heading,
  ListPropertyInput,
  ListPropertySelectInput,
  Paragraph,
  TotalFlats,
} from "../index";

const ResidentialFlatForm = ({
  handelChangeFormInputFields,
  formInputValue,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <TotalFlats
        name="numberOfFlatsInSociety"
        handelChangeFormInputFields={handelChangeFormInputFields}
        formInputValue={formInputValue}
      />
      {/* property location */}
      <div className="mt-5">
        <Heading className="text-xl" text="Property location" />
        <div className="flex flex-col gap-5 w-2/5">
          <ListPropertyInput
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

          <ListPropertyInput
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
            className={"capitalize"}
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
        <div className="flex flex-col gap-2 mt-1">
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
      {/* construction status */}
      <div>
        <ListPropertySelectInput
          formInputValue={formInputValue}
          handelChangeFormInputFields={handelChangeFormInputFields}
          label={"Possession Status:-"}
          options={["under construction", "ready to move"]}
          name="possessionStatus"
        />
      </div>

      {/* price details */}
      <div className="mt-5">
        <Heading className="text-xl pb-1 " text="Price Details" />
        <div className="w-fit capitalize flex flex-col gap-2">
          <ListPropertyInput
            formInputValue={formInputValue}
            handelChangeFormInputFields={handelChangeFormInputFields}
            className={"border w-fit"}
            placeholder={"Enter Total Price"}
            type={"number"}
            label={"expected price"}
            name="expectedPrice"
          />
          <ListPropertyInput
            formInputValue={formInputValue}
            handelChangeFormInputFields={handelChangeFormInputFields}
            className={"border w-fit"}
            placeholder={"Enter booking amount"}
            type={"number"}
            label={"booking amount"}
            name="bookingAmount"
          />
        </div>
      </div>

      <div className="mt-5">
        <Heading className="text-xl " text="Amenities" />
        <div className="">
          <div className="mt-1">
            <h2 className="capitalize font-interRegular">
              Residential Amenities:-
            </h2>
            <Select
              name="residentialAmenities"
              className="w-1/3"
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
          <div className="mt-1">
            <h2 className="capitalize font-interRegular">
              Location advantage:-
            </h2>
            <Select
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
      </div>
    </div>
  );
};

export default ResidentialFlatForm;
