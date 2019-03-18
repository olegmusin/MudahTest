import React from 'react';
import { useSimilarItemsAsyncEndpoint } from '../../services/items';
import { ItemsList } from '../../components';
import './similar-items.css';

const SimilarItems = (props) => {
    const [items] = useSimilarItemsAsyncEndpoint(props.id);

    return (
        <div className="similar-items">
            <span className="similar-items-header">SIMILAR ITEMS</span>
            <ItemsList items={items} />
        </div>
    );
};

export default SimilarItems;
