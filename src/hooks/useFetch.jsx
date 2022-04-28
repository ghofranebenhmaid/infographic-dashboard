import { useEffect, useState } from "react";
import axios from "axios";

function useFetch (url)
{
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const apiKey = 'process.env.REACT_APP_COIN_API_KEY';

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': `${ apiKey }`,
            'Access-Control-Allow-Origin': `*`,
        },
    };

    useEffect(() =>
    {
        setLoading(true);
        axios
            .get(`${ proxyUrl }${ url }`, config)
            .then((response) =>
            {
                setData(response.data.data);
            })
            .catch((err) =>
            {
                setError(err);
            })
            .finally(() =>
            {
                setLoading(false);
            });
    }, [url]);

    const refetch = () =>
    {
        setLoading(true);
        axios
            .get(`${ proxyUrl }${ url }`, config)
            .then((response) =>
            {
                setData(response.data);
            })
            .catch((err) =>
            {
                setError(err);
            })
            .finally(() =>
            {
                setLoading(false);
            });
    };

    return { data, loading, error, refetch };
}

export default useFetch;