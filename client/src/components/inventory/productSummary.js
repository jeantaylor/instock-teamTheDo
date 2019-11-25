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
        //console.log(res.data);
        this.setState({
          products: res.data
        });
      });
  }
  render() {
    let quantityCount = this.state.products.quantity;
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
            <button
              className="product__header__button"
              style={
                quantityCount > 1 ? { display: "inline" } : { display: "none" }
              }
            >
              In Stock
            </button>
            <button
              className="product__header__button"
              style={
                quantityCount === 1
                  ? { display: "inline", background: "red" }
                  : { display: "none" }
              }
            >
              Low Stock
            </button>
            <button
              className="product__header__button-oos"
              style={
                quantityCount === 0
                  ? { display: "inline" }
                  : { display: "none" }
              }
            >
              Out of Stock
            </button>
          </div>
        </div>
        <div className="product__summary">
          <div className="product__container__description">
            <h4 className="product__headings">ITEM DESCRIPTION</h4>
            <h4 className="product__name">{this.state.products.desc}</h4>
          </div>
          <div className="product__wrapper">
            <div className="product__container__dual">
              <div className="product__container">
                <h4 className="product__headings">ORDERED BY</h4>
                <h4 className="product__data">
                  {this.state.products.orderedBy}
                </h4>
              </div>
              <div className="product__container">
                <h4 className="product__headings">REFERENCE NUMBER </h4>
                <h4 className="product__data">{this.state.products.ref}</h4>
              </div>
            </div>
            <div className="product__container__dual">
              <div className="product__container">
                <h4 className="product__headings">LAST ORDERED</h4>
                <h4 className="product__data">
                  {this.state.products.lastOrdered}
                </h4>
              </div>
              <div className="product__container">
                <h4 className="product__headings">LOCATION</h4>
                <h4 className="product__data">
                  {this.state.products.location}
                </h4>
              </div>
            </div>
            <div className="product__container">
              <h4 className="product__headings">QUANTITY</h4>
              <h4 className="product__data">{this.state.products.quantity}</h4>
            </div>
            <div className="product__container">
              <h4 className="product__headings">CATEGORIES</h4>
              <h4 className="product__data">
                {this.state.products.categories}
              </h4>
            </div>
          </div>
        </div>
        <div className="product__button__wrapper">
          <Link to={`/edit/${this.state.products.warehouse}/${this.state.products.ref}`}>
            <button className="product__button__edit">
              <h4>EDIT</h4>
            </button>
          </Link>
        </div>
      </>
    );
  }
}
