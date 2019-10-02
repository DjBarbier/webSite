import React, { Component } from 'react';
import "../../styleSheets/style.css";

class TopBar extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <div className="topBar" >
                <h2>Dale Barbier</h2>
        </div>
        )

    }
}

export default TopBar;