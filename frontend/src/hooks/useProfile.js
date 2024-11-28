import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const useProfile = () => {
  const [user, setUser] = useState({});
  const [inputValue, setInputValue] = useState({
    phone: "",
    password: "",
  });

  const handelSubmitForm = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.put(
        `http://localhost:8080/users/${user._id}`,
        inputValue
      );
      if (response.statusText === "OK") {
        localStorage.setItem("token", JSON.stringify(response?.data?.data));
        alert("Your password and contact update successfully!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handelInputChange = (event) => {
    const { name, value } = event.target;
    setInputValue((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  useEffect(() => {
    let userData = JSON.parse(localStorage.getItem("realEstateUser"));
    setUser(userData);
  }, []);

  return {
    user,
    handelInputChange,
    handelSubmitForm,
  };
};

export default useProfile;
