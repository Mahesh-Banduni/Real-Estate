import axios from "axios";
import { useEffect, useState } from "react";
import { handelFetchAllProperties } from "../store/slice";
import { useDispatch } from "react-redux";

const useProperties = () => {
  const dispatch = useDispatch();
  const [property, setProperty] = useState("Buy");
  const [allProperty, setAllProperty] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handelChangePropertyType = (name) => {
    setProperty(name);
  };

  const fetchProperty = async () => {
    setMessage("");
    try {
      setIsLoading(true);
      let response;
      if (property === "Buy") {
        response = await axios.get(
          `http://localhost:8080/search-properties?propertyPurpose=Sale`
        );
        if (response.statusText === "OK") {
          setAllProperty(response?.data?.data);
        }
        setIsLoading(false);
      }
      if (property === "exchange property") {
        response = await axios.get(
          `http://localhost:8080/search-properties?propertyPurpose=Exchange`
        );
        if (response.statusText === "OK") {
          setAllProperty(response?.data?.data);
        }
        setIsLoading(false);
      }
      if (property === "partnership property") {
        response = await axios.get(
          `http://localhost:8080/search-properties?propertyPurpose=Partnership`
        );
        if (response.statusText === "Ok") {
          setAllProperty(response?.data?.data);
        }
        setIsLoading(false);
      }
      console.log(response);
      console.log(response?.data?.data);
    } catch (error) {
      alert(error.message);
    }
  };
  useEffect(() => {
    fetchProperty();
  }, [property]);
  return {
    handelChangePropertyType,
    property,
    isLoading,
    allProperty,
  };
};

export default useProperties;
