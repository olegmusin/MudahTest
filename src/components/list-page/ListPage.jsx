import React from 'react';
import { Row, Container, CardDeck } from 'reactstrap';
import { useItemsAsyncEndpoint } from '../../services/items';
import { Item } from '../../components';
import './list-page.css';

const ListPage = () => {
    const [items] = useItemsAsyncEndpoint();

    return (
        <div className="list-page">
            <CardDeck className="items-container">
                <Container className="">
                    <span className="list-page-name">LISTING</span>
                    <Row>
                        {items.map((item) => {
                            const id = item.id;
                            return (
                                <Item
                                    data={{ ...item.attributes, id }}
                                    key={item.id}
                                    wrapperClass=""
                                />
                            );
                        })}
                    </Row>
                </Container>
            </CardDeck>
        </div>
    );
};

export default ListPage;
