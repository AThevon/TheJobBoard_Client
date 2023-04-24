import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        setIsLoading(true);
        
        async function fetchData() {
            try {
                const response = await axios(url);
                setData(response.data);
            } catch (err) {
                console.log('fetching error :', err);
                setError('Data can\'t be fetched :' + err );
            } finally {
                setIsLoading(false);
            }
        }
        
        

        setTimeout(() => {
        fetchData();
        }, 500);

    }, [url]);

    return {data, isLoading, error};
}

export default useFetch;