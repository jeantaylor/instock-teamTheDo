import React, { Component } from "react";
import { Link } from "react-router-dom";
import backArrow from "../../assets/Icons/SVG/Icon-back-arrow.svg";
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
      <>
        <div className="product__header">
          <div className="product__header__wrapper">
            <div className="product__header__title__wrapper">
              <Link to="/inventory">
                <img
                  className="product__header__icon"
                  src={backArrow}
                  alt="back arrow"
                />
              </Link>
              <h1 className="product__header__title">
                {this.state.products.name}
              </h1>
            </div>
            <button className="product__header__button">In Stock</button>
            <button className="product__header__button-oos">
              Out of Stock
            </button>
          </div>
        </div>
        <div className="product__summary">
          <div className="product__container">
            <h4 className="product__summary-headings">ITEM DESCRIPTION</h4>
            <h4 className="inventory__name">{this.state.products.desc}</h4>
          </div>
          <div className="product__summary__wrapper">
            <div className="product__container">
              <h4 className="product__summary-headings">ORDERED BY</h4>
              <h4 className="inventory__name">
                {this.state.products.orderedBy}
              </h4>
            </div>
            <div className="product__container">
              <h4 className="product__summary-headings">REFERENCE NUMBER </h4>
              <h4 className="inventory__name">{this.state.products.ref}</h4>
            </div>
            <div className="product__container">
              <h4 className="product__summary-headings">LAST ORDERED</h4>
              <h4 className="inventory__name">
                {this.state.products.lastOrdered}
              </h4>
            </div>
            <div className="product__container">
              <h4 className="product__summary-headings">LOCATION</h4>
              <h4 className="inventory__name">
                {this.state.products.location}
              </h4>
            </div>
            <div className="product__container">
              <h4 className="product__summary-headings">QUANTITY</h4>
              <h4 className="inventory__name">
                {this.state.products.quantity}
              </h4>
            </div>
            <div className="product__container">
              <h4 className="product__summary-headings">CATEGORIES</h4>
              <h4 className="inventory__name">
                {this.state.products.categories}
              </h4>
            </div>
          </div>
          <button className="edit__button">EDIT</button>
        </div>
      </>
    );
  }
}
