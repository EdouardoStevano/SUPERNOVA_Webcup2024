import React from 'react';
import useLocalStorage from './useLocalStorage';

const MyComponent = () => {
    const { setLocalStorage, getLocalStorage } = useLocalStorage();

    // Exemple d'utilisation pour enregistrer et récupérer des données du localStorage
    const handleSaveData = () => {
        const data = { name: 'John', age: 30 };
        setLocalStorage('userData', data);
    };

    const handleGetData = () => {
        const userData = getLocalStorage('userData');
        console.log('User data:', userData);
    };

    return (
        <div>
        <button onClick={handleSaveData}>Save Data</button>
        <button onClick={handleGetData}>Get Data</button>
        </div>
    );
};

export default MyComponent;