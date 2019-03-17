import { createReducer } from 'react-use-store';
import { REDUCER } from '../constants';

export const itemsReducer = createReducer(REDUCER, {
    items: [],
    item: { id: null, attributes: {} },
    similarItems: [],
});
