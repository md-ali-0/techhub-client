import { useEffect, useState } from 'react';

const useDataload = (url) => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url);
                const data = await res.json();
                setData(data);
            } catch (err) {
                console.log(err);
            }

        };
        fetchData();
    }, [url]);

    return data;
};

export default useDataload;
