import React from "react";
import sound from "../tempo2-images/sound-off.svg"

export default function Second(){
    return(
        <section className="second">
            <div className="row">
                <div>
                    <img src={sound} alt="" />
                </div>
                <div className="seconddiv">
                    <h3>TEMPO ACQUIRES ALM WORKS</h3>
                    <p>To deliver the first purpose-built program and portfolio management suite of apps to the Atlassian Marketplace.</p>
                </div>
                <div className="btn" id="btn3">
                    Learn more
                </div>
            </div>
        </section>
    )
}