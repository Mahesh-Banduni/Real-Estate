import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";

const useHome = () => {
  const navigate = useNavigate();
  const initialState = {
    city: "",
    locality: "",
    propertyType: "",
    minPrice: "",
    maxPrice: "",
  };
  const [filters, setFilters] = useState(initialState);
  const [cities, setCities] = useState([]);
  const [filterCity, setFilterCity] = useState({
    city: "",
  });

  const [auctionProperty, setAuctionProperty] = useState([]);

  const handelChangeInputField = (event) => {
    const { name, value } = event.target;
    setFilterCity((preValue) => {
      return {
        ...preValue,
        [name]: [value],
      };
    });
  };
  const handelSelectCity = (city) => {
    setFilterCity({
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

  // -----------------throttling functionality on cites search-------------------------------

  const handelSearchCity = async () => {
    if (filterCity.city) {
      try {
        const response = await axiosInstance.get(
          `/cities-localities?city=${filterCity?.city}`
        );
        if (response?.statusText === "Created") {
          setCities(response?.data?.data);
        }
      } catch (error) {
        console.log(`city search error: ${error?.message}`);
      }
    }
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      handelSearchCity();
    }, 500);

    return () => {
      clearTimeout(timeOut);
    };
  }, [filterCity?.city]);

  useEffect(() => {
    const getAuctionProperties = async () => {
      try {
        const response = await axiosInstance.get("/all-auction-properties");
        if (response?.statusText === "OK") {
          setAuctionProperty(response?.data?.data);
        }
      } catch (error) {
        console.log(error);
        alert(error.message);
      }
    };
    getAuctionProperties();
  }, []);

  const sendQueryAuctionProperty = async (id) => {
    let token = localStorage.getItem("token");
    if (!token) {
      navigator("/signin");
    } else {
      try {
        const response = await axiosInstance.post("/auction-property-inquiry", {
          propertyId: id,
        });

        if (response.statusText === "Created") {
          alert(response?.data?.data?.message);
        }
      } catch (error) {
        alert(error?.message);
      }
    }
  };

  return {
    handelChangeInputField,
    filterCity,
    cities,
    handelSelectCity,
    filters,
    handelChangeDropdown,
    auctionProperty,
    sendQueryAuctionProperty,
  };
};

export default useHome;
