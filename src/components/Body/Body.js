import React, { Component } from "react";
import Background from "./photo-couch_2xCropped.jpg"
import "./Body.css";

class Body extends Component {
    render() {
        return (
            <div className="container">
                <img className="background" src={Background} alt="Endless" />
                <div className="text">
                    <h3 className="lineOne">  New Games &amp; Accessories</h3>
                    <h1 className="lineTwo">  Monthly packages. </h1>
                    <h1 className="lineTwo" id="excitement">Excitement delivered daily.</h1>
                    <p className="lineThree">
                        What's the best way to shop for the latest video games
                        <br></br>
                        and peripherals? How about never shopping at all? 
                        <br></br>
                        You'll get new stuff on your doorstep - every month.
                    </p>
                        <br></br>
                    <btn className="button">GET STARTED</btn>
                </div>
            </div>
        )
    }
}

export default Body;
