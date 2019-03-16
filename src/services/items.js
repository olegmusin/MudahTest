import { useEffect } from 'react';
import useStore from 'react-use-store';
import axios from 'axios';
import { REDUCERS, API_LIKE, API_LIST } from '../constants';

export const useItemsAsyncEndpoint = () => {
    const [state, commit, rootState] = useStore(REDUCERS.LIST_REDUCER);

    const fetchData = async () => {
        try {
            const res = await axios.get(API_LIST);
            const { data } = res.data;
            commit({ items: data });
        } catch (error) {
            console.log(error);
            return;
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return [state.items];
};
