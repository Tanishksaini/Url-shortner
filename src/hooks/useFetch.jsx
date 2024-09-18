import { useState } from "react";

function useFetch(cb, option) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const fn = async (...args) => {
    setLoading(true);
    setError(null);
    try {
      const response = await cb(option, ...args);
    setData(response);
      setError(null);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  
  return { data, loading, error, fn };
}

export default useFetch;
