import React, { Component } from "react";
import logo from './logo-endless.svg';
import "./Navbar.css";

class Navbar extends Component {
    render() {
        return(
            <img className="logo" src={logo} alt="Endless" />
        )
    }
}

export default Navbar;
