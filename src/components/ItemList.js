import React from 'react';
import { connect } from 'react-redux';
import { getItems } from '../redux/selectors';
import Item from "./Item"

const ItemList = ({ items }) => (
    <ul className="item-list">
        {items && items.length
            ? items.map((item, index) => {
                return <Item key={`item-${item.id}`} item={item} />
              })
            : "No items!"
        }
    </ul>
);

const mapStateToProps = state => {
    const items = getItems(state);
    return { items };
}

export default connect(mapStateToProps)(ItemList);
