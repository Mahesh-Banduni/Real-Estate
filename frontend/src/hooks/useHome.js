import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
    try {
      const response = await axios.get(
        `http://localhost:8080/cities-localities?city=${filterCity?.city}`
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
  }, [filterCity?.city]);

  const submitForm = (event) => {
    event.preventDefault();
    navigate("/properties", { state: { filters } });
  };

  console.log(filters);

  return {
    handelChangeInputField,
    filterCity,
    cities,
    handelSelectCity,
    filters,
    handelChangeDropdown,
    submitForm,
  };
};

export default useHome;
