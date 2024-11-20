import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
  Loader,
} from "../components";

const ListProperty = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/signin"); // Redirect to login page if token is not present
    }
  }, [navigate]);
  const {
    handelChangeFormInputFields,
    formInputValue,
    cities,
    localities,
    setFormInputValue,
    handelPostProperty,
    loading,
  } = usePostProperty();

  console.log(loading);

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
          {/* ============= property detail ============== */}
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

          <div className="w-1/3 flex">
            <SellPropertyTypeForm
              formInputValue={formInputValue}
              onPropertyTypeChange={handelChangeFormInputFields}
            />
          </div>

          {/*-------------------------you can change the form from here------------------------- */}

          {formInputValue.propertyType === "Residential Flat/Apartment" && (
            <ResidentialFlatForm
              formInputValue={formInputValue}
              handelChangeFormInputFields={handelChangeFormInputFields}
              cities={cities}
              localities={localities}
              setFormInputValue={setFormInputValue}
            />
          )}
          {formInputValue.propertyType === "Residential Plot/Land" && (
            <ResidentialLandForm
              formInputValue={formInputValue}
              handelChangeFormInputFields={handelChangeFormInputFields}
              cities={cities}
              localities={localities}
              setFormInputValue={setFormInputValue}
            />
          )}
          {formInputValue.propertyType === "Residential House" && (
            <ResidentialHouseForm
              formInputValue={formInputValue}
              handelChangeFormInputFields={handelChangeFormInputFields}
              cities={cities}
              localities={localities}
              setFormInputValue={setFormInputValue}
            />
          )}

          {formInputValue?.propertyType === "Commercial Office Space" && (
            <CommercialOfficeSpaceForm
              formInputValue={formInputValue}
              handelChangeFormInputFields={handelChangeFormInputFields}
              cities={cities}
              localities={localities}
              setFormInputValue={setFormInputValue}
            />
          )}
          {formInputValue?.propertyType === "Commercial Plot/Land" && (
            <CommercialPlotForm
              formInputValue={formInputValue}
              handelChangeFormInputFields={handelChangeFormInputFields}
              cities={cities}
              localities={localities}
              setFormInputValue={setFormInputValue}
            />
          )}
          {formInputValue?.propertyType === "Commercial Shop" && (
            <CommercialShopForm
              formInputValue={formInputValue}
              handelChangeFormInputFields={handelChangeFormInputFields}
              cities={cities}
              localities={localities}
              setFormInputValue={setFormInputValue}
            />
          )}
          {formInputValue?.propertyType === "Commercial Showroom" && (
            <CommercialShowroomForm
              formInputValue={formInputValue}
              handelChangeFormInputFields={handelChangeFormInputFields}
              cities={cities}
              localities={localities}
              setFormInputValue={setFormInputValue}
            />
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
              className="border-2 rounded-md p-2 w-1/3 outline-primary-color border-primary-color"
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

          {loading ? (
            <h1>Property is posting...</h1>
          ) : (
            <Button
              type={"submit"}
              className={
                "flex gap-1 items-center px-28 py-5 bg-green-btn text-white font-interMedium w-fit capitalize rounded "
              }
            >
              post your property {"->"}
            </Button>
          )}
        </form>
      </div>
    </div>
  );
};

export default ListProperty;
