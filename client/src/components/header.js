import React from 'react'; 
import { NavLink } from "react-router-dom";
import logo from "../assets/Logo/Logo-instock.svg"; 

export default function header() {
    return (
        <header className="header">
            <div className="header__wrapper">
                <NavLink to="/"><img className="header__logo" src={logo} alt="InStock logo" /></NavLink>
                    <nav className="header__nav">
                        <ul className="header__nav-menu">
                            <NavLink className="header__nav-link" 
                            to="/inventory"
                            activeStyle={{
                                color: "$white", 
                                borderBottom: "3px solid $white"
                            }}>
                                <li className="header__nav-item">Inventory </li>
                            </NavLink>
                            <NavLink className="header__nav-link" 
                            to="/locations"
                            activeStyle={{
                                color: "$white",
                                borderBottom: "3px solid $white"
                            }}>
                                <li className="header__nav-item">Locations</li>
                            </NavLink>
                        </ul>
                    </nav>
        </div>
    </header>
    )
}

