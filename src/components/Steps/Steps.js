import React, { Component } from "react";
import "./Steps.css";


//Bottom section of page
class Steps extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }


    //API
    componentDidMount() {
        fetch('https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge')
            .then(res => res.json())
            .then((json) => {
                json.sort((a, b) => a.stepNumber - b.stepNumber);

                this.setState({
                    isLoaded: true,
                    items: json,

                })
            });
    }

    render() {

        var { isLoaded, items } = this.state;
        //To test if JSON file stored in link is read
        if (!isLoaded) {
            return <div>Loading...</div>;
        }

        else {
            return (
                <div class="API">
                    <div class="row">
                        {items.map(item => (
                            <div class="column" key={item.id}>
                                {/* Ordering display from JSON */}
                                <h1 id="titleNumber" className={item.stepNumber}>{item.stepNumber.toString().padStart(2, "0")}</h1>
                                <hr></hr>
                                <p class="titleHeading">{item.versionContent[0].title}</p>
                                <p class="titleBody">{item.versionContent[0].body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )
        }


    }
}

export default Steps;