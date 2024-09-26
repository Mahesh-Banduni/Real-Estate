import React from "react";

import { listProperty } from "../utils/icons";
import {
  Button,
  Heading,
  Paragraph,
  PropertyTypeForm,
  RadioInput,
  UploadPhotos,
  ResidentialLandForm,
  ResidentialFlatForm,
  ResidentialHouseForm,
  CommercialOfficeSpaceForm,
  CommercialPlotForm,
  CommercialShopForm,
  CommercialShowroomForm,
} from "../components";
import useListProperty from "../hooks/useListProperty";

const ListProperty = () => {
  const {
    propertyTypeState,
    onPropertyTypeChange,
    handelChangePropertyDetail,
  } = useListProperty();
  console.log(propertyTypeState.propertyDetail);

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
        <form className="mt-5 flex flex-col gap-5 " action="">
          <div className="flex flex-col gap-2">
            <Heading className="text-xl" text="property details" />
            <div className="flex items-center gap-2">
              <RadioInput
                value="sell"
                id="sellProperty"
                label={"sell"}
                name="propertyDetail"
                defaultChecked="true"
                handelChangePropertyDetail={handelChangePropertyDetail}
              />
              <RadioInput
                value="exchange"
                id="exchangeProperty"
                label={"exchange Property"}
                name="propertyDetail"
                handelChangePropertyDetail={handelChangePropertyDetail}
              />
              <RadioInput
                value="partnership"
                id="partnershipProperty"
                label={"Partnership Property"}
                name="propertyDetail"
                handelChangePropertyDetail={handelChangePropertyDetail}
              />
            </div>
          </div>

          {/* =====================you can change the form on the base of sell, exchange and partnership property========================*/}
          {propertyTypeState?.propertyDetail === "sell" ||
          propertyTypeState?.propertyDetail === "partnership" ? (
            <div className="w-[18rem] flex">
              <PropertyTypeForm
                propertyTypeState={propertyTypeState}
                onPropertyTypeChange={onPropertyTypeChange}
              />
            </div>
          ) : (
            " "
          )}

          {propertyTypeState?.propertyDetail === "exchange" ? " " : " "}

          {/*-------------------------you can change the form from here------------------------- */}

          {propertyTypeState.propertyType === "Residential Flat/Apartment" &&
          (propertyTypeState.propertyDetail === "sell" ||
            propertyTypeState.propertyDetail === "partnership") ? (
            <ResidentialFlatForm />
          ) : (
            ""
          )}
          {propertyTypeState.propertyType === "Residential Land" &&
          (propertyTypeState.propertyDetail === "sell" ||
            propertyTypeState.propertyDetail === "partnership") ? (
            <ResidentialLandForm />
          ) : (
            ""
          )}
          {propertyTypeState.propertyType === "Residential House" &&
          (propertyTypeState.propertyDetail === "sell" ||
            propertyTypeState.propertyDetail === "partnership") ? (
            <ResidentialHouseForm />
          ) : (
            ""
          )}

          {propertyTypeState?.propertyType === "Commercial Office Space" &&
          (propertyTypeState.propertyDetail === "sell" ||
            propertyTypeState.propertyDetail === "partnership") ? (
            <CommercialOfficeSpaceForm />
          ) : (
            ""
          )}
          {propertyTypeState?.propertyType === "Commercial Plot" &&
          (propertyTypeState.propertyDetail === "sell" ||
            propertyTypeState.propertyDetail === "partnership") ? (
            <CommercialPlotForm />
          ) : (
            ""
          )}
          {propertyTypeState?.propertyType === "Commercial Shop" &&
          (propertyTypeState.propertyDetail === "sell" ||
            propertyTypeState.propertyDetail === "partnership") ? (
            <CommercialShopForm />
          ) : (
            ""
          )}
          {propertyTypeState?.propertyType === "Commercial Showroom" &&
          (propertyTypeState.propertyDetail === "sell" ||
            propertyTypeState.propertyDetail === "partnership") ? (
            <CommercialShowroomForm />
          ) : (
            ""
          )}

          {/* upload photo */}
          <div className="flex flex-col gap-5 mt-5">
            <Heading
              className={"text-[2.25rem]"}
              text="Add photos of your property"
            />
            <UploadPhotos />
          </div>

          {/* post property form */}
          <Button
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
