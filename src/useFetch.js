import { useEffect, useState } from "react";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("Data fetch from the resource failed");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsLoading(false);
          setError(null);
        })
        .catch((err) => {
          if (!err.name === "AbortError") {
            setIsLoading(false);
            console.log(err.message);
            setError(err.message);
          }
        });
    }, 1000); //added a delay to see the effect. Never do this in practice
    return abortCont.abort();
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
