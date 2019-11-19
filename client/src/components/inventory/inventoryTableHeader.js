import React from "react";

export default function tableHeader() {
  return (
    <div className='table__header'>
      <h4 className='table__header-headings'>ITEM</h4>
      <h4 className='table__header-headings'>LAST ORDERED</h4>
      <h4 className='table__header-headings'>LOCATION</h4>
      <h4 className='table__header-headings'>QUANTITY</h4>
      <h4 className='table__header-headings'>STATUS</h4>
    </div>
  );
}
