import React, { useEffect, useState } from 'react';
import AxiosHttpAdapter from './httpAdapter';

const MyComponent = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const adapter = new AxiosHttpAdapter();
            const response = await adapter.request({
            url: 'https://api.example.com/data',
            method: 'GET',
            headers: { 'Authorization': 'Bearer YOUR_TOKEN' }
            });
            setData(response.body);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        };

        fetchData();
    }, []);

    return (
        <div>
        {data ? (
            <ul>
                {data.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        ) : (
            <p>Loading...</p>
        )}
        </div>
    );
};

export default MyComponent;