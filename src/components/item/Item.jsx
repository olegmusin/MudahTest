import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { getImageNumberFromId } from './helper';
import './item.css';

const Item = (props) => {
    const { id, title, price } = props.data;
    return (
        <div className={props.wrapperClass}>
            <Link to={`/items/${id}`} style={{ textDecoration: 'none' }}>
                <Card className="item-card">
                    <CardImg
                        top
                        src={`/assets/image/${getImageNumberFromId(id)}.png`}
                        alt={id}
                    />
                    <CardBody>
                        <CardTitle className="item-title">{title}</CardTitle>
                        <CardText className="item-price">{price}</CardText>
                    </CardBody>
                </Card>
            </Link>
        </div>
    );
};

export default Item;
