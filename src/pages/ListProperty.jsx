import React from "react";

import { listProperty } from "../utils/icons";
import usePostProperty from "../hooks/usePostProperty";
import {
  Button,
  Heading,
  Paragraph,
  SellPropertyTypeForm,
  RadioInput,
  UploadPhotos,
  ResidentialLandForm,
  ResidentialFlatForm,
  ResidentialHouseForm,
  CommercialOfficeSpaceForm,
  CommercialPlotForm,
  CommercialShopForm,
  CommercialShowroomForm,
  ExchangePropertyTypesDropDown,
} from "../components";

const ListProperty = () => {
  const {
    handelChangeFormInputFields,
    formInputValue,
    cities,
    localities,
    setFormInputValue,
    handelPostProperty,
  } = usePostProperty();

  return (
    <div className="w-11/12 mx-auto">
      <div className="my-10 grid grid-rows-1 grid-cols-2">
        <div className="flex flex-col gap-2 justify-center">
          <Heading text="Post property Ad to sell your property online for Free!" />
          <Paragraph text={"Get Access to 4 Lakh + Buyers"} />
          <Paragraph text={"Sell Faster with Premium Service"} />
          <Paragraph text={"Get Expert Advice on Market Trends and Insights"} />
        </div>
        <div>
          <img src={listProperty} alt="list property logo" />
        </div>
      </div>
      <div>
        <Heading className="" text="Start posting your property" />
        <form
          onSubmit={handelPostProperty}
          className="mt-5 flex flex-col gap-5 "
          action=""
        >
          <div className="flex flex-col gap-2">
            <Heading className="text-xl" text="property details" />
            <div className="flex items-center gap-2">
              <RadioInput
                value="sale"
                id="sellProperty"
                label={"sell"}
                name="propertyPurpose"
                defaultChecked="true"
                handelChangePropertyDetail={handelChangeFormInputFields}
              />
              <RadioInput
                value="exchange"
                id="exchangeProperty"
                label={"exchange Property"}
                name="propertyPurpose"
                handelChangePropertyDetail={handelChangeFormInputFields}
              />
              <RadioInput
                value="partnership"
                id="partnershipProperty"
                label={"Partnership Property"}
                name="propertyPurpose"
                handelChangePropertyDetail={handelChangeFormInputFields}
              />
            </div>
          </div>

          {/* =====================you can change the form on the base of sell, exchange and partnership property========================*/}

          {formInputValue?.propertyPurpose === "sale" ||
          formInputValue?.propertyPurpose === "partnership" ? (
            <div className="w-[18rem] flex">
              <SellPropertyTypeForm
                formInputValue={formInputValue}
                onPropertyTypeChange={handelChangeFormInputFields}
              />
            </div>
          ) : (
            " "
          )}
          {/*==================== exchange property form ============= */}
          {formInputValue?.propertyPurpose === "exchange" ? (
            <ExchangePropertyTypesDropDown />
          ) : (
            " "
          )}

          {formInputValue?.propertyPurpose === "exchange" ? " " : " "}

          {/*-------------------------you can change the form from here------------------------- */}

          {formInputValue.propertyType === "Residential Flat/Appartment" &&
          (formInputValue?.propertyPurpose === "sale" ||
            formInputValue.propertyPurpose === "partnership") ? (
            <ResidentialFlatForm
              formInputValue={formInputValue}
              handelChangeFormInputFields={handelChangeFormInputFields}
              cities={cities}
              localities={localities}
              setFormInputValue={setFormInputValue}
            />
          ) : (
            ""
          )}
          {formInputValue.propertyType === "Residential Land" &&
          (formInputValue.propertyPurpose === "sale" ||
            formInputValue.propertyPurpose === "partnership") ? (
            <ResidentialLandForm
              formInputValue={formInputValue}
              handelChangeFormInputFields={handelChangeFormInputFields}
            />
          ) : (
            ""
          )}
          {formInputValue.propertyType === "Residential House" &&
          (formInputValue.propertyPurpose === "sale" ||
            formInputValue.propertyPurpose === "partnership") ? (
            <ResidentialHouseForm
              formInputValue={formInputValue}
              handelChangeFormInputFields={handelChangeFormInputFields}
            />
          ) : (
            ""
          )}

          {formInputValue?.propertyType === "Commercial Office Space" &&
          (formInputValue.propertyPurpose === "sale" ||
            formInputValue.propertyPurpose === "partnership") ? (
            <CommercialOfficeSpaceForm
              formInputValue={formInputValue}
              handelChangeFormInputFields={handelChangeFormInputFields}
            />
          ) : (
            ""
          )}
          {formInputValue?.propertyType === "Commercial Plot" &&
          (formInputValue.propertyPurpose === "sale" ||
            formInputValue.propertyPurpose === "partnership") ? (
            <CommercialPlotForm
              formInputValue={formInputValue}
              handelChangeFormInputFields={handelChangeFormInputFields}
            />
          ) : (
            ""
          )}
          {formInputValue?.propertyType === "Commercial Shop" &&
          (formInputValue.propertyPurpose === "sale" ||
            formInputValue.propertyPurpose === "partnership") ? (
            <CommercialShopForm
              formInputValue={formInputValue}
              handelChangeFormInputFields={handelChangeFormInputFields}
            />
          ) : (
            ""
          )}
          {formInputValue?.propertyType === "Commercial Showroom" &&
          (formInputValue.propertyPurpose === "sale" ||
            formInputValue.propertyPurpose === "partnership") ? (
            <CommercialShowroomForm
              formInputValue={formInputValue}
              handelChangeFormInputFields={handelChangeFormInputFields}
            />
          ) : (
            ""
          )}

          {/* property description */}

          <div className="mt-5">
            <Heading
              text="What makes your property unique"
              className="text-xl font-interRegular  "
            />
            <Paragraph
              text={"Adding details will increase your listing visibility"}
              className={"text-[1rem]"}
            />
            <textarea
              onChange={handelChangeFormInputFields}
              className="border-2 rounded-md border-border-color p-2 w-2/5 outline-primary-color"
              placeholder="Write your properties unique features like garden etc"
              name="description"
              value={formInputValue?.description}
              id=""
              cols="30"
              rows="6"
            ></textarea>
          </div>

          {/* upload photo */}
          <div className="flex flex-col gap-5 mt-5">
            <Heading
              className={"text-[2.25rem]"}
              text="Add photos of your property"
            />
            <UploadPhotos
              name={"images"}
              formInputValue={formInputValue}
              handelChangeFormInputFields={handelChangeFormInputFields}
            />
          </div>

          {/* post property form */}
          <Button
            type={"submit"}
            className={
              "flex gap-1 items-center px-28 py-5 bg-green-btn text-white font-interMedium w-fit capitalize rounded "
            }
          >
            post your property {"->"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ListProperty;
