import React, { Component } from 'react'; 
import kbab from "../../assets/Icons/SVG/Icon-kbab-default.svg"; 

export default class InventoryKbabMenu extends Component {
    render() {
        return (
            <div className="kbabMenu">
                <button className="kbabMenu__btn">
                    <img className="kbabMenu__icon" src={kbab} alt="Kbab Icon" />
                </button>
                <div className="kbabMenu__actions">
                    <button className="kbabMenu__action">
                        Remove
                    </button>
                </div>
            </div>
        )
    }
}

