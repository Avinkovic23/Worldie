import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
        .then(res => {
            if(!res.ok) {
                throw Error("Fetching data failed.");
            }

            return res.json();
        })
        .then(data => {
            setIsPending(false);
            setError(null);
            setData(data);
        })
        .catch(err => {
            setError(err.message);
            setIsPending(false);
        })
    }, []);
    return ({data, isPending, error});
}
 
export default useFetch;