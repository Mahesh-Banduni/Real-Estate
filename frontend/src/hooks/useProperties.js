import axios from "axios";
import { useCallback, useEffect, useState } from "react";

import { handelFetchAllProperties, handelUpdateFilters } from "../store/slice";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const useProperties = () => {
  const propertyFilter = useSelector((store) => store.authReducer.filters);
  const dispatch = useDispatch();

  //========================== states ======================
  const [property, setProperty] = useState("Sale");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [localities, setLocalities] = useState([]);
  const [cities, setCities] = useState([]);
  const [fromCities, setFromCities] = useState([]);
  const [filterCity, setFilterCity] = useState({
    city: "",
  });
  const [filterFromCity, setFilterFromCity] = useState({
    fromCity: "",
  });
  const [toggle, setToggle] = useState(false);

  //============================= on changing property purpose ======================================

  const handelChangePropertyType = (name) => {
    setProperty(name);
    dispatch(handelUpdateFilters({ name: "propertyPurpose", value: name }));
  };

  //=========================fetch all properties========================

  const fetchProperty = useCallback(
    async (resetFilters = false) => {
      setMessage("");
      try {
        setIsLoading(true);
        // let response = await axios.get(
        //   `http://localhost:8080/search-properties?propertyPurpose=${property}&propertyType=${filters.propertyType}&city=${filters.city}&locality=${filters.locality}&minPrice=${filters.minPrice}&maxPrice=${filters.maxPrice}`
        // );

        const response = await axios.get(
          `http://localhost:8080/search-properties`,
          {
            params: resetFilters
              ? {} // Fetch all properties
              : {
                  propertyPurpose: propertyFilter.propertyPurpose,
                  city: propertyFilter?.city,
                  locality: propertyFilter?.locality,
                  propertyType: propertyFilter?.propertyType,
                  minPrice: propertyFilter?.minPrice,
                  maxPrice: propertyFilter?.maxPrice,
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
      } finally {
        setIsLoading(false);
      }
    },
    [propertyFilter]
  );

  useEffect(() => {
    fetchProperty();
  }, [propertyFilter]);
  //=============================handelChangeCityInputField===========================

  const handelChangeInputField = (event) => {
    const { name, value } = event.target;
    setFilterCity((preValue) => {
      return {
        ...preValue,
        [name]: [value],
      };
    });
  };
  const handelChangeFromCityInputField = (event) => {
    const { name, value } = event.target;
    console.log(name);
    console.log(value);

    setFilterFromCity((preValue) => {
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
        `http://localhost:8080/cities-localities?city=${filterCity?.city}`
      );
      console.log(response);

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

  // -----------------throttling functionality on from cites search-------------------------------

  const handelSearchFromCity = async () => {
    console.log("clicked");

    try {
      const response = await axios.get(
        `http://localhost:8080/cities-localities?city=${filterFromCity?.fromCity}`
      );
      console.log(response);

      if (response?.statusText === "Created") {
        setFromCities(response?.data?.data);
      }
    } catch (error) {
      console.log(`city search error: ${error?.message}`);
    }
  };

  useEffect(() => {
    console.log("useEffect");

    const timeOut = setTimeout(() => {
      handelSearchFromCity();
    }, 500);

    return () => {
      clearTimeout(timeOut);
    };
  }, [filterFromCity.fromCity]);

  //----------------------Select City handel----------------------------------

  const handelSelectCity = (city) => {
    dispatch(handelUpdateFilters({ name: "city", value: city.name }));
    setLocalities(city?.localities);
    setFilterCity({
      city: city.name,
    });
    setCities([]);
  };
  const handelSelectFromCity = (city) => {
    console.log("select City");

    dispatch(handelUpdateFilters({ name: "fromCity", value: city.name }));

    setFilterFromCity({
      fromCity: city.name,
    });
    setFromCities([]);
  };

  // ---------------------------handel select city--------------------------
  const handelChangeDropdown = (event) => {
    const { name, value } = event.target;
    dispatch(handelUpdateFilters({ name: name, value: value }));
  };

  //-----------------------method for cities property--------------------------

  return {
    handelChangePropertyType,
    property,
    isLoading,
    handelChangeInputField,
    filterCity,
    cities,
    handelSelectCity,
    localities,
    handelChangeDropdown,
    message,
    propertyFilter,
    handelSelectFromCity,
    handelChangeFromCityInputField,
    fromCities,
    filterFromCity,
  };
};

export default useProperties;

//============================================= mahesh work ========================================================================

// import axios from "axios";
// import { useCallback, useEffect, useState } from "react";
// import { handelFetchAllProperties, handleFetchAllSearchProperties } from "../store/slice";
// import { useDispatch } from "react-redux";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";

// const useProperties = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [property, setProperty] = useState("Sale");
//   const [isLoading, setIsLoading] = useState(false);
//   const [message, setMessage] = useState("");
//   const [filters, setFilters] = useState({
//     city: "",
//     locality: "",
//     propertyType: "",
//     minPrice: "",
//     maxPrice: "",
//   }); // Used for automatic fetch
//   //const [submitFilters, setSubmitFilters] = useState(filters); // Used for form submission

//   const [cities, setCities] = useState([]);
//   const [localities, setLocalities] = useState([]);
//   const [formErrorMessage, setFormErrorMessage] = useState("");
//   const [formLoading, setFormLoading] = useState(false);

//   const {
//     handleSubmit,
//     register,
//     formState: { errors },
//   } = useForm();

//   // Change property purpose (e.g., Sale, Rent)
//   const handelChangePropertyType = (name) => setProperty(name);

//   // Fetch properties based on filters
//   const fetchProperty = useCallback(async () => {
//     setMessage("");
//     setIsLoading(true);

//     try {
//       const response = await axios.get(`http://localhost:8080/search-properties`, {
//         params: {
//           propertyPurpose: property,
//           propertyType: filters.propertyType,
//           city: filters.city,
//           locality: filters.locality,
//           minPrice: filters.minPrice,
//           maxPrice: filters.maxPrice,
//         },
//       });

//       if (response.statusText === "OK") {
//         dispatch(handelFetchAllProperties(response.data.data));
//       }
//     } catch (error) {
//       console.error("Fetch Property Error:", error);
//       setMessage(error?.response?.data?.error || "An error occurred.");
//     } finally {
//       setIsLoading(false);
//     }
//   }, [property, filters, dispatch]);

//   // Trigger fetchProperty on filters or property change
//   useEffect(() => {
//     fetchProperty();
//   }, [filters, property, fetchProperty]);

//   // Handle dropdown changes
//   const handelChangeDropdown = (event) => {
//     const { name, value } = event.target;

//     if (name === "priceRange") {
//       const [minPrice, maxPrice] = value.split("-");
//       setFilters((prev) => ({
//         ...prev,
//         minPrice: minPrice || "",
//         maxPrice: maxPrice || "",
//       }));
//     } else {
//       setFilters((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   // Handle city selection
//   const handelSelectCity = (city) => {
//     setLocalities(city.localities);
//     setFilters((prev) => ({ ...prev, city: city.name }));
//     setCities([]);
//   };

//   // Handle form submission
//   const submitForm = async () => {
//     setFormErrorMessage("");
//     setFormLoading(true);

//     try {
//       // Use submitFilters instead of filters for form submission
//       const response = await axios.get(
//         `http://localhost:8080/search-properties`,
//         {
//           params: {
//             propertyPurpose: "Sale",
//             propertyType: filters.propertyType,
//             city: filters.city,
//             minPrice: filters.minPrice,
//             maxPrice: filters.maxPrice,
//           },
//         }
//       );

//       if (response.statusText === "OK") {
//         dispatch(handleFetchAllSearchProperties(response.data.data));
//         navigate("/properties");
//       }
//     } catch (error) {
//       console.error("Form Submission Error:", error);
//       setFormErrorMessage(error.message || "An error occurred.");
//     } finally {
//       setFormLoading(false);
//     }
//   };

//   return {
//     handelChangePropertyType,
//     property,
//     isLoading,
//     filters,
//     //submitFilters,
//     handelChangeDropdown,
//     message,
//     cities,
//     localities,
//     handelSelectCity,
//     submitForm,
//     formLoading,
//     formErrorMessage,
//     handleSubmit,
//     register,
//     errors,
//     //setSubmitFilters, // Allow manual updates to submitFilters if needed
//   };
// };

// export default useProperties;
