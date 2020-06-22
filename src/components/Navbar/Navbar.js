import React, { Component } from "react";
import logo from './logo-endless.svg';
import "./Navbar.css";

class Navbar extends Component {
    render() {
        return(
            <div className= "background">
            <img className="logo" src={logo} alt="Endless"/>
            </div>
        )
    }
}

export default Navbar;
