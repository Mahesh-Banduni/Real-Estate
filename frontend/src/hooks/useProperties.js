// import axios from "axios";
// import { useCallback, useEffect, useState } from "react";
// import { handelFetchAllProperties, handleFetchAllSearchProperties } from "../store/slice";
// import { useDispatch } from "react-redux";

// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";

// const useProperties = () => {
//   const dispatch = useDispatch();
//   const [property, setProperty] = useState("Sale");

//   const [isLoading, setIsLoading] = useState(false);
//   const [message, setMessage] = useState("");
//   const [filters, setFilters] = useState({
//     city: "",
//     locality: "",
//     propertyType: "",
//     minPrice: "",
//     maxPrice: "",
//   });
//   const [cities, setCities] = useState([]);
//   const [calling, setCalling] = useState(true);
//   const [localities, setLocalities] = useState([]);
//   const [filterProperties, setFilterProperties] = useState({
//     city: "",
//   });
//   const [formErrorMessage, setFormErrorMessage] = useState("");
    
//     const navigate = useNavigate();
//     const [formLoading, setFormLoading] = useState(false);
//     const {
//       handleSubmit,
//       register,
//       formState: { errors },
//       reset,
//     } = useForm();

//   const handelChangePropertyType = (name) => {
//     setProperty(name);
//   };

//   //=========================fetch all properties========================

//   const fetchProperty = useCallback(async () => {
//     console.log("City Filter:", filters.city);
//     setMessage("");
//     try {
//       setIsLoading(true);
//       // let response = await axios.get(
//       //   `http://localhost:8080/search-properties?propertyPurpose=${property}&propertyType=${filters.propertyType}&city=${filters.city}&locality=${filters.locality}&minPrice=${filters.minPrice}&maxPrice=${filters.maxPrice}`
//       // );
//       const response = await axios.get(
//         `http://localhost:8080/search-properties`,
//         {
//           params: {
//             propertyPurpose: property,
//             propertyType: filters.propertyType,
//             city: filters.city,
//             locality: filters.locality,
//             minPrice: filters.minPrice,
//             maxPrice: filters.maxPrice,
//           },
//         }
//       );
//       console.log(response);

//       if (response.statusText === "OK") {
//         dispatch(handelFetchAllProperties(response?.data?.data));
//       }
//       setIsLoading(false);
//     } catch (error) {
//       console.log(error);
//       if (error.status === 404) {
//         setMessage(error?.response?.data?.error);
//       }
//     }
//   }, [property, filters]);

//   useEffect(() => {
//     fetchProperty();
//   }, [property, filters]);

//   //=============================handelChangeCityInputField===========================

//   const handelChangeInputField = (event) => {
//     const { name, value } = event.target;
//     setFilterProperties((preValue) => {
//       return {
//         ...preValue,
//         [name]: [value],
//       };
//     });
//   };

//   // -----------------throttling functionality on cites search-------------------------------

//   const handelSearchCity = async () => {
//     try {
//       const response = await axios.get(
//         `http://localhost:8080/cities-localities?city=${filterProperties?.city}`
//       );
//       if (response?.statusText === "Created") {
//         setCities(response?.data?.data);
//       }
//     } catch (error) {
//       console.log(`city search error: ${error?.message}`);
//     }
//   };

//   useEffect(() => {
//     const timeOut = setTimeout(() => {
//       handelSearchCity();
//     }, 500);

//     return () => {
//       clearTimeout(timeOut);
//     };
//   }, [filterProperties?.city]);

//   //----------------------Select City handel----------------------------------

//   const handelSelectCity = (city) => {
//     setLocalities(city?.localities);
//     setFilterProperties({
//       city: city.name,
//     });
//     setFilters((preValue) => {
//       return {
//         ...preValue,
//         city: city?.name,
//       };
//     });

//     setCities([]);
//   };

//   //---------------------------handel select city--------------------------
//   // const handelChangeDropdown = (event) => {
//   //   const { name, value } = event.target;
//   //   setFilters((preValue) => {
//   //     return {
//   //       ...preValue,
//   //       [name]: value,
//   //     };
//   //   });
//   // };

//   // Handle dropdown changes including price range

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

//   //-----------------------method for cities property--------------------------
//   const handelSetCity = (city) => {
//     setFilters((prev) => ({
//       ...prev,
//       city: city,
//     }));
//     console.log(filters);
//   };
  
