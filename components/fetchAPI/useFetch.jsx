import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchAPI = async () => {
      const response = await fetch(url);
      const jsonResponse = await response.json();
      setData(jsonResponse);
    };
    fetchAPI();
  }, []);

  return [data];
};

export default useFetch;
