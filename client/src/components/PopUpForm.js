import React, { Component } from "react";

export default class popUpForm extends Component {
  uploadNewProduct = event => {
    event.preventDefault();

    if (
      !event.target.product.value ||
      !event.target.lastOrdered.value ||
      !event.target.city.value ||
      !event.target.country.value ||
      !event.target.quantity.value
    ) {
      alert("Please enter all fields. Thank you!");
    } else {
      console.log(
        event.target.product.value,
        event.target.lastOrdered.value,
        event.target.city.value,
        event.target.country.value,
        event.target.quantity.value
      );
      event.target.reset();
    }
  };

  render() {
    return (
      <div className='popUpForm'>
        <h1 className='popUpForm__heading'>Create New</h1>
        <form
          className='popUpForm__form'
          onSubmit={this.uploadNewProduct}
          className='popUpForm__upload'>
          <h4 className='popUpForm__heading-small'>PRODUCT</h4>
          <input
            type='text'
            name='product'
            placeholder='Item Name'
            className='popUpForm__input'
          />
          <input
            type='text'
            name='lastOrdered'
            placeholder='yyyy-mm-dd'
            className='popUpForm__input'
          />
          <input
            type='text'
            name='city'
            placeholder='City'
            className='popUpForm__input'
          />

          <input
            type='text'
            name='country'
            placeholder='Country'
            className='popUpForm__input'
          />
          <input
            type='text'
            name='quantity'
            placeholder='0'
            className='popUpForm__input'
          />
          <input
            type='text'
            name='description'
            placeholder='(Optional)'
            className='popUpForm__input-large'
          />
          <button className='popUpForm__button'>SAVE</button>
        </form>
      </div>
    );
  }
}
