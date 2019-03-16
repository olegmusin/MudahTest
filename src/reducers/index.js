import { createReducer } from 'react-use-store';
import { REDUCERS } from '../constants';

export const listViewReducer = createReducer(REDUCERS.LIST_REDUCER, {
    items: [],
});

export const detailViewReducer = createReducer(REDUCERS.DETAILS_REDUCER, {
    item: null,
    similarItems: [],
});
