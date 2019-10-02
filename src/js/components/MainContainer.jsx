import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../../styleSheets/style.css";
import TopBar from './TopBar.jsx'

class MainContainer extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <div className="mainContainer">
                <TopBar />
            </div>
        )
    }
}

export default MainContainer;
const wrapper = document.getElementById("main-container")
wrapper ? ReactDOM.render(<MainContainer />, wrapper) : false;