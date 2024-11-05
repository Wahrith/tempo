import React from "react";
import people from "../tempo2-images/third/circles/people-blue-dark.svg"
import software from "../tempo2-images/third/Jira Software-blue.svg"
import screen from "../tempo2-images/third/Tempo_Screen_Images_Jira_1.png"
import green from "../tempo2-images/third/circles/clock-green.svg"
import blue from "../tempo2-images/third/circles/people-blue.svg"
import yellow from "../tempo2-images/third/circles/yellow-icon.svg"
import boeing from "../tempo2-images/third/logos/boeing.webp"
import vw from "../tempo2-images/third/logos/vw.webp"
import oracle from "../tempo2-images/third/logos/oracle.webp"

export default function Third() {
    return(
        <section className="third">
            <div className="thirddiv">
                <div className="row1" id="thirddiv1">
                    <div>
                        <img src={people} alt="" />
                    </div>
                    <div>
                        <h1>Tempo product suite</h1>
                    </div>
                </div>
                <div className="row" id="thirddiv2">
                    <div id="thirdsubhead" className="column0">
                        <div>
                            <h2>Our time tracking and management product suite</h2>
                            <h5>TEMPO FOR JIRA</h5>
                        </div>
                        <div className="row0">
                            <div>
                                <p>
                                    Automated time tracking in Jira
                                    <br />
                                    <br />
                                    Tempo offers insightful data that helps teams
                                    <br />
                                    better manage their time and finances.
                                </p>
                            </div>
                            <div id="jirasoft">
                                <img src={software} alt="" />
                            </div>
                        </div>
                    </div>
                    <div id="temposcreen">
                        <img src={screen} alt="" />
                    </div>
                </div>
                <div id="thirddiv3" className="column1">
                    <div id="slabs">
                        <div className="slab row0" id="slab1">
                            <div className="abeg">
                                <img src={green} alt="" />
                            </div>
                            <div className="row0" id="timesheets">
                                <div className="up">
                                    <p className="top">Tempo <b>Timesheets</b></p>
                                    <p>Time tracking made easy</p>
                                </div>
                                <div>
                                    <p className="top">Timesheet <b>Reports and Gadgets</b></p>
                                    <p>Lightweight time reporting for Jira</p>
                                </div> 
                            </div>                                     
                        </div>
                        <div className="slab row0" id="slab2">
                            <div className="abeg">
                                <img src={blue} alt="" />
                            </div>
                            <div className="row0">
                                <div className="up" id="planner">
                                    <p className="top">Tempo <b>Planner</b></p>
                                    <p>Optimize your workforce effortlessly</p>
                                </div>
                                <div id="guide">
                                    <p className="top">Tempo's <b>Server Migration Guide</b></p>
                                    <p>Seamless migration from server to cloud</p>
                                </div>
                            </div>
                        </div>
                        <div className="slab row0" id="slab3">
                            <div className="abeg">
                                <img src={yellow} alt="" />
                            </div>
                            <div className="row0" id="budgets">
                                <div className="up">
                                    <p className="top">Tempo <b>Budgets</b></p>
                                    <p>Extensive financial tracking in Jira</p>
                                </div>
                                <div>
                                    <p className="top">Cost Tracker for <b>Tempo Timesheets</b></p>
                                    <p>Simple cost tracking for Timesheets Cloud</p>
                                </div>
                            </div>
                        </div>
                    </div>                   
                </div>
                <div id="thirddiv4" className="row1">
                    <p>
                        20,000+ companies use Tempo
                    </p>
                </div>
                <div className="row1" id="logos">
                    <div className="row container">
                        <div>
                            <img src={boeing} id="boeing" alt="" />
                        </div>
                        <div>
                            <img src={vw} id="vw" alt="" />
                        </div>
                        <div>
                            <img src={oracle} id="oracle" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}