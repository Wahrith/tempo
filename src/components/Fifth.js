import React from "react";
import multipleWays from "../tempo2-images/fourth/Multiple ways to track time.webp"

export default function Fifth(){
    return(
        <section className="fifth row1">
            <div className="simple">
                <div id="simplefirst">
                    <h1>Meaningful reporting</h1>
                    <p>Timesheets lets you see time logged for issues, projects, teams, users, accounts or even custom Jira filters.</p>
                </div>
                <div className="row1">
                    <div className="items">
                        <div id="blueitem">
                            <h3><b>Export Reports</b></h3>
                            <p>Save and export reports as xls, csv or pdf.</p>
                        </div>
                    </div>
                    <div className="fourthimage">
                        <img src={multipleWays} alt="" />
                    </div>
                    <div className="items leftist">
                        <div className="leftist">
                            <h3><b>Insight into the value of time</b></h3>
                            <p>Build custom reports in seconds with granular data and useful insight into your team.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}