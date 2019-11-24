import React, { Component } from 'react';
import axios from "axios";
import kbab from "../../assets/Icons/SVG/Icon-kebab-default.svg";

export default class InventoryKbabMenu extends Component {
    state = {
        activeBtn: false,
        productRef: this.props.productRef,
    }

    btnToggle = () => {
        if (this.state.activeBtn === false) {
            this.setState({ activeBtn: true })
        } else {
            this.setState({ activeBtn: false })
        }
    }

    deleteProduct = (productRef) => {
        console.log(this.state.productRef);
        const lookup = this.state.productRef;
        axios({
            method: "delete",
            url: ("http://localhost:8080/inventory/" + lookup)
        }).then(resp => {
            console.log(resp.data);
        });
    }

    render() {
        return (
            <div className="kbabMenu">
                <button
                    className="kbabMenu__btn"
                    type="button"
                    onClick={this.btnToggle}
                >
                    <img className="kbabMenu__icon" src={kbab} alt="Kbab Icon" />
                </button>
                {this.state.activeBtn &&
                    <div className="kbabMenu__actions">
                        <button
                            className="kbabMenu__action"
                            id={this.props.productRef}
                            onClick={this.deleteProduct}
                        >
                            Remove
                        </button>
                    </div>
                }
            </div>
        )
    }
}