import { useState } from "react";
import axios from "axios";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
const { BASE_URL, ENVIRONMENT } = publicRuntimeConfig;

const useGet = (endpoint) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    setIsLoading(true);

    try {
      const { data } = await axios.get(
        `${BASE_URL}/${ENVIRONMENT}/${endpoint}`
      );
      const sortedData = data.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
      console.log(sortedData);
      setData(sortedData);
      setError(null);
    } catch (error) {
      console.error(error);
      setError(error);
      setData(null);
    } finally {
      setIsLoading(false);
    }
  };

  return [data, error, isLoading, getData];
};

export default useGet;
