import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Button } from 'reactstrap';
import './item-details.css';

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
            <div className="item-details">
                <Row className="item-details-section-top">
                    <Col
                        md={6}
                        xs={6}
                        className="item-details-top-icon item-details-header-text"
                    >
                        <FontAwesomeIcon icon={['far', 'heart']} />
                        <span className="item-details-top-icon-text">
                            Whishlist
                        </span>
                    </Col>
                    <Col
                        md={6}
                        xs={6}
                        className="item-details-top-icon item-details-header-text"
                    >
                        <FontAwesomeIcon icon="share-alt" />
                        <span className="item-details-top-icon-text">
                            Share
                        </span>
                    </Col>
                </Row>
                <div>
                    <Row className="item-details-section">
                        <Col
                            md={12}
                            xs={12}
                            className="item-details-header-text"
                        >
                            Price
                        </Col>
                        <Col md={12} xs={12} className="item-details-price">
                            {price}
                        </Col>
                    </Row>
                    <Row className="item-details-section">
                        <Col
                            md={12}
                            xs={12}
                            className="item-details-header-text"
                        >
                            Item condition
                        </Col>
                        <Col md={12} xs={12} className="item-details-text">
                            {condition}
                        </Col>
                    </Row>
                    <Row className="item-details-section">
                        <Col
                            md={12}
                            xs={12}
                            className="item-details-header-text"
                        >
                            Item location
                        </Col>
                        <Col md={12} xs={12} className="item-details-text">
                            {location}
                        </Col>
                    </Row>
                    <Row className="item-details-section">
                        <Col
                            md={12}
                            xs={12}
                            className="item-details-header-text"
                        >
                            Seller info
                        </Col>
                        <Col md={12} xs={12}>
                            <Row>
                                <Col md={2} xs={2}>
                                    <FontAwesomeIcon
                                        icon="user-circle"
                                        size="3x"
                                    />
                                </Col>
                                <Col md={9} xs={9}>
                                    <div>
                                        <Col
                                            md={12}
                                            xs={12}
                                            className="item-details-text"
                                        >
                                            {seller_name}
                                        </Col>
                                        <Col
                                            md={12}
                                            xs={12}
                                            className="item-details-header-text"
                                        >
                                            {seller_type}
                                        </Col>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className="item-details-actions">
                <Row>
                    <Col
                        md={12}
                        xs={12}
                        className="item-details-header-text item-details-actions-header"
                    >
                        Interested in the ad? Contact the seller
                    </Col>
                    <Col md={12} xs={12} className="pl-0">
                        <Col md={12} xs={12}>
                            <Button className="item-details-action-button">
                                <FontAwesomeIcon icon="phone" />
                                <span className="item-details-action-button-text">
                                    {phone}
                                </span>
                            </Button>
                        </Col>
                        <Col md={12} xs={12}>
                            <Button className="item-details-action-button">
                                <FontAwesomeIcon icon="envelope" />
                                <span className="item-details-action-button-text">
                                    Email
                                </span>
                            </Button>
                        </Col>
                        <Col md={12} xs={12}>
                            <Button className="item-details-action-button button-filled">
                                <FontAwesomeIcon icon="comments" />
                                <span className="item-details-action-button-text">
                                    Chat
                                </span>
                            </Button>
                        </Col>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default ItemDetails;
