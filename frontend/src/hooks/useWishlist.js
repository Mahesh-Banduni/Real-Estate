import axiosInstance from "../utils/axiosInstance";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { handleFetchWishlistProperties } from "../store/slice";
import { useLocation, useNavigate } from "react-router-dom";
import OwnedProperties from "../pages/OwnedProperties";

const useWishlist = () => {
    //const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [property, setProperty] = useState("Sale");
  const [ownedProperties, setOwnedProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [ownedFilter, setOwnedFilter] = useState({
    city: "",
    locality: "",
    propertyType: "",
    minPrice: "",
    maxPrice: "",
  });
  const [cities, setCities] = useState([]);
  const [calling, setCalling] = useState(true);
  const [localities, setLocalities] = useState([]);
  //const [searchCity, setSearchCity] = useState("");
  const [ownedProperty, setOwnedProperty] = useState({
    city: "",
  });

  const handleChangePropertyType = (name) => {
    setProperty(name);
  };

  //========================= Fetch owned properties ========================
  let token = localStorage.getItem("token");
  const fetchOwnedProperties = useCallback(async () => {
    setMessage("");
    try {
      setIsLoading(true);
      const response = await axiosInstance.get(
        `http://localhost:8080/favorite-properties/`,
        {
          params: {
            propertyPurpose: property,
            propertyType: ownedFilter.propertyType,
            city: ownedFilter.city,
            locality: ownedFilter.locality,
            minPrice: ownedFilter.minPrice,
            maxPrice: ownedFilter.maxPrice,
          },
        },
        {
            headers: {
              "Content-Type": "application/json",
              'Authorization': `Bearer ${token}`,
            },
          }
      );
      console.log(response);

      if (response.statusText === "OK") {
        //setOwnedProperties(response?.data?.data);
        dispatch(handleFetchWishlistProperties(response?.data?.data));
        //console.log("Second:"+response?.data?.data);
        navigate("/wishlist");
      }

      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setMessage(error.response?.data?.error || "Failed to fetch properties.");
      setIsLoading(false);
    }
  }, [property, ownedFilter]);

  useEffect(() => {
    fetchOwnedProperties();
  }, [property, ownedFilter]);

  //============================= Handle Input Field Changes ===========================
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setOwnedProperty((preValue) => {
      return {
        ...preValue,
        [name]: [value],
      };
    });
  };


  //============================= Search Cities with Throttling ===========================
  const handleSearchCity = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/cities-localities`,
        {
          params: { city: ownedProperty.city, localities: ownedProperty.locality },
        }
      );
      if (response?.statusText === "Created") {
        setCities(response?.data?.data);
      }
    } catch (error) {
      console.log(`City search error: ${error.message}`);
    }
  };

  useEffect(() => {
      const timeout = setTimeout(() => {
        handleSearchCity();
      }, 500);

      return () => {clearTimeout(timeout);
    }
  }, [ownedProperty?.city]);

  //============================= Handle City Selection ===========================
  
  const handleSelectCity = (city) => {
    setLocalities(city?.localities);
    setOwnedProperty({
      city: city.name,
    });
    setOwnedFilter((preValue) => {
      return {
        ...preValue,
        city: city?.name,
      };
    });

    setCities([]);
  };


  //============================= Handle Dropdown Change ===========================
  const handleDropdownChange = (event) => {
    const { name, value } = event.target;

    if (name === "priceRange") {
      const [minPrice, maxPrice] = value.split("-");
      setOwnedFilter((prev) => ({
        ...prev,
        minPrice: minPrice || "",
        maxPrice: maxPrice || "",
      }));
    } else {
      setOwnedFilter((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

   //-----------------------method for cities property--------------------------
   const handleSetCity = (city) => {
    setOwnedFilter((prev) => ({
      ...prev,
      city: city,
    }));
    console.log(ownedFilter);
  };

//   useEffect(() => {
//     let userData = JSON.parse(localStorage.getItem("token"));
//     setUser(userData);
//   }, []);
console.log(ownedProperty);

  return {
    handleChangePropertyType,
    property,
    isLoading,
    handleInputChange,
    ownedProperty,
    cities,
    handleSelectCity,
    localities,
    ownedFilter,
    handleDropdownChange,
    message,
    handleSetCity,
    ownedProperties
  };
};

export default useWishlist;
