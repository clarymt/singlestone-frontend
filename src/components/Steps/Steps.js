import React, { Component } from "react";
import "./Steps.css";


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
                // this.versionContent.reduce((a,c) =>
                // !a || c.effectiveDate > a.effectiveDate ? c : a);
                // json.sort((a, b) => a.item.versionContent.effectiveDate + b.item.versionContent.effectiveDate);

                this.setState({
                    isLoaded: true,
                    items: json,
                                        // item: this.items.stepNumber.sort((a,b)=>a.stepNumber > b.stepNumber),

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
            return(
            <div class="API">
                <div class="row">
                    {items.map(item => (
                        <div class="column" key={item.id}>
                            <h1 class="fun" className={item.stepNumber}>{item.stepNumber.toString().padStart(2, "0")}</h1> 
                            <p>{item.versionContent[0].title}</p>
                            <p>{item.versionContent[0].body}</p>
                        </div>
                    ))}
                </div>
            </div>
            )
        }

        
    }
}

export default Steps;

   // new Date(Math.max.apply(null, a.map(function(e) {
    //     return new Date(e.effectiveDate);
    //   })));
//Will possible utilize sort and slice to properly display API
    // sortByProperty(property){  
    //     return function(a,b){  
    //        if(this.state.stepNumber)[property] > (this.state.stepNumber)[property])  
    //           return 1;  
    //        else if(a[property] < b[property])  
    //           return -1;  
       
    //        return 0;  
    //     }  
    //  }
    // a.map(function(e) { return e.effectiveDate; }).sort().reverse()[0]
