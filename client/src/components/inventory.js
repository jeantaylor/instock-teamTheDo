import React, { Component } from "react";
import { Link } from "react-router-dom";
import TableHeader from "./inventory/inventoryTableHeader";
import CreateButton from "./inventory/inventoryCreateButton";
import axios from "axios";
import KbabMenu from "./inventory/InventoryKbabMenu";
import ProductSummary from "./inventory/productSummary";

export default class inventory extends Component {
  constructor() {
    super();
    this.state = {
      inventory: []
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:8080/inventory`).then(res => {
      //console.log(res);
      this.setState({
        inventory: res.data
      });
    });
  }
  render() {
    let newInventory = this.state.inventory.map(item => {
      return item.products.map(function(product) {
        return (
          <div className="inventory__item" key={product.ref}>
            <div className="inventory__group">
              <h4 className="table__header-headings-map">ITEM</h4>
              <Link
                to={`/inventory/${product.ref}`}
                params={{ product: `${product.ref}` }}
              >
                <h2 className="inventory__name">{product.name}</h2>
              </Link>
              <h4 className="inventory__description">{product.desc}</h4>
            </div>{" "}
            <div className="inventory__group">
              <h4 className="table__header-headings-map">LAST ORDERED</h4>
              <h4 className="inventory__lastOrdered">{product.lastOrdered}</h4>
            </div>{" "}
            <div className="inventory__group">
              <h4 className="table__header-headings-map">LOCATION</h4>
              <h4 className="inventory__location">{product.location}</h4>
            </div>{" "}
            <div className="inventory__group">
              <h4 className="table__header-headings-map">QUANTITY</h4>
              <h4 className="inventory__quantity">{product.quantity}</h4>
            </div>{" "}
            <div className="inventory__group">
              <h4 className="table__header-headings-map">STATUS</h4>
              <h4 className="inventory__status">{product.status}</h4>
            </div>
          </div>
        );
      });
    });
    //console.log(this.state.inventory);
    return (
      <div className="inventory">
        <CreateButton />
        <h1 className="inventory__heading">Inventory</h1>
        <TableHeader />
        {newInventory}
      </div>
    );
  }
}
