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
      return (
        <div className='inventory__item' key={item.products.ref}>
          <div className='inventory__group'>
            <h4 className='table__header-headings-map'>ITEM</h4>
            <h2 className='inventory__name'>{item.products.name}</h2>
            <h4 className='inventory__description'>{item.products.desc}</h4>
          </div>
          <h4 className='table__header-headings-map'>LAST ORDERED</h4>
          <h4 className='inventory__lastOrdered'>
            {item.products.lastOrdered}
          </h4>
          <h4 className='table__header-headings-map'>LOCATION</h4>
          <h4 className='inventory__location'>{item.products.location}</h4>
          <h4 className='table__header-headings-map'>QUANTITY</h4>
          <h4 className='inventory__quantity'>{item.products.quantity}</h4>
          <h4 className='table__header-headings-map'>STATUS</h4>
          <h4 className='inventory__status'>{item.products.status}</h4>
        </div>
      );
    });

    return (
      <div className='inventory'>
<<<<<<< HEAD
        <h1 className='inventory__heading'>Inventory</h1>
        <TableHeader />
=======
        <TableHeader />
        <h1 className='inventory__heading'>Inventory </h1>
>>>>>>> 099ddbf0a41a3d6488234f37a8533665dceda601
        {newInventory}
      </div>
    );
  }
}
