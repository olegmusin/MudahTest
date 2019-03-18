import React from 'react';
import { useSimilarItemsAsyncEndpoint } from '../../services/items';
import { Row, Col, Button } from 'reactstrap';
import { Item } from '../../components';

const SimilarItems = (props) => {
    const [items] = useSimilarItemsAsyncEndpoint(props.id);

    return (
        <Row>
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
        </Row>
    );
};

export default SimilarItems;
