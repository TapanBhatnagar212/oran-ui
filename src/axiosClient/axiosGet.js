import {useEffect, useState} from "react";
import axios from 'axios';

const Get = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(
                    url);
                setData(response.data);
            } catch (error) {
                setError(error.message);
                console.log(error)
            }
        })();
    }, []);

    return data ;
}

export default Get;