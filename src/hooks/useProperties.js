import axios from "axios";
import { useEffect, useState } from "react";
import { handelFetchAllProperties } from "../store/slice";
import { useDispatch } from "react-redux";

const useProperties = () => {
  const dispatch = useDispatch();
  const [property, setProperty] = useState("Buy");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handelChangePropertyType = (name) => {
    console.log(name);

    setProperty(name);
  };

  const fetchProperty = async () => {
    setMessage("");
    try {
      setIsLoading(true);
      let response;
      if (property === "Buy") {
        response = await axios.get(
          `http://localhost:8080/search-properties/Sale`
        );
        if (response.statusText === "Created") {
          dispatch(handelFetchAllProperties(response?.data));
        }
        setIsLoading(false);
      }
      if (property === "exchange property") {
        response = await axios.get(
          `http://localhost:8080/search-properties/Exchange%20Property`
        );
        if (response.statusText === "Created") {
          dispatch(handelFetchAllProperties(response?.data));
        }
        setIsLoading(false);
      }
      if (property === "partnership property") {
        response = await axios.get(
          `http://localhost:8080/search-properties/Partnership%20Property`
        );
        if (response.statusText === "Created") {
          dispatch(handelFetchAllProperties(response?.data));
        }
        setIsLoading(false);
      }
      console.log(response);
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
  };
};

export default useProperties;
