import React from 'react';
import { Row } from 'reactstrap';
import { ItemsList } from '../../components';
import { useItemsAsyncEndpoint } from '../../services/items';
import './list-page.css';

const ListPage = () => {
    const [items] = useItemsAsyncEndpoint();

    return (
        <div className="list-page">
            <div className="items-container">
                <Row>
                    <div>
                        <span className="list-page-name">LISTING</span>
                        <ItemsList items={items} />
                    </div>
                </Row>
            </div>
        </div>
    );
};

export default ListPage;
