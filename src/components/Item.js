import React from "react";
import { connect } from "react-redux"
import { increaseQuantity, decreaseQuantity, removeItem } from "../redux/actions"

const Item = ({ item, increaseQuantity, decreaseQuantity, removeItem }) => (
    <li className="item">
        {item.name} - {item.unitPrice} - {item.quantity} - {item.quantity * item.unitPrice} &nbsp;
        <button onClick={() => increaseQuantity(item.id)}>Increase</button> &nbsp;
        <button onClick={() => decreaseQuantity(item.id)} disabled={item.quantity<=1}>Decrease</button> &nbsp;
        <button onClick={() => removeItem(item.id)}>Remove</button> &nbsp;
    </li>
);

export default connect(
    null,
    { increaseQuantity, decreaseQuantity, removeItem }
)(Item);