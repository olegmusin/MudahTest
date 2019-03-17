import React from 'react';
import { useSimilarItemsAsyncEndpoint } from '../../services/items';
import { Item } from '../../components';

const SimilarItems = (props) => {
    const [items] = useSimilarItemsAsyncEndpoint(props.id);

    return (
        <div>
            {items.map((item) => {
                const id = item.id;
                return (
                    <Item
                        data={{ ...item.attributes, id }}
                        key={item.id}
                        wrapperClass="col-md-2"
                    />
                );
            })}
        </div>
    );
};

export default SimilarItems;
