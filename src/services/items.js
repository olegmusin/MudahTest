import { useEffect } from 'react';
import useStore from 'react-use-store';
import axios from 'axios';
import { REDUCER, API_LIKE, API_LIST, API_DETAILS } from '../constants';

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
