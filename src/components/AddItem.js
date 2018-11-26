import React, { Component } from "react"
import { connect } from "react-redux"
import { addItem } from "../redux/actions"

class AddItem extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            unitPrice: 1,
            displayError: false
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleUnitPriceChange = this.handleUnitPriceChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(e) {
        this.setState({name: e.target.value});
    }

    handleUnitPriceChange(e) {
        this.setState({unitPrice: e.target.value});
    }

    handleSubmit(){
        if (this.state.name){
            this.props.addItem(this.state.name, this.state.unitPrice);
            this.setState({name: '', displayError: false});
        }
        else {
            this.setState({displayError: true});
        }
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
                <button onClick={this.handleSubmit}>Add Item</button>
                {
                    this.state.displayError &&
                    <p>Item name must be filled</p>
                }
            </div>
        );
    }
}

export default connect(
    null,
    { addItem }
)(AddItem);
