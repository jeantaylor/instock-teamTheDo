import React from "react";
import { Link } from "react-router-dom";
import Add from "../../assets/Icons/SVG/Icon-add.svg";

export default function inventoryCreateButton() {
  return (
    <div className='create'>
      <Link to='/createNew'>
        <button className='create__button' type='button'>
          <img className='create__button__icon' src={Add} alt='Add Icon' />
        </button>
      </Link>
    </div>
  );
}
