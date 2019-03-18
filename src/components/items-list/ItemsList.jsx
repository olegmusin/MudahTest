import React from 'react';
import { Row } from 'reactstrap';
import { Item } from '../../components';
import './items-list.css';

const ItemsList = (props) => {
    return (
        <Row className="items-list">
            {props.items.map((item) => {
                const id = item.id;
                return <Item data={{ ...item.attributes, id }} key={item.id} />;
            })}
        </Row>
    );
};

export default ItemsList;
