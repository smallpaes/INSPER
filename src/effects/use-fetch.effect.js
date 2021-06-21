import { useState, useEffect, useRef } from 'react';

const useFetch = (url, page, query) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const urlRef = useRef();

  useEffect(() => {  
    if (!url || page === 0) return;

    const fullUrl = `${url}${(page || query) && '?'}${page && ('page=' + page)}${query && ('&' + query)}`;
    if (fullUrl === urlRef.current) return;
    urlRef.current = fullUrl;

    const fetchData = async () => {
      setIsLoading(true);
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
  }, [url, page, query])

  return { data, isLoading };
};

export default useFetch;