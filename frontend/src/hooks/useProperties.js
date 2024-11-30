import { useCallback, useEffect, useState } from "react";
import {
  handelClearFilter,
  handelFetchAllProperties,
  handelUpdateFilters,
} from "../store/slice";
import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "../utils/axiosInstance";

const useProperties = () => {
  const propertyFilter = useSelector((store) => store.authReducer.filters);
  const dispatch = useDispatch();

  //========================== states ======================
  const [property, setProperty] = useState("Sale");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [localities, setLocalities] = useState([]);
  const [cities, setCities] = useState([]);
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

        const response = await axiosInstance.get(`/search-properties`, {
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
        });

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

    setFilterFromCity((preValue) => {
      return {
        ...preValue,
        [name]: [value],
      };
    });
  };

  // -----------------throttling functionality on cites search-------------------------------

  const handelSearchCity = async () => {
    if (filterCity?.city) {
      setToggle(true);
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

  //----------------------Select City handel----------------------------------

  const handelSelectCity = (city) => {
    setToggle(false);
    dispatch(handelUpdateFilters({ name: "city", value: city.name }));
    setFilterCity({
      city: city.name,
    });
    setCities([]);
  };

  // ---------------------------handel select city--------------------------
  const handelChangeDropdown = (event) => {
    const { name, value } = event.target;
    dispatch(handelUpdateFilters({ name: name, value: value }));
  };

  //-----------------------method for send Enquiry--------------------------

  const sendEnquiry = async (id) => {
    let token = localStorage.getItem("token");
    if (!token) {
      navigator("/signin");
    } else {
      try {
        const response = await axiosInstance.post("/property-inquiry", {
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

  //--------------------- handel clear filters -------------------------
  const handelClearFilters = () => {
    setProperty("Sale");
    dispatch(handelClearFilter());
  };

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
    handelChangeFromCityInputField,
    filterFromCity,
    sendEnquiry,
    handelClearFilters,
    toggle,
  };
};

export default useProperties;
