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
    fromCity: "",
    toCity: "",
    projectSocietyName: "",
    projectMarketName: "",
    buildingComplexName: "",
    locality: "",
    fromLocality: "",
    toLOcality: "",
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
  const [fromCities, setFromCities] = useState([]);
  const [toCities, setToCities] = useState([]);
  const [localities, setLocalities] = useState([]);
  const [showCities, setShowCities] = useState(false);
  const [showFromCity, setShowFromCity] = useState(false);
  const [showToCity, setShowToCity] = useState(false);
  const [showLocalities, setShowLocalities] = useState(false);
  const [formInputValue, setFormInputValue] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  //==================filled the form input field handler ==================

  const handelChangeFormInputFields = (event) => {
    const { name, value } = event.target;
    console.log(name);
    console.log(value);

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
      boundaryWall,
      buildingComplexName,
      coveredArea,
      facingRoadWidth,
      gatedColony,
      idealForBusinesses,
      lengthDimension,
      mainRoadFacing,
      openSides,
      personalWashroom,
      plotArea,
      projectMarketName,
      projectSocietyName,
      totalFloor,
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
          alert("Property is posted successfully");
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
      case formInputValue.propertyType === "Residential Flat/Apartment":
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
          !superArea ||
          !possessionStatus
        ) {
          alert("Please enter all the required fields.");
          return;
        } else {
          console.log("this is tyring to posting property");

          postPropertyHandler();
        }
        break;
      case formInputValue.propertyType === "Residential Plot/Land":
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
          !expectedPrice
        ) {
          console.log(`Residential Plot/Land => entered`);
          alert(`Please filled all the fields`);
        } else {
          postPropertyHandler();
        }
        break;
      case formInputValue.propertyType === "Residential House":
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
          !plotArea ||
          !superArea ||
          !possessionStatus
        ) {
          alert(`Please filled all the fields`);
        } else {
          postPropertyHandler();
        }
        break;
      case formInputValue.propertyType === "Commercial Office Space":
        if (
          !city ||
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
      case formInputValue.propertyType === "Commercial Shop":
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
      case formInputValue.propertyType === "Commercial Showroom":
        if (
          !city ||
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
      case formInputValue.propertyType === "Commercial Plot/Land":
        if (
          !city ||
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

  //================throttling functionality on fromCites search============================

  const handelSearchFromCity = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/cities-localities?city=${formInputValue?.fromCity}`
      );
      if (response?.statusText === "Created") {
        let cities = response?.data?.data?.map((item) => {
          return item.name;
        });
        setFromCities(cities);
      }
    } catch (error) {
      console.log(`city search error: ${error?.message}`);
    }
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      handelSearchFromCity();
    }, 500);

    return () => {
      clearTimeout(timeOut);
    };
  }, [formInputValue.fromCity]);

  //================throttling functionality on toCites search============================
  const handelSearchToCity = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/cities-localities?city=${formInputValue?.toCity}`
      );
      if (response?.statusText === "Created") {
        let cities = response?.data?.data?.map((item) => {
          return item.name;
        });
        setFromCities(cities);
      }
    } catch (error) {
      console.log(`city search error: ${error?.message}`);
    }
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      handelSearchToCity();
    }, 500);

    return () => {
      clearTimeout(timeOut);
    };
  }, [formInputValue.toCity]);

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
