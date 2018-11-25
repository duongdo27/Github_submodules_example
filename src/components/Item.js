import React from "react";
import { connect } from "react-redux"
import { increaseQuantity, decreaseQuantity } from "../redux/actions"

const Item = ({ item, increaseQuantity, decreaseQuantity }) => (
    <li className="item">
        {item.name} - {item.unitPrice} - {item.quantity} - {item.quantity * item.unitPrice} &nbsp;
        <button onClick={() => increaseQuantity(item.id)}>Increase</button> &nbsp;
        <button onClick={() => decreaseQuantity(item.id)} disabled={item.quantity<=1}>Decrease</button>
    </li>
);

export default connect(
    null,
    { increaseQuantity, decreaseQuantity }
)(Item);