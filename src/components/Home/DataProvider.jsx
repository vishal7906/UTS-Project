import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create the context
const DataContext = createContext();

// Create a provider component
export const DataProvider = ({ children }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://backend-uts.vercel.app/api/home-page/home');
                setData(response.data); // Adjust based on your API response structure
            } catch (error) {
                console.error('Error while fetching home data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    );
};

// Create a custom hook for easier access to the context
export const useDataContext = () => {
    return useContext(DataContext);
};
