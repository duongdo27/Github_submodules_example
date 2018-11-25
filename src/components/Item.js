import React from "react";
import { connect } from "react-redux"
import { increaseQuantity, decreaseQuantity } from "../redux/actions"

const Item = ({ item }) => (
    <li className="item">
        {item.name} - {item.unitPrice} - {item.quantity} - {item.quantity * item.unitPrice}
        <button onClick={() => increaseQuantity(item.id)}>Increase</button>
        <button onClick={() => decreaseQuantity(item.id)} disabled={item.quantity<=1}>Decrease</button>
    </li>
);

export default connect(
    null,
    { increaseQuantity, decreaseQuantity}
    )(Item);