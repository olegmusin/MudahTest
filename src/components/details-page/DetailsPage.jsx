import React, { Fragment } from 'react';
import useStore from 'react-use-store';
import { REDUCER } from '../../constants';
import { Row, Col, CardImg } from 'reactstrap';
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
    const { title, description } = itemData.attributes;

    return (
        <div className="details-page">
            <div className="details-page-card">
                <Row>
                    <Col md={8} xs={12}>
                        <div>
                            <div>
                                <div className="details-page-breadcrumbs">
                                    {`Home > Electronics > Games & Console >`}
                                    <span
                                        style={{ textDecoration: 'underline' }}
                                    >
                                        {title}
                                    </span>
                                </div>
                                <div className="details-page-title">
                                    {title}
                                </div>
                            </div>
                            <Col className="details-page-photo-frame">
                                <CardImg
                                    className="details-page-photo"
                                    src={`/assets/image/${getImageNumberFromId(
                                        id,
                                    )}@2x.png`}
                                    alt={id}
                                />
                            </Col>
                        </div>
                    </Col>
                    <Col md={4} xs={12}>
                        <ItemDetails data={itemData.attributes} />
                    </Col>
                </Row>
                <Row className="details-page-description">
                    <Col md={8} xs={12}>
                        <Row>
                            <Col
                                md={6}
                                xs={6}
                                className="details-page-description-header"
                            >
                                DESCRIPTION
                                <div className="details-page-description-header-underline" />
                            </Col>
                            <Col
                                md={6}
                                xs={6}
                                className="details-page-report-ad"
                            >
                                <div style={{ float: 'right' }}>
                                    <FontAwesomeIcon icon="flag" />
                                    <span> Report Ad</span>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={8} xs={12} className="border-bottom">
                        {description &&
                            description.split('\\n').map((item, key) => (
                                <Fragment key={key}>
                                    {item}
                                    <br />
                                </Fragment>
                            ))}
                    </Col>
                </Row>
                <Row>
                    <SimilarItems id={id} />
                </Row>
            </div>
        </div>
    );
};

export default DetailsPage;
