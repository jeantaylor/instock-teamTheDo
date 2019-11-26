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

                <form>
                    <label className="formLabel" htmlFor="editDesc">ITEM DESCRIPTION</label>
                    <textarea name="editDesc" id="editDesc" value={this.state.product.desc}></textarea>
                    <div className="fieldWrapper--large">
                        <div className="fieldWrapper--small">
                            <label className="formLabel" htmlFor="editOrderedBy">ORDERED BY</label>
                            <input className="formInput" name="editOrderedBy" id="editOrderedBy" value={this.state.product.orderedBy} />

                            <label className="formLabel" htmlFor="editLastOrdered">LAST ORDERED</label>
                            <input className="formInput" name="editLastOrdered" id="editLastOrdered" value={this.state.product.lastOrdered} />

                            <label className="formLabel" htmlFor="editQuantity">QUANTITY</label>
                            <input className="formInput" name="editQuantity" id="editQuantity" value={this.state.product.quantity} />
                        </div>
                        <div className="fieldWrapper--small">
                            <label className="formLabel" htmlFor="editrefNum">REFERENCE NUMBER</label>
                            <input className="formInput" name="editrefNum" id="editrefNum" value={this.state.product.ref} />

                            <select>
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
                        </div>
                    </div>
                </form>

                <div className="product__button__wrapper">
                    <button className="product__button__edit">
                        <h4>SAVE</h4>
                    </button>
                </div>
            </>
        );
    }
}
