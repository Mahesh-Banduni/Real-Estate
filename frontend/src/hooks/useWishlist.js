import axiosInstance from "../utils/axiosInstance";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { handleFetchWishlistProperties } from "../store/slice";
import { useNavigate } from "react-router-dom";

const useWishlist = () => {
  const token = localStorage.getItem("token");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [property, setProperty] = useState(" ");
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
  const [localities, setLocalities] = useState([]);
  const [ownedProperty, setOwnedProperty] = useState({
    city: "",
  });

  const handleChangePropertyType = (name) => {
    setProperty(name);
  };
  //========================= Fetch owned properties ========================
  const fetchWishlistProperties = async () => {
    if (!token) {
      navigate("/signin");
    } else {
      setMessage("");
      try {
        setIsLoading(true);
        const response = await axiosInstance.get(`/favorite-properties`);

        if (response.statusText === "OK") {
          dispatch(handleFetchWishlistProperties(response?.data?.data));
        }
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setMessage(
          error.response?.data?.error || "Failed to fetch properties."
        );
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchWishlistProperties();
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
    if (ownedProperty.city) {
      try {
        const response = await axiosInstance.get(`/cities-localities`, {
          params: {
            city: ownedProperty.city,
          },
        });
        if (response?.statusText === "Created") {
          setCities(response?.data?.data);
        }
      } catch (error) {
        console.log(`City search error: ${error.message}`);
      }
    }
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      handleSearchCity();
    }, 500);
    return () => {
      clearTimeout(timeout);
    };
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
  };

  const markFavoriteProperty = async (event, id) => {
    event.stopPropagation();
    event.preventDefault();
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const response = await axiosInstance.post(`/favorite-properties`, {
          propertyId: id,
        });
        if (response.statusText === "OK") {
          fetchWishlistProperties();
        }
      } catch (error) {
        console.log(error);
        alert(`${error?.response?.data?.error}`);
      }
    } else {
      navigate("/signin");
    }
  };
  const unMarkFavoriteProperty = async (event, id) => {
    event.stopPropagation();
    event.preventDefault();
    try {
      const response = await axiosInstance.delete(`/favorite-properties`, {
        data: {
          propertyId: id,
        },
      });

      if (response.statusText === "OK") {
        fetchWishlistProperties();
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
      alert(`${error?.response?.data?.error}`);
    }
  };

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
    fetchWishlistProperties,
    markFavoriteProperty,
    unMarkFavoriteProperty,
  };
};
export default useWishlist;
