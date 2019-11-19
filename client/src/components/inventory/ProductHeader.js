import React from "react";
import backArrow from "../../assets/Icons/SVG/Icon-back-arrow.svg";


export default function productHeader() {
  return (
    <div className="product__header">
        <div className="product__header__wrapper">
      <img src={backArrow} alt="back arrow"/>
      <h1 className="product__header">PRODUCT</h1>
      </div>
      <button className="product__instock__button">In Stock</button>
    </div>
  );
}