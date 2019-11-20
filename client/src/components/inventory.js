import React, { Component } from "react";
import TableHeader from "./inventory/inventoryTableHeader";
import axios from "axios";

export default class inventory extends Component {
  constructor() {
    super();
    this.state = {
      inventory: []
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:8080/inventory`).then(res => {
      // console.log(res);
      this.setState({
        inventory: res.data
      });
    });
  }
  render() {
    let newInventory = this.state.inventory.map(item => {
      return item.products.map(function(product) {
        return (
          <div className='inventory__item' key={product.ref}>
            <div className='inventory__group'>
              <h4 className='table__header-headings-map'>ITEM</h4>
              <h2 className='inventory__name'>{product.name}</h2>
              <h4 className='inventory__description'>{product.desc}</h4>
            </div>
            <h4 className='table__header-headings-map'>LAST ORDERED</h4>
            <h4 className='inventory__lastOrdered'>{product.lastOrdered}</h4>
            <h4 className='table__header-headings-map'>LOCATION</h4>
            <h4 className='inventory__location'>{product.location}</h4>
            <h4 className='table__header-headings-map'>QUANTITY</h4>
            <h4 className='inventory__quantity'>{product.quantity}</h4>
            <h4 className='table__header-headings-map'>STATUS</h4>
            <h4 className='inventory__status'>{product.status}</h4>
          </div>
        );
      });
    });
    console.log(this.state.inventory);
    return (
      <div className='inventory'>
        <h1 className='inventory__heading'>Inventory</h1>
        <TableHeader />
        {newInventory}
      </div>
    );
  }
}
