import React, { Component } from "react";
import axios from "axios";

export default class ProductSummary extends Component {
  componentDidMount() {
    axios.get(`http://localhost:8080/inventory`).then(res => {
      //console.log(res.data);
      const inventoryProps =
        props.data &&
        props.datas.map(function(data, index) {
          console.log(data);

          render();
          {
            return (
              <div className="product__summary">
                <h4 className="product__summary-headings">ITEM DESCRIPTION</h4>
                <h4 className="inventory__name">name</h4>

                <h4 className="product__summary-headings">ORDERED BY</h4>

                <h4 className="product__summary-headings">REFERENCE NUMBER </h4>

                <h4 className="product__summary-headings">LAST ORDERED</h4>

                <h4 className="product__summary-headings">LOCATION</h4>

                <h4 className="product__summary-headings">QUANTITY</h4>

                <h4 className="product__summary-headings">CATEGORIES</h4>
              </div>
            );
          }
        });
    });
  }
}
