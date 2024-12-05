import { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import { useParams } from "react-router-dom";

const useSingleProperty = () => {
  const { id } = useParams();
  const [propertyData, setPropertyData] = useState({});

  // Fetch property data
  const fetchProperty = async () => {
    try {
      const response = await axiosInstance.get(`/properties/${id}`);
      console.log(response); // Log full response to inspect

      if (response.status === 200) {
        setPropertyData(response.data.data); // Set the actual data
      }
    } catch (error) {
      console.error(error);
      alert("There was an error fetching the property data.");
    }
  };

  // Fetch property when the component mounts or the `id` changes
  useEffect(() => {
    fetchProperty();
  }, [id]);

  return { id, propertyData };
};

export default useSingleProperty;
