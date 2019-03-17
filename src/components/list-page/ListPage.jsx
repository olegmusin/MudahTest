import React from 'react';
import { Row, Container, Card } from 'reactstrap';
import { useItemsAsyncEndpoint } from '../../services/items';
import { Item } from '../../components';
import './list-page.css';

const ListPage = () => {
    const [items] = useItemsAsyncEndpoint();
    console.log(items);
    return (
        <div className="list-page">
            <Card className="items-container">
                <Container className="">
                    <span className="list-page-name">LISTING</span>
                    <Row>
                        {items.map((item) => {
                            const id = item.id;
                            return (
                                <Item
                                    data={{ ...item.attributes, id }}
                                    key={item.id}
                                />
                            );
                        })}
                    </Row>
                </Container>
            </Card>
        </div>
    );
};

export default ListPage;
