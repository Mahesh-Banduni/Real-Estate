import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { handelFetchAllProperties } from "../store/slice";
import { useDispatch } from "react-redux";

const useProperties = () => {
  const dispatch = useDispatch();
  const [property, setProperty] = useState("Sale");

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [filters, setFilters] = useState({
    city: "",
    locality: "",
    propertyType: "",
    minPrice: "",
    maxPrice: "",
  });
  const [cities, setCities] = useState([]);
  const [calling, setCalling] = useState(true);
  const [localities, setLocalities] = useState([]);
  const [filterProperties, setFilterProperties] = useState({
    city: "",
  });

  const handelChangePropertyType = (name) => {
    setProperty(name);
  };

  //=========================fetch all properties========================

  const fetchProperty = useCallback(async () => {
    console.log("City Filter:", filters.city);
    setMessage("");
    try {
      setIsLoading(true);
      // let response = await axios.get(
      //   `http://localhost:8080/search-properties?propertyPurpose=${property}&propertyType=${filters.propertyType}&city=${filters.city}&locality=${filters.locality}&minPrice=${filters.minPrice}&maxPrice=${filters.maxPrice}`
      // );
      const response = await axios.get(
        `http://localhost:8080/search-properties`,
        {
          params: {
            propertyPurpose: property,
            propertyType: filters.propertyType,
            city: filters.city,
            locality: filters.locality,
            minPrice: filters.minPrice,
            maxPrice: filters.maxPrice,
          },
        }
      );
      console.log(response);

      if (response.statusText === "OK") {
        dispatch(handelFetchAllProperties(response?.data?.data));
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      if (error.status === 404) {
        setMessage(error?.response?.data?.error);
      }
    }
  }, [property, filters]);

  useEffect(() => {
    fetchProperty();
  }, [property, filters]);

  //=============================handelChangeCityInputField===========================

  const handelChangeInputField = (event) => {
    const { name, value } = event.target;
    setFilterProperties((preValue) => {
      return {
        ...preValue,
        [name]: [value],
      };
    });
  };

  // -----------------throttling functionality on cites search-------------------------------

  const handelSearchCity = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/cities-localities?city=${filterProperties?.city}`
      );
      if (response?.statusText === "Created") {
        setCities(response?.data?.data);
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
  }, [filterProperties?.city]);

  //----------------------Select City handel----------------------------------

  const handelSelectCity = (city) => {
    setLocalities(city?.localities);
    setFilterProperties({
      city: city.name,
    });
    setFilters((preValue) => {
      return {
        ...preValue,
        city: city?.name,
      };
    });

    setCities([]);
  };

  //---------------------------handel select city--------------------------
  // const handelChangeDropdown = (event) => {
  //   const { name, value } = event.target;
  //   setFilters((preValue) => {
  //     return {
  //       ...preValue,
  //       [name]: value,
  //     };
  //   });
  // };

  // Handle dropdown changes including price range

  const handelChangeDropdown = (event) => {
    const { name, value } = event.target;
    if (name === "priceRange") {
      const [minPrice, maxPrice] = value.split("-");
      setFilters((prev) => ({
        ...prev,
        minPrice: minPrice || "",
        maxPrice: maxPrice || "",
      }));
    } else {
      setFilters((prev) => ({ ...prev, [name]: value }));
    }
  };

  //-----------------------method for cities property--------------------------
  const handelSetCity = (city) => {
    setFilters((prev) => ({
      ...prev,
      city: city,
    }));
    console.log(filters);
  };

  return {
    handelChangePropertyType,
    property,
    isLoading,
    handelChangeInputField,
    filterProperties,
    cities,
    handelSelectCity,
    localities,
    filters,
    handelChangeDropdown,
    message,
    handelSetCity,
  };
};

export default useProperties;
