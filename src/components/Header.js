import React from "react";
import logo from "../tempo2-images/Tempo Logo Full 512px-1.svg"
import globe from "../tempo2-images/globe.svg"

export default function Header(){
    return(
        <section className="header row1">
            <div id="opening" className="row">
                <div className="header-logo">
                    <img src={logo} alt="" />
                </div>
                <div className="links">
                    <ul>
                        <li>Solutions</li>
                        <li>Learn</li>
                        <li>Customers</li>
                        <li>Pricing</li>
                        <li>Get Started</li>
                    </ul>
                </div>
                <div className="stuff row2">
                    <span className="globe">
                        <img src={globe} alt="" />
                    </span>
                    <span className="btn" id="btn1">
                        Try for free
                    </span>
                </div>
            </div>
        </section>
    )
}