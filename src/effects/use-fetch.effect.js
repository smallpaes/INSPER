import { useState, useEffect, useRef } from 'react';

const useFetch = (url, query) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const urlRef = useRef(url);

  useEffect(() => {  
    setIsLoading(true);
    urlRef.current = url;

    const fetchData = async () => {
      if (query) {
        const searchParams = new URLSearchParams(query);
        urlRef.current += `?${searchParams}`;
      }
      
      const res = await fetch(urlRef.current, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_PEXELS_API_KEY}`
        }
      });
      const data = await res.json();
      setData(data);
      setIsLoading(false);
    };

    fetchData();
  }, [url, query])

  return { data, isLoading };
};

export default useFetch;