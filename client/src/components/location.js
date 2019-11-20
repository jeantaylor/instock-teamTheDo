import React, { Component } from "react";
import TableHeader from "./location/locationTableHeader";
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
          <div className='locations__info-div'>
            <h2 className='locations__warehouse'>{location.warehouse}</h2>
            <h4 className='locations__name'>{location.address}</h4>
          </div>
          <div className='locations__info-div'>
            <h4 className='locations__name'>{location.name}</h4>
            <h4 className='locations__position'>{location.position}</h4>
          </div>
          <div className='locations__info-div'>
            <h4 className='locations__phone'>{location.phone}</h4>
            <h4 className='locations__email'>{location.email}</h4>
          </div>
          <div className='locations__info-div'>
            <h4 className='locations__status'>{location.categories}</h4>
          </div>
        </div>
      );
    });

    return (
      <div className='locations'>
        <h1 className='location__heading'>locations</h1>
        <TableHeader />
        <h1 className='inventory__heading'>Location </h1>
        {newLocation}
      </div>
    );
  }
}
