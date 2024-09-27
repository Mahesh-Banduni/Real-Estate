import axios from "axios";
import { useEffect, useState } from "react";

const useProperties = () => {
  const [property, setProperty] = useState("Buy");
  const [message, setMessage] = useState("");

  const handelChangePropertyType = (name) => {
    setProperty(name);
  };

  console.log(property);

  useEffect(() => {
    const fetchProperty = async () => {
      setMessage("");
      try {
        let response;
        if (property === "Buy") {
          response = await axios.get(
            `http://localhost:8080/search-properties/Sell`
          );
          console.log(response);
        }

        // if (response.data?.isSuccess) {
        //   localStorage.setItem("token", JSON.stringify(response?.data?.data));
        //   navigate("/");
        // } else if (!response.data?.isSuccess) {
        //   alert(`${response.data?.message}`);
        //   navigate("/login");
        // }
      } catch (message) {
        console.log(`fetch properties error ${message.message}`);
        setMessage(message.message);
      }
    };
    fetchProperty();
  }, [property]);
  return {
    handelChangePropertyType,
    property,
  };
};

export default useProperties;
