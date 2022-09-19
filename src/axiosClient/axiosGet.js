import {useEffect, useState} from "react";
import axios from 'axios';

const Get = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(
                    url);
                setData(response.data);
            } catch (error) {
                console.log(error)
            }
        })();
    }, []);

    return data ;
}

export default Get;