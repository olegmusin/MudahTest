import React from 'react';
import { Col, Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import './item.css';

const Item = (props) => {
    const { title, price } = props.data;
    return (
        <Col md={2} xs={6} className="p-1 mx-auto">
            <Card className="item-card">
                <CardImg
                    top
                    src={`/assets/image/${props.id}.png`}
                    alt={props.id}
                />
                <CardBody>
                    <CardTitle className="item-title">{title}</CardTitle>
                    <CardText className="item-price">{price}</CardText>
                </CardBody>
            </Card>
        </Col>
    );
};

export default Item;
