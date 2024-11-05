import React from "react";
import trackTime from "../tempo2-images/fourth/Multiple ways to track time.webp"

export default function Fourth(){
    return(
        <section className="fourth row1">
            <div className="simple">
                <div id="simplefirst">
                    <h1>Seamless time tracking</h1>
                    <p>Time tracking has never been easier with Tempo's seamless integration into Jira.</p>
                </div>
                <div className="row1">
                    <div className="items" id="items1">
                        <div>
                            <h3><b>Calendar integrations</b></h3>
                            <p>Google Calendar and Office 365 integrations make time tracking quick and easy.</p>
                        </div>
                        <div id="blueitem">
                            <h3><b>Easy adoption</b></h3>
                            <p>Users learn to use Tempo quickly with its easy and intuitive user interface.</p>
                        </div>
                    </div>
                    <div className="fourthimage">
                        <img src={trackTime} alt="" />
                    </div>
                    <div className="items">
                        <div>
                            <h3><b>Multiple ways to track time</b></h3>
                            <p>From My Work to keyboard shortcuts, there are several ways to track time.</p>
                        </div>
                        <div>
                            <h3><b>Customization and automated suggestions</b></h3>
                            <p>Smart suggestions help users keep track of their time without disrupting their work.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}