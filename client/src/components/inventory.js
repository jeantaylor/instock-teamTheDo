import React, { Component } from "react";
import TableHeader from "./inventory/InventoryTableHeader";
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
    console.log(this.state.inventory);

    let newInventory = this.state.inventory.map(item => {
      return (
        <div className='inventory__item' key={item.ref}>
          <div className='inventory__group'>
            <h2 className='inventory__name'>{item.name}</h2>
            <h4 className='inventory__description'>{item.desc}</h4>
          </div>
          <h4 className='inventory__lastOrdered'>{item.lastOrdered}</h4>
          <h4 className='inventory__location'>{item.location}</h4>
          <h4 className='inventory__quantity'>{item.quantity}</h4>
          <h4 className='inventory__status'>{item.status}</h4>
        </div>
      );
    });

    return (
      <div className='inventory'>
        <TableHeader />
        <h1 className='inventory__heading'>Inventory</h1>
        {newInventory}
      </div>
    );
  }
}
