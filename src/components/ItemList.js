import React from 'react';
import { connect } from 'react-redux';
import { getItems } from '../redux/selectors';

const ItemList = ({ items }) => (
    <p>Hello</p>
);

const mapStateToProps = state => {
    const items = getItems(state);
    console.log(items);
    return { items };
}

export default connect(mapStateToProps)(ItemList);
