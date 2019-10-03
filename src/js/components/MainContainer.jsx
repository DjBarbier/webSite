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
            <React.Fragment>
                <section className="topBar row topBarText" >
                    
                    <div className="col"></div>
                    <div className="col">
                    <h1 className="topBarText">
                            Dale Barbier
                        <small className="text-muted">Full Stack Software Developer</small>
                        </h1></div>
                    <div className="col"></div>
                    
                </section>
                <br></br>
                <section className="container">
                    <div className="row align-items-center">
                        <div className="col-sm-12 col-lg-6">
                            <h2>My Skills</h2>
                            <dt>Front-End</dt>
                            <dd>HTML, CSS, Javascript, React</dd>
                            <dt>Backend</dt>
                            <dd>NodeJs, Python and Working on Java skills</dd>
                            <dt>Databases</dt>
                            <dd>Oracle 12c, MySql</dd>
                            <dt>Other Skills</dt>
                            <dd>Professional Scrum Developer, Guitar if that counts</dd>
                        </div>
                        <div className="col-sm-12 col-lg-6">
                            <h2>School and Experience</h2>
                            <dt>Louisian Tech Univerisy</dt>
                            <dd>Bachelors of Computer Science w/ Concentration in Cyber Security</dd>
                            <dt>Fenway Group</dt>
                            <dd>As an Associate Consultant for 2.5 years I worked on Node and React applications for CenturyLink and Wellington Finacial on both Front-end and Back-End</dd>
                        </div>
                    </div>
                </section>
                <section className="container">

                    <div className="row text-center">
                    <div className="col"></div>
                    <div className="col-6">
                        <h2>My Interests</h2>
                        <dt>Expanding Development Skills</dt>
                        <dd>Currently improving skills using Java, Angular, and Gaining interest in AI</dd>
                        
                    </div>
                    <div className="col"></div>
                        
                    </div>

                </section>


            </React.Fragment>
        )
    }
}

export default MainContainer;
const wrapper = document.getElementById("main-container")
wrapper ? ReactDOM.render(<MainContainer />, wrapper) : false;