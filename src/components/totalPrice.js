import React from "react";
import { connect } from "react-redux";
import { getTotalPrice } from "../redux/selectors"

const TotalPrice = ({ totalPrice }) => (
    <p><b>Total Price:</b> { totalPrice }</p>
);

const mapStateToProps = state => {
    const totalPrice = getTotalPrice(state);
    return { totalPrice };
}

export default connect(mapStateToProps)(TotalPrice);

