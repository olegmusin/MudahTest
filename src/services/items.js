import { useEffect } from 'react';
import useStore from 'react-use-store';
import axios from 'axios';
import { REDUCER, API_LIKE, API_LIST, API_DETAILS } from '../constants';

/**
 * Custom React hook - stores the list of items from remote endpoint to Redux store.
 * @returns {Array} Items data array from store.
 */
export const useItemsAsyncEndpoint = () => {
    const [state, commit] = useStore(REDUCER);

    const storeData = async () => {
        commit({ items: await fetchData(API_LIST) });
    };

    useEffect(() => {
        storeData();
    }, []);

    return [state.items];
};

/**
 * Custom React hook - stores the items details from remote endpoint to Redux store.
 * @returns {Object} Items details from store.
 */
export const useItemDetailsAsyncEndpoint = (id) => {
    const [state, commit] = useStore(REDUCER);

    const storeData = async () => {
        commit({ item: await fetchData(`${API_DETAILS}${id}`) });
    };

    useEffect(() => {
        storeData();
    }, []);

    return [state.item];
};

/**
 * Custom React hook - stores the list of similar items from remote endpoint to Redux store.
 * @returns {Array} Similar items data array from store.
 */
export const useSimilarItemsAsyncEndpoint = (id) => {
    const [state, commit] = useStore(REDUCER);

    const storeData = async () => {
        commit({ similarItems: await fetchData(`${API_LIKE}${id}`) });
    };

    useEffect(() => {
        storeData();
    }, []);

    return [state.similarItems];
};

/**
 * Async function for API data fetching.
 * @returns {Array | Object} Data object from axios response data field.
 */
const fetchData = async (url) => {
    try {
        const res = await axios.get(url);
        const { data } = res.data;
        return data;
    } catch (error) {
        console.log(error);
        return {};
    }
};
