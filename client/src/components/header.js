import React from 'react'; 
import logo from "../assets/Logo/Logo-instock.svg"; 

export default function header() {
    return (
        <header className="header">
            <div className="header__wrapper">
                <a href="/"><img className="header__logo" src={logo} alt="InStock logo" /></a>
                    <nav className="header__nav">
                        <ul className="header__nav-menu">
                            <a className="header__nav-link" href="/">
                                <li className="header__nav-item">Inventory</li>
                            </a>
                            <a className="header__nav-link" href="/">
                                <li className="header__nav-item">Locations</li>
                            </a>
                        </ul>
                    </nav>
        </div>
    </header>
    )
}

