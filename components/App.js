import React from 'react';
import Weather from "./weather";
import "../css/App.css";

class App extends React.Component{

    constructor(){
        super();
    }

    componentDidMount(){
        console.log("Component Mounted");
    }

    render(){
        return(

            <div>
                <div className = "mainHeader" id = "headerBar">
                <link href="https://fonts.googleapis.com/css?family=Abel&display=swap" rel="stylesheet"/>

                    <h1>The Weather App</h1>
                    <h3>Check the current weather in your city</h3>
                </div>

                
                
                <Weather/>

                
            </div>

                
        )
    }
}

export default App;
