import React, { Component } from "react";
import axios from "axios";

export default class ProductSummary extends Component {
  state = {
    products: []
  };

  componentDidMount() {
    axios.get(`http://localhost:8080/inventory/:ref`).then(res => {
      //console.log(res.data);
      this.setState({
        products: res.data
      });
    });
  }
  render() {
    let inventoryProps =
      this.state.data &&
      this.state.map(product => {
        return (
          <div className="product__summary">
            <h4 className="product__summary-headings">ITEM DESCRIPTION</h4>
            <h4 className="inventory__name">{product.desc}</h4>
            <h4 className="product__summary-headings">ORDERED BY</h4>
            <h4 className="inventory__name">{product.name}</h4>
            <h4 className="product__summary-headings">REFERENCE NUMBER </h4>
            <h4 className="inventory__name">{product.id}</h4>
            <h4 className="product__summary-headings">LAST ORDERED</h4>
            <h4 className="inventory__name">{product.lastOrdered}</h4>
            <h4 className="product__summary-headings">LOCATION</h4>
            <h4 className="inventory__name">{product.location}</h4>
            <h4 className="product__summary-headings">QUANTITY</h4>
            <h4 className="inventory__name">{product.quantity}</h4>
            <h4 className="product__summary-headings">CATEGORIES</h4>
            <h4 className="inventory__name">{product.categories}</h4>
          </div>
        );
      });
    //console.log(inventoryProps);
    return <div className="product__summary">{inventoryProps}</div>;
  }
}
