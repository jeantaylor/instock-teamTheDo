import React from "react";
//import { link } from "react-router-dom";
import Add from "../../assets/Icons/SVG/Icon-add.svg";

export default function inventoryCreateButton() {
  return (
    <div className="create">
      <button className="create__button" type="button" onClick="">
        <img className="create__button__icon" src={Add} alt="Add Icon" />
      </button>
    </div>
  );
}
