import { useEffect } from "react";
import { useState } from "react";
import axiosInstance from "../utils/axiosInstance";

const useProfile = () => {
  const [user, setUser] = useState({});
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const handelSubmitForm = async (event) => {
    event.preventDefault();
    console.log(user.id);
    console.log(inputValue);

    try {
      const response = await axiosInstance.put(`/users/update`, inputValue);
      console.log(response);

      if (response.statusText === "OK") {
        localStorage.setItem(
          "realEstateUser",
          JSON.stringify({
            name: response?.data?.data?.name,
            email: response?.data?.data?.email,
            password: response?.data?.data?.password,
            id: response?.data?.data?._id,
          })
        );
        alert("Your email and password update successfully!");
      }
    } catch (error) {
      console.log(error);
      if (error.status === 500) {
        alert(error?.response?.data?.error);
      } else {
        alert(error?.response?.data?.error[0]);
      }
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
