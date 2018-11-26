import React, { Component } from "react"
import { connect } from "react-redux"

class AddItem extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            unitPrice: 1,
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleUnitPriceChange = this.handleUnitPriceChange.bind(this);
    }

    handleNameChange(e) {
        this.setState({name: e.target.value});
    }

    handleUnitPriceChange(e) {
        this.setState({unitPrice: e.target.value});
    }

    render() {
        return (
            <div className="add-item">
                <input type="text"
                    value={this.state.name}
                    onChange={this.handleNameChange} />
                <input type="number"
                    value={this.state.unitPrice}
                    onChange={this.handleUnitPriceChange} />
                <button>Add Item</button>
            </div>
        );
    }
}

export default AddItem;
