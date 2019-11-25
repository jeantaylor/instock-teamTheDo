import React, { Component } from "react";
import { Link } from "react-router-dom";
import backArrow from "../../assets/Icons/SVG/Icon-back-arrow.svg";
import axios from "axios";

export default class EditProduct extends Component {
    render() {
        return (
            <>
                <div className="product__header">
                    <div className="product__header__wrapper">
                        <div className="product__header__title__wrapper">
                            <Link to="/inventory">
                                <img
                                    className="product__header__icon"
                                    src={backArrow}
                                    alt="back arrow"
                                />
                            </Link>
                            <h1 className="product__header__title">
                                Test w/o axios
                            </h1>
                        </div>
                        <button className="product__header__button">In Stock</button>
                        <button className="product__header__button-oos">
                            Out of Stock
                        </button>
                    </div>
                </div>

                <div className="product__button__wrapper">
                    <button className="product__button__edit">
                        <h4>SAVE</h4>
                    </button>
                </div>
            </>
        );
    }
}
