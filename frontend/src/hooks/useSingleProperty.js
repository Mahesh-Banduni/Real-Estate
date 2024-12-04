import { useCallback, useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import { useParams } from "react-router-dom";

const useSingleProperty = () => {
  const { id } = useParams();
  const [propertyData, setPropertyData] = useState({});

  const fetchProperty = useCallback(async () => {
    try {
      const response = await axiosInstance.get(`/properties/${id}`);
      if (response.data.success === true) {
        setPropertyData(response?.data?.data);
      }
    } catch (error) {
      switch (error.status) {
        case 400:
          console.error("Invalid product ID.");
          alert("Invalid product ID. Please check your input.");
          break;
        case 401:
          console.error("Unauthorized access.");
          alert("You need to log in to view this product.");
          // Redirect to login page if needed
          break;
        case 403:
          console.error("Forbidden access.");
          alert("You do not have permission to view this product.");
          break;
        case 404:
          console.error("Product not found.");
          alert("The requested product does not exist.");
          break;
        case 500:
          console.error("Server error.");
          alert("There was a problem on the server. Please try again later.");
          break;
        default:
          console.error(`Unexpected error: ${response.status}`);
          alert("An unexpected error occurred. Please try again.");
      }
    }
  }, []);

  useEffect(() => {
    fetchProperty();
  }, []);

  return { id };
};

export default useSingleProperty;
