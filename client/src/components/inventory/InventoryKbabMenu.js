import React, { Component } from 'react';
import kbab from "../../assets/Icons/SVG/Icon-kebab-default.svg";

export default class InventoryKbabMenu extends Component {
    state = {
        activeBtn: false,
    }

    btnToggle = () => {
        if (this.state.activeBtn === false) {
            this.setState({ activeBtn: true })
        } else {
            this.setState({ activeBtn: false })
        }
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
                            id={this.props.product}
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