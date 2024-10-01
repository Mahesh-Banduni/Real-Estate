import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const useWishlist = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const fetchWishlistProduct = async (data) => {
    setIsLoading(true);
    try {
      const response = await axios.get(``, data);

      if (response?.statusText === "Created") {
        dispatch(handelAddWishlistProduct(response?.data));
      }
    } catch (error) {
      console.log(`register form error ${error.message}`);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchWishlistProduct();
  }, []);

  return {};
};

export default useWishlist;
