import React from "react";

const Item = ({ item }) => (
    <li className="item">
        {item.name} - {item.unitPrice} - {item.quantity} - {item.quantity * item.unitPrice}
    </li>
);

export default Item;