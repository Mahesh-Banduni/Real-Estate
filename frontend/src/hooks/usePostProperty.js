import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { handelRemoveToken } from "../store/slice";

const usePostProperty = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialState = {
    propertyPurpose: "sale",
    propertyType: "Residential Flat/Apartment",
    numberOfFlatsInSociety: "",
    city: "",
    projectSocietyName: "",
    projectMarketName: "",
    buildingComplexName: "",
    locality: [],
    address: "",
    landZone: "",
    idealForBusinesses: [],
    nearbyBusinesses: [],
    floorsAllowed: "",
    facingRoadWidth: "",
    facingRoadWidthUnit: "Meters",
    personalWashroom: "",
    pantryCafeteria: "",
    cornerShop: false,
    mainRoadFacing: "",
    anyConstructionDone: false,
    BHKType: "",
    bedrooms: "",
    balconies: "",
    floorNumber: "",
    totalFloor: "",
    furnished: "",
    bathrooms: "",
    openSides: "",
    plotArea: "",
    plotAreaUnit: "Sq-ft",
    carpetArea: "",
    carpetAreaUnit: "Sq-ft",
    superArea: "",
    superAreaUnit: "Sq-ft",
    coveredArea: "",
    coveredAreaUnit: "Sq-ft",
    lengthDimension: "",
    widthDimension: "",
    dimensionUnit: "ft",
    cornerPlot: "",
    entranceWidth: "",
    entranceWidthUnit: "",
    ownership: "",
    transactionType: "",
    possessionStatus: "",
    currentlyLeasedOut: false,
    bookingAmount: "",
    priceNegotiable: false,
    boundaryWall: "",
    gatedColony: "",
    expectedPrice: "",
    residentialAmenities: "",
    commercialAmenities: [],
    landAmenities: [],
    locationAdvantages: "",
    overlooking: "",
    facing: "",
    description: "",
    images: [],
  };

  //  ======================stats========================
  const [cities, setCities] = useState([]);
  const [localities, setLocalities] = useState([]);
  const [showCities, setShowCities] = useState(false);
  const [showLocalities, setShowLocalities] = useState(false);
  const [formInputValue, setFormInputValue] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  //==================filled the form input field handler ==================

  const handelChangeFormInputFields = (event) => {
    const { name, value } = event.target;

    if (name === "images") {
      setFormInputValue((preValue) => {
        return {
          ...preValue,
          [name]: [...event.target.files],
        };
      });
    } else {
      setFormInputValue((preValue) => {
        return {
          ...preValue,
          [name]: value,
        };
      });
    }
  };

  //===========================post property handler===========================

  const handelPostProperty = async (e) => {
    e.preventDefault();

    const {
      address,
      balconies,
      bathrooms,
      bedrooms,
      bookingAmount,
      carpetArea,
      city,
      expectedPrice,
      floorNumber,
      furnished,
      locality,
      possessionStatus,
      superArea,
      BHKType,
      anyConstructionDone,
      boundaryWall,
      buildingComplexName,
      carpetAreaUnit,
      commercialAmenities,
      cornerPlot,
      cornerShop,
      coveredArea,
      coveredAreaUnit,
      currentlyLeasedOut,
      description,
      dimensionUnit,
      entranceWidth,
      entranceWidthUnit,
      facing,
      facingRoadWidth,
      facingRoadWidthUnit,
      floorsAllowed,
      gatedColony,
      idealForBusinesses,
      images,
      landAmenities,
      landZone,
      lengthDimension,
      locationAdvantages,
      mainRoadFacing,
      nearbyBusinesses,
      numberOfFlatsInSociety,
      openSides,
      overlooking,
      ownership,
      pantryCafeteria,
      personalWashroom,
      plotArea,
      plotAreaUnit,
      priceNegotiable,
      projectMarketName,
      projectSocietyName,
      propertyPurpose,
      propertyType,
      residentialAmenities,
      superAreaUnit,
      totalFloor,
      transactionType,
      widthDimension,
    } = formInputValue;
    // Create FormData object
    const formData = new FormData();

    // Append each field to the FormData object
    for (const key in formInputValue) {
      if (key === "images") {
        // If the field is images, append each file separately
        formInputValue?.images?.forEach((file) => {
          formData.append("images", file);
        });
      } else if (Array.isArray(formInputValue[key])) {
        // For array fields, handle them appropriately (e.g., 'locality' and 'amenities')
        formInputValue[key].forEach((item) => {
          formData.append(`${key}[]`, item.value); // Append each array item separately
        });
      } else {
        // For regular fields, just append the value
        formData.append(key, formInputValue[key]);
      }
    }

    //=================get the token from localStorage=====================

    let token = JSON.parse(localStorage.getItem("token"));

    const postPropertyHandler = async () => {
      setLoading(true);
      try {
        const response = await axios.post(
          "http://localhost:8080/properties",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response);
        if (response.statusText === "Created") {
          setMessage("Property is posted successfully");
          setFormInputValue(initialState);
        }
      } catch (error) {
        if (error.status === 401) {
          alert(`Token Is Invalid Or Expired`);
          dispatch(handelRemoveToken());
          localStorage.removeItem("token");
          navigate("/signin");
        }
        setMessage("Property is not Posted something error occurs");
        console.log(`Error on posting property: ${error.message}`);
      }
      setLoading(false);
    };
    //========================switch statement======================
    switch (true) {
      case formInputValue?.propertyPurpose === "sale" &&
        formInputValue.propertyType === "Residential Flat/Apartment":
        if (
          !address ||
          !balconies ||
          !bathrooms ||
          !bedrooms ||
          !bookingAmount ||
          !carpetArea ||
          !city ||
          !expectedPrice ||
          !floorNumber ||
          !furnished ||
          !locality ||
          !superArea ||
          !possessionStatus
        ) {
          alert("Please enter all the required fields.");
          return;
        } else {
          postPropertyHandler();
        }
        break;
      case formInputValue?.propertyPurpose === "sale" &&
        formInputValue.propertyType === "Residential Plot/Land":
        if (
          !address ||
          !projectSocietyName ||
          !openSides ||
          !bookingAmount ||
          !facingRoadWidth ||
          !boundaryWall ||
          !gatedColony ||
          !plotArea ||
          !lengthDimension ||
          !widthDimension ||
          !city ||
          !locality ||
          !expectedPrice
        ) {
          console.log(`Residential Plot/Land => entered`);
          alert(`Please filled all the fields`);
        } else {
          postPropertyHandler();
        }
        break;
      case formInputValue?.propertyPurpose === "sale" &&
        formInputValue.propertyType === "Residential House":
        if (
          !address ||
          !balconies ||
          !bathrooms ||
          !bedrooms ||
          !bookingAmount ||
          !carpetArea ||
          !city ||
          !expectedPrice ||
          !floorNumber ||
          !furnished ||
          !locality ||
          !plotArea ||
          !superArea ||
          !possessionStatus
        ) {
          alert(`Please filled all the fields`);
        } else {
          postPropertyHandler();
        }
        break;
      case formInputValue?.propertyPurpose === "sale" &&
        formInputValue.propertyType === "Commercial Office Space":
        if (
          !city ||
          !locality ||
          !address ||
          !buildingComplexName ||
          !idealForBusinesses ||
          !floorNumber ||
          !furnished ||
          !personalWashroom ||
          !bookingAmount ||
          !carpetArea ||
          !superArea ||
          !expectedPrice ||
          !possessionStatus
        ) {
          alert(`Please filled all the fields`);
        } else {
          postPropertyHandler();
        }
        break;
      case formInputValue?.propertyPurpose === "sale" &&
        formInputValue.propertyType === "Commercial Shop":
        console.log(formInputValue);

        if (
          !city ||
          !address ||
          !projectMarketName ||
          !floorNumber ||
          !totalFloor ||
          !furnished ||
          !mainRoadFacing ||
          !personalWashroom ||
          !coveredArea ||
          !carpetArea ||
          !possessionStatus ||
          !expectedPrice ||
          !bookingAmount
        ) {
          alert(`Please filled all the fields`);
        } else {
          postPropertyHandler();
        }
        break;
      case formInputValue?.propertyPurpose === "sale" &&
        formInputValue.propertyType === "Commercial Showroom":
        if (
          !city ||
          !locality ||
          !projectMarketName ||
          !address ||
          !floorNumber ||
          !totalFloor ||
          !furnished ||
          !mainRoadFacing ||
          !personalWashroom ||
          !possessionStatus ||
          !expectedPrice ||
          !bookingAmount
        ) {
          alert(`Please filled all the fields`);
        } else {
          postPropertyHandler();
        }
        break;
      case formInputValue?.propertyPurpose === "sale" &&
        formInputValue.propertyType === "Commercial Plot/Land":
        if (
          !city ||
          !locality ||
          !projectSocietyName ||
          !address ||
          !openSides ||
          !facingRoadWidth ||
          !boundaryWall ||
          !plotArea ||
          !lengthDimension ||
          !widthDimension ||
          !expectedPrice ||
          !bookingAmount
        ) {
          alert(`Please filled all the fields`);
        } else {
          postPropertyHandler();
        }
        break;
      default:
        break;
    }
  };

  //================throttling functionality on cites search============================

  const handelSearchCity = async () => {
    console.log(formInputValue?.city);

    try {
      const response = await axios.get(
        `http://localhost:8080/cities-localities?city=${formInputValue?.city}`
      );
      if (response?.statusText === "Created") {
        let cities = response?.data?.data?.map((item) => {
          return item.name;
        });
        setCities(cities);
      }
    } catch (error) {
      console.log(`city search error: ${error?.message}`);
    }
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      handelSearchCity();
    }, 500);

    return () => {
      clearTimeout(timeOut);
    };
  }, [formInputValue.city]);

  //===============throttling functionality on locality search===============================

  const handelSearchLocality = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/cities-localities?city=${formInputValue?.city}&locality=${formInputValue.locality}`
      );

      if (response?.statusText === "Created") {
        let localities = response?.data?.data[0]?.localities?.map((item) => {
          return item.name;
        });
        setLocalities(localities);
      }
    } catch (error) {
      console.log(`locality search error: ${error?.message}`);
    }
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      handelSearchLocality();
    }, 500);

    return () => {
      clearTimeout(timeOut);
    };
  }, [formInputValue.locality]);

  //===========================handel Toggle cities dropdown==================

  const handelToggleCityDropdown = () => {
    setShowCities(!showCities);
  };

  const handelToggleLocalityDropdown = () => {
    setShowLocalities(!showLocalities);
  };

  return {
    handelChangeFormInputFields,
    formInputValue,
    cities,
    localities,
    setFormInputValue,
    showCities,
    showLocalities,
    setShowLocalities,
    handelToggleCityDropdown,
    handelToggleLocalityDropdown,
    handelPostProperty,
    loading,
    message,
  };
};

export default usePostProperty;
