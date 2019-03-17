import React from 'react';
import useStore from 'react-use-store';
import { REDUCER } from '../../constants';
import { Col, Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { getImageNumberFromId } from '../item/helper';
import { useItemDetailsAsyncEndpoint } from '../../services/items';
import { ItemDetails } from '../../components';

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
    const { title, price } = itemData.attributes;

    return (
        <Card>
            <Col>
                <CardImg
                    top
                    src={`/assets/image/${getImageNumberFromId(id)}@2x.png`}
                    alt={id}
                />
                <CardBody>
                    <CardTitle className="item-title">{title}</CardTitle>
                    <CardText className="item-price">{price}</CardText>
                </CardBody>
            </Col>
            <Col>
                <ItemDetails data={itemData} />
            </Col>
        </Card>
    );
};

export default DetailsPage;
