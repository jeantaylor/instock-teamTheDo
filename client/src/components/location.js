import React, { Component } from "react";
import TableHeader from "./location/LocationTableHeader";
import axios from "axios";
export default class location extends Component {
  constructor() {
    super();
    this.state = {
      locations: []
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:8080/locations`).then(res => {
      // console.log(res);
      this.setState({
        locations: res.data
      });
    });
  }
  render() {
    console.log(this.state.inventory);

    let newLocation = this.state.locations.map(location => {
      return (
        <div className='locations__item'>
          <h4 className='locations__warehouse'>{location.warehouse}</h4>
          <h2 className='locations__name'>{location.name}</h2>
          <h4 className='locations__position'>{location.position}</h4>
          <h4 className='locations__phone'>{location.phone}</h4>
          <h4 className='locations__email'>{location.email}</h4>
          <h4 className='locations__quantity'>{location.quantity}</h4>
          <h4 className='locations__status'>{location.catagories}</h4>
        </div>
      );
    });

    return (
      <div className='locations'>
        <h1 className='location__heading'>locations</h1>
        <TableHeader />
        <h1 className='inventory__heading'>Location</h1>
        {newLocation}
      </div>
    );
  }
}
