import { GetStorage, SetStorage } from 'data/protocols/cache';

const useLocalStorage = () => {
    const setLocalStorage = (key, value) => {
        if (value) SetStorage.set(key, value);
        else localStorage.removeItem(key);
    };

    const getLocalStorage = (key) => {
        return GetStorage.get(key);
    };

    return { setLocalStorage, getLocalStorage };
};

export default useLocalStorage;