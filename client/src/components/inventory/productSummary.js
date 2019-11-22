import React, { Component } from "react";
import axios from "axios";

export default class ProductSummary extends Component {
  state = {
    products: {}
  };

  componentDidMount() {
    axios
      .get(
        `http://localhost:8080/inventory/${this.props.match.params.warehouse}/${this.props.match.params.product}`
      )
      .then(res => {
        console.log(res.data);
        this.setState({
          products: res.data
        });
      });
  }
  render() {
    return (
      <div className="product__summary">
        <h4 className="product__summary-headings">ITEM DESCRIPTION</h4>
        <h4 className="inventory__name">{this.state.products.desc}</h4>
        <h4 className="product__summary-headings">ORDERED BY</h4>
        <h4 className="inventory__name">{this.state.products.name}</h4>
        <h4 className="product__summary-headings">REFERENCE NUMBER </h4>
        <h4 className="inventory__name">{this.state.products.ref}</h4>
        <h4 className="product__summary-headings">LAST ORDERED</h4>
        <h4 className="inventory__name">{this.state.products.lastOrdered}</h4>
        <h4 className="product__summary-headings">LOCATION</h4>
        <h4 className="inventory__name">{this.state.products.location}</h4>
        <h4 className="product__summary-headings">QUANTITY</h4>
        <h4 className="inventory__name">{this.state.products.quantity}</h4>
        <h4 className="product__summary-headings">CATEGORIES</h4>
        <h4 className="inventory__name">{this.state.products.categories}</h4>
      </div>
    );
  }
}
