import React from "react";
import backArrow from "../../assets/Icons/SVG/Icon-back-arrow.svg";

export default function productHeader() {
  return (
    <div className="product__header">
      <div className="product__header__wrapper">
        <div className="product__header__title__wrapper">
          <img
            className="product__header__icon"
            src={backArrow}
            alt="back arrow"
          />
          <h1 className="product__header__title">Product Name</h1>
        </div>
        <button className="product__header__button">In Stock</button>
        <button className="product__header__button-oos">Out of Stock</button>
      </div>
    </div>
  );
}
