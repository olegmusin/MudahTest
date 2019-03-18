import React, { Fragment } from 'react';
import useStore from 'react-use-store';
import { Link } from 'react-router-dom';
import { REDUCER } from '../../constants';
import {
    Row,
    Col,
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getImageNumberFromId } from '../item/helper';
import { useItemDetailsAsyncEndpoint } from '../../services/items';
import { ItemDetails, SimilarItems } from '../../components';
import './details-page.css';

const getItemDetails = (id) => {
    const [state] = useStore(REDUCER);
    if (state.items.length > 0)
        return state.items.find((item) => item.id === id.toString());
    else {
        const [item] = useItemDetailsAsyncEndpoint(id);
        return item;
    }
};

const DetailsPage = (props) => {
    const { id } = props.match.params;
    const itemData = getItemDetails(id);
    const { title, price, description } = itemData.attributes;

    return (
        <div className="details-page">
            <Card className="item-details-card">
                <Row>
                    <Col md={8} xs={12}>
                        <CardBody>
                            <CardText className="item-detais-price">
                                {`Home > Electronics > Games & Console >`}
                                <Link to={`/items/${id}`}>{title}</Link>
                            </CardText>
                            <CardTitle className="item-details-title">
                                {title}
                            </CardTitle>
                        </CardBody>
                        <CardImg
                            width="662px"
                            src={`/assets/image/${getImageNumberFromId(
                                id,
                            )}@2x.png`}
                            alt={id}
                        />
                        <CardBody>
                            <CardTitle className="item-details-description">
                                <Row>
                                    <Col
                                        md={6}
                                        xs={6}
                                        className="item-details-description-header"
                                    >
                                        DESCRIPTION
                                    </Col>
                                    <Col md={6} xs={6}>
                                        <div style={{ float: 'right' }}>
                                            <FontAwesomeIcon icon="flag" />
                                            <span> Report Ad</span>
                                        </div>
                                    </Col>
                                </Row>
                                {description &&
                                    description
                                        .split('\\n')
                                        .map((item, key) => (
                                            <Fragment key={key}>
                                                {item}
                                                <br />
                                            </Fragment>
                                        ))}
                            </CardTitle>
                            <CardText className="item-detais-price">
                                {price}
                            </CardText>
                        </CardBody>
                        <hr />
                    </Col>
                    <Col md={4} xs={12}>
                        <ItemDetails data={itemData.attributes} />
                    </Col>
                </Row>
                <Row>
                    <SimilarItems id={id} />
                </Row>
            </Card>
        </div>
    );
};

export default DetailsPage;