//     const submitForm = async () => {
//       setFormErrorMessage("");
//       try {
        
//         const response = await axios.get(
//           `http://localhost:8080/search-properties?propertyPurpose=Sale&propertyType=${filters.propertyType}&city=${filters.city}&minPrice=${filters.minPrice}&maxPrice=${filters.maxPrice}`
//         );
//         console.log(response);
  
//         if (response.statusText === "OK") {
//           console.log(response?.data?.data);
//           dispatch(handleFetchAllSearchProperties(response?.data?.data));
//           navigate("/properties");
//         } else if (!response.data?.isSuccess) {
//           //alert(`${response.data?.message}`);
//         }
//       } catch (message) {
//         console.log(`register form error ${message.message}`);
//         setFormErrorMessage(message.message);
//       }
//     };
  
//   return {
//     handelChangePropertyType,
//     property,
//     isLoading,
//     handelChangeInputField,
//     filterProperties,
//     cities,
//     handelSelectCity,
//     localities,
//     filters,
//     handelChangeDropdown,
//     message,
//     handelSetCity,
//     submitForm,
//     formLoading,
//     formErrorMessage,
//     handleSubmit,
//     register,
//     errors,
//   };
// };

// export default useProperties;

import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { handelFetchAllProperties, handleFetchAllSearchProperties } from "../store/slice";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const useProperties = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [property, setProperty] = useState("Sale");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [filters, setFilters] = useState({
    city: "",
    locality: "",
    propertyType: "",
    minPrice: "",
    maxPrice: "",
  }); // Used for automatic fetch
  //const [submitFilters, setSubmitFilters] = useState(filters); // Used for form submission

  const [cities, setCities] = useState([]);
  const [localities, setLocalities] = useState([]);
  const [formErrorMessage, setFormErrorMessage] = useState("");
  const [formLoading, setFormLoading] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  // Change property purpose (e.g., Sale, Rent)
  const handelChangePropertyType = (name) => setProperty(name);

  // Fetch properties based on filters
  const fetchProperty = useCallback(async () => {
    setMessage("");
    setIsLoading(true);

    try {
      const response = await axios.get(`http://localhost:8080/search-properties`, {
        params: {
          propertyPurpose: property,
          propertyType: filters.propertyType,
          city: filters.city,
          locality: filters.locality,
          minPrice: filters.minPrice,
          maxPrice: filters.maxPrice,
        },
      });

      if (response.statusText === "OK") {
        dispatch(handelFetchAllProperties(response.data.data));
      }
    } catch (error) {
      console.error("Fetch Property Error:", error);
      setMessage(error?.response?.data?.error || "An error occurred.");
    } finally {
      setIsLoading(false);
    }
  }, [property, filters, dispatch]);

  // Trigger fetchProperty on filters or property change
  useEffect(() => {
    fetchProperty();
  }, [filters, property, fetchProperty]);

  // Handle dropdown changes
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

  // Handle city selection
  const handelSelectCity = (city) => {
    setLocalities(city.localities);
    setFilters((prev) => ({ ...prev, city: city.name }));
    setCities([]);
  };

  // Handle form submission
  const submitForm = async () => {
    setFormErrorMessage("");
    setFormLoading(true);

    try {
      // Use submitFilters instead of filters for form submission
      const response = await axios.get(
        `http://localhost:8080/search-properties`,
        {
          params: {
            propertyPurpose: "Sale",
            propertyType: filters.propertyType,
            city: filters.city,
            minPrice: filters.minPrice,
            maxPrice: filters.maxPrice,
          },
        }
      );

      if (response.statusText === "OK") {
        dispatch(handleFetchAllSearchProperties(response.data.data));
        navigate("/properties");
      }
    } catch (error) {
      console.error("Form Submission Error:", error);
      setFormErrorMessage(error.message || "An error occurred.");
    } finally {
      setFormLoading(false);
    }
  };

  return {
    handelChangePropertyType,
    property,
    isLoading,
    filters,
    //submitFilters,
    handelChangeDropdown,
    message,
    cities,
    localities,
    handelSelectCity,
    submitForm,
    formLoading,
    formErrorMessage,
    handleSubmit,
    register,
    errors,
    //setSubmitFilters, // Allow manual updates to submitFilters if needed
  };
};

export default useProperties;
