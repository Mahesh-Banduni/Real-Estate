import axios from "axios";
import { useEffect, useState } from "react";
import { handelFetchAllProperties } from "../store/slice";
import { useDispatch } from "react-redux";

const useProperties = () => {
  const dispatch = useDispatch();
  const [property, setProperty] = useState("Sale");
  const [allProperty, setAllProperty] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [filters, setFilters] = useState({
    city: "",
    locality: "",
    propertyType: "",
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

  const fetchProperty = async () => {
    setMessage("");
    try {
      setIsLoading(true);
      let response = await axios.get(
        `http://localhost:8080/search-properties?propertyPurpose=${property}&propertyType=${filters.propertyType}&city=${filters.city}&locality=${filters.locality}`
      );
      if (response.statusText === "OK") {
        setAllProperty(response?.data?.data);
        dispatch(handelFetchAllProperties(response?.data?.data));
      }
      setIsLoading(false);
    } catch (error) {
      alert(error.message);
    }
  };

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
      if (calling) {
        handelSearchCity();
      }
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
  const handelChangeDropdown = (event) => {
    const { name, value } = event.target;
    setFilters((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  return {
    handelChangePropertyType,
    property,
    isLoading,
    allProperty,
    handelChangeInputField,
    filterProperties,
    cities,
    handelSelectCity,
    localities,
    filters,
    handelChangeDropdown,
  };
};

export default useProperties;
