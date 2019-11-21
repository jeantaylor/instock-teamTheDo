import React, { Component } from "react";
import { Link } from "react-router-dom";
import TableHeader from "./inventory/inventoryTableHeader";
import Add from "../assets/Icons/SVG/Icon-add.svg";
import axios from "axios";
import KbabMenu from "./inventory/InventoryKbabMenu";
// import ProductSummary from "./inventory/productSummary";

const url = `http://localhost:8080/inventory`;
export default class inventory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      inventory: []
    };
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  uploadNewProduct = event => {
    event.preventDefault();
    if (
      !event.target.product.value ||
      !event.target.lastOrdered.value ||
      !event.target.city.value ||
      !event.target.country.value ||
      !event.target.quantity.value ||
      !event.target.warehouse.value
    ) {
      alert("Please enter all fields. Thank you!");
    } else {
      axios
        .put(url, {
          warehouse: event.target.warehouse.value,
          product: event.target.product.value,
          lastOrdered: event.target.lastOrdered.value,
          location: event.target.city.value + event.target.country.value,
          quantity: event.target.quantity.value
        })
        .then(res => {
          event.target.reset();
        });
    }
  };

  componentDidMount() {
    axios.get(`http://localhost:8080/inventory`).then(res => {
      //console.log(res);
      this.setState({
        inventory: res.data
      });
    });
  }

  render() {
    const Modal = ({ handleClose, show, children }) => {
      const showHideClassName = show
        ? "modal display-block"
        : "modal display-none";

      return (
        <div className={showHideClassName}>
          <section className='modal-main'>
            {children}
            <button onClick={handleClose}>close</button>
          </section>
        </div>
      );
    };

    let newInventory = this.state.inventory.map(item => {
      return item.products.map(function(product) {
        return (
          <div className='inventory__item' key={product.ref}>
            <div className='inventory__group'>
              <h4 className='table__header-headings-map'>ITEM</h4>
              <Link
                to={`/inventory/${product.ref}`}
                params={{ product: `${product.ref}` }}>
                <h2 className='inventory__name'>{product.name}</h2>
              </Link>
              <h4 className='inventory__description'>{product.desc}</h4>
            </div>{" "}
            <div className='inventory__group'>
              <h4 className='table__header-headings-map'>LAST ORDERED</h4>
              <h4 className='inventory__lastOrdered'>{product.lastOrdered}</h4>
            </div>{" "}
            <div className='inventory__group'>
              <h4 className='table__header-headings-map'>LOCATION</h4>
              <h4 className='inventory__location'>{product.location}</h4>
            </div>{" "}
            <div className='inventory__group'>
              <h4 className='table__header-headings-map'>QUANTITY</h4>
              <h4 className='inventory__quantity'>{product.quantity}</h4>
            </div>{" "}
            <div className='inventory__group'>
              <h4 className='table__header-headings-map'>STATUS</h4>
              <h4 className='inventory__status'>
                {product.status}
                <KbabMenu productRef={product.ref} />
              </h4>
            </div>
          </div>
        );
      });
    });
    return (
      <div className='inventory'>
        <h1 className='inventory__heading'>Inventory</h1>
        <TableHeader />
        {newInventory}
        <div className='create'>
          <button
            className='create__button'
            type='button'
            onClick={this.showModal}>
            <img className='create__button__icon' src={Add} alt='Add Icon' />
          </button>
          <Modal show={this.state.show} handleClose={this.hideModal}>
            <div className='popUpForm'>
              <h1 className='popUpForm__heading'>Create New</h1>
              <form
                action='/'
                method='PUT'
                onSubmit={this.uploadNewProduct}
                className='popUpForm__upload-form'>
                <h4 className='popUpForm__heading-small'>PRODUCT</h4>
                <input
                  type='text'
                  name='product'
                  placeholder='Item Name'
                  className='popUpForm__input'
                />
                <h4 className='popUpForm__heading-small'>WAREHOUSE</h4>
                <input
                  type='text'
                  name='warehouse'
                  placeholder='warehouse'
                  className='popUpForm__input'
                />
                <h4 className='popUpForm__heading-small'>LAST ORDERED</h4>
                <input
                  type='text'
                  name='lastOrdered'
                  placeholder='yyyy-mm-dd'
                  className='popUpForm__input'
                />
                <h4 className='popUpForm__heading-small'>CITY</h4>
                <input
                  type='text'
                  name='city'
                  placeholder='City'
                  className='popUpForm__input'
                />
                <h4 className='popUpForm__heading-small'>COUNTRY</h4>
                <input
                  type='text'
                  name='country'
                  placeholder='Country'
                  className='popUpForm__input'
                />
                <h4 className='popUpForm__heading-small'>QUANTITY</h4>
                <input
                  type='text'
                  name='quantity'
                  placeholder='0'
                  className='popUpForm__input'
                />
                <h4 className='popUpForm__heading-small'>ITEM DESCRIPTION</h4>
                <input
                  type='text'
                  name='description'
                  placeholder='(Optional)'
                  className='popUpForm__input-large'
                />
                <button className='popUpForm__button'>SAVE</button>
              </form>
            </div>
            ;
          </Modal>
        </div>
      </div>
    );
  }
}
