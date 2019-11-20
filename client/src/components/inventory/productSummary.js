import React from "react";

export default function productSummary(props) {
  //console.log(props);
  return (
    <div className="product__summary">
      <h4 className="product__summary-headings">ITEM DESCRIPTION</h4>
      <h4 className="inventory__name"></h4>

      <h4 className="product__summary-headings">ORDERED BY</h4>

      <h4 className="product__summary-headings">REFERENCE NUMBER </h4>

      <h4 className="product__summary-headings">LAST ORDERED</h4>

      <h4 className="product__summary-headings">LOCATION</h4>

      <h4 className="product__summary-headings">QUANITTY</h4>

      <h4 className="product__summary-headings">CATEGORIES</h4>
    </div>
  );
}
