import { useState } from "react";
import axios from "axios";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
const { BASE_URL, ENVIRONMENT } = publicRuntimeConfig;

const usePost = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const postData = async (endpoint, body) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        `${BASE_URL}/${ENVIRONMENT}/${endpoint}`,
        body
      );
      setData(response.data);
      setError(null);
    } catch (error) {
      setError(error);
      setData(null);
    } finally {
      setIsLoading(false);
    }
  };

  return [data, error, isLoading, postData];
};

export default usePost;
