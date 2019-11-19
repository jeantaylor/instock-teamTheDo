import React, { Component } from "react";
import TableHeader from "./location/LocationTableHeader";

export default class location extends Component {
  render() {
    return (
      <div className="location">
          <h1 className="location__heading">locations</h1>
        <TableHeader />
      </div>
    );
  }
}
