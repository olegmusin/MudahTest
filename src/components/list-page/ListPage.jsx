import React from 'react';
import { Row, Container } from 'reactstrap';
import { getImageNumberFromId } from '../details-page/helper';
import { useItemsAsyncEndpoint } from '../../services/items';
import Item from '../item/Item';
const ListPage = () => {
    const [items] = useItemsAsyncEndpoint();
    return (
        <Container>
            <Row>
                {items.map((item) => (
                    <Item
                        id={getImageNumberFromId(item.id)}
                        key={item.id}
                        data={item.attributes}
                    />
                ))}
            </Row>
        </Container>
    );
};

export default ListPage;
