import { useState, useEffect } from "react";

const useFetch = (url: string): Object => {
  const [data, setData] = useState<Object | null>(null);
  const [isPending, setIsPending] = useState<Boolean>(true);
  const [error, setError] = useState<Object | null>(null);

  useEffect(() => {
    const getData = async (url: string): Promise<void> => {
      try {
        let res: Response = await fetch(url);
        if(!res.ok){
            throw { err: true,
                    status: res.status,
                    statusText: !res.statusText ? "Ocurrio un error" :
                                                    res.statusText}};
        let data: Object = await res.json();
        setIsPending(false);
        setData(data);
        setError({err: false});
    } catch (err: Object | any) {
        setIsPending(false);
        setError(err)
      }
    };
    getData(url);
  }, [url]);

  return { data, isPending, error };
};

export { useFetch };
