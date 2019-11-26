import React, { Component } from "react";
import { Link } from "react-router-dom";
import backArrow from "../../assets/Icons/SVG/Icon-back-arrow.svg";
import axios from "axios";

export default class EditProduct extends Component {
    state = {
        product: {}
    };

    componentDidMount() {
        axios
            .get(
                `http://localhost:8080/edit/${this.props.match.params.warehouse}/${this.props.match.params.product}`
            )
            .then(res => {
                //console.log(res.data);
                this.setState({
                    product: res.data
                });
            });
    }

    render() {
        let quantityCount = this.state.product.quantity;
        return (
            <>
                <div className="product__header">
                    <div className="product__header__wrapper">
                        <div className="product__header__title__wrapper">
                            <Link to={`/inventory/${this.state.product.warehouse}/${this.state.product.ref}`}>
                                <img
                                    className="product__header__icon"
                                    src={backArrow}
                                    alt="back arrow"
                                />
                            </Link>
                            <h1 className="product__header__title">
                                {this.state.product.name}
                            </h1>
                        </div>
                    </div>
                </div>

                <form className="edit">
                    <div className="edit__textareaWrapper">
                        <label className="edit__formLabel" htmlFor="editDesc">ITEM DESCRIPTION</label>
                        <textarea rows="5" className="edit__textarea" name="editDesc" id="editDesc" value={this.state.product.desc}></textarea>
                    </div>
                    <div className="edit__fieldWrapper--large">
                        <div className="edit__fieldWrapper--small">
                            <label className="edit__formLabel" htmlFor="editOrderedBy">ORDERED BY</label>
                            <input className="edit__formInput" name="editOrderedBy" id="editOrderedBy" value={this.state.product.orderedBy} />

                            <label className="edit__formLabel" htmlFor="editLastOrdered">LAST ORDERED</label>
                            <input className="edit__formInput" name="editLastOrdered" id="editLastOrdered" value={this.state.product.lastOrdered} />

                            <label className="edit__formLabel" htmlFor="editQuantity">QUANTITY</label>
                            <input className="edit__formInput" name="editQuantity" id="editQuantity" value={this.state.product.quantity} />
                        </div>
                        <div className="edit__fieldWrapper--small">
                            <label className="edit__formLabel" htmlFor="editRefNum">REFERENCE NUMBER</label>
                            <input className="edit__formInput" name="editRefNum" id="editRefNum" value={this.state.product.ref} />

                            <label className="edit__formLabel" htmlFor="editLocation">LOCATION</label>
                            <select className="edit__selectMenu" name="editLocation">
                                <option value={this.state.warehouse}>-- Current Warehouse --</option>
                                <option value="Toronto Warehouse">Toronto Warehouse</option>
                                <option value="Vancouver Warehouse">Vancouver Warehouse</option>
                                <option value="New York Warehouse">New York Warehouse</option>
                                <option value="Nova Scotia Warehouse">Nova Scotia Warehouse</option>
                                <option value="Los Angeles Warehouse">Los Angeles Warehouse</option>
                                <option value="San Diego Warehouse">San Diego Warehouse</option>
                                <option value="Seattle Warehouse">Seattle Warehouse</option>
                                <option value="Portland Warehouse">Portland Warehouse</option>
                                <option value="Cape Town Warehouse">Cape Town Warehouse</option>
                            </select>

                            <label className="edit__formLabel" htmlFor="editrefNum">STATUS</label>

                            <button
                                className="product__header__button"
                                style={
                                    quantityCount === 1
                                     > 1 ? { display: "inline" } : { display: "none" }
                                }
                            >
                                In Stock
            </button>
                            <button
                                className="product__header__button"
                                style={
                                    quantityCount === 1
                                        ? { display: "inline", background: "red" }
                                        : { display: "none" }
                                }
                            >
                                Low Stock
            </button>
                            <button
                                className="product__header__button-oos"
                                style={
                                    quantityCount === 0
                                        ? { display: "inline" }
                                        : { display: "none" }
                                }
                            >
                                Out of Stock
            </button>
                        </div>
                    </div>
                </form>

                <div className="edit__btnWrapper">
                    <button className="edit__cancelBtn">
                        <h4>CANCEL</h4>
                    </button>
                    <button className="edit__saveBtn">
                        <h4>SAVE</h4>
                    </button>
                </div>
            </>
        );
    }
}
