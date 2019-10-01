import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../../../styleSheets/style.css";

class MainContainer extends Component {
    constructor() {
        // super()
        this.state = {}
    }

    render() {
        return (
            <div className="mainContainer">
                <p>Lets get started</p>
            </div>
        )
    }
}

export default MainContainer;
const wrapper = document.getElementById("main-container")
wrapper ? ReactDOM.render(<MainContainer/>, wrapper) : false;