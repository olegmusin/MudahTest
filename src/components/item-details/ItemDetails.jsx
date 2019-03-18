import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Button } from 'reactstrap';

const ItemDetails = (props) => {
    const {
        price,
        condition,
        location,
        seller_name,
        seller_type,
        phone,
    } = props.data;
    return (
        <div>
            <div>
                <Row>
                    <Col md={6} xs={6}>
                        <FontAwesomeIcon icon={['far', 'heart']} />
                        <span> Whishlist</span>
                    </Col>
                    <Col md={6} xs={6}>
                        <FontAwesomeIcon icon="share-alt" />
                        <span> Share</span>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} xs={12}>
                        Price
                    </Col>
                    <Col md={12} xs={12}>
                        {price}
                    </Col>
                    <Col md={12} xs={12}>
                        Item condition
                    </Col>
                    <Col md={12} xs={12}>
                        {condition}
                    </Col>
                    <Col md={12} xs={12}>
                        Item location
                    </Col>
                    <Col md={12} xs={12}>
                        {location}
                    </Col>
                    <Col md={12} xs={12}>
                        Seller info
                    </Col>
                    <Col md={12} xs={12}>
                        <Row>
                            <Col md={4} xs={4}>
                                <FontAwesomeIcon icon="user-circle" size="3x" />
                            </Col>
                            <Col md={8} xs={8}>
                                <Row>
                                    <Col md={12} xs={12}>
                                        {seller_name}
                                    </Col>
                                    <Col md={12} xs={12}>
                                        {seller_type}
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
            <div>
                <Row>
                    <Col md={12} xs={12}>
                        Interested in the ad? Contact the seller
                    </Col>
                    <Col md={12} xs={12}>
                        <Button>
                            <FontAwesomeIcon icon="phone" />
                            <span>{phone}</span>
                        </Button>
                    </Col>
                    <Col md={12} xs={12}>
                        <Button>
                            <FontAwesomeIcon icon="envelope" />
                            <span>Email</span>
                        </Button>
                    </Col>
                    <Col md={12} xs={12}>
                        <Button>
                            <FontAwesomeIcon icon="comments" />
                            <span>Chat</span>
                        </Button>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default ItemDetails;
