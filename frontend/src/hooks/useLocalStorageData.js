import { useEffect, useState } from "react";

const useLocalStorageData = () => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const localStorageData = localStorage.getItem("token");
    console.log(localStorageData);

    setToken(localStorageData);
  }, []);
  return {
    token,
  };
};

export default useLocalStorageData;
