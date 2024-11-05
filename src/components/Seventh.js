import React from "react";
import bigLogo from "../tempo2-images/Tempo Logo 512px-1.svg"

export default function Seventh(){
    return(
        <section className="seventh row1">
            <div className="column0">
                <div className="seventhrow row2">
                    <div className="seventhimage">
                        <img src={bigLogo} alt="" />
                    </div>
                    <hr />
                    <h4>Invest your time</h4>
                    <hr />
                    <div className="btn">Get Started</div>
                </div>
                <hr />
                <div className="row1">
                    <div className="row1" id="number">
                        <div className="column0 numbers">
                            <h6>SOLUTIONS</h6>
                            <button className="color">Timesheets</button>
                            <button className="color">Planner</button>
                            <button className="color" id="space">Cost Tracker for Tempo Timesheets</button>
                            <button className="color">Budgets</button>
                            <button className="color">Timesheet Reports and Gadgets</button>
                            <button className="color">Enterprise Solutions</button>
                        </div>
                        <div className="column0 numbers">
                            <h6>LEARN</h6>
                            <button className="color">Blog</button>
                            <button className="color">Success Stories</button>
                            <button className="color">Guides</button>
                            <button className="color">Video Tutorials</button>
                            <button className="color">Webinars</button>
                            <button className="color">Product Updates</button>
                        </div>
                        <div className="column0 numbers">
                            <h6>CUSTOMERS</h6>
                            <button className="color">Help Center</button>
                            <button className="color">Idea Portal</button>
                            <button className="color" id="space">Atlassian Server Migration</button>
                            <button className="color">Welcome Center</button>
                            <button className="color">Services</button>
                            <button className="color">Contact Support</button>
                            <button className="color">Developers</button>
                            <button className="color">Atlassian Community</button>
                            <button className="color">Early Access Program</button>
                        </div>
                        <div className="column0 numbers">
                            <div>
                                <h6>PRICING</h6>
                                <button className="color">Jira</button>
                            </div>
                            <div className="column0">
                                <h6>PARTNERS</h6>
                                <button className="color">Become a Partner</button>
                                <button className="color">Partner Resources</button>
                            </div>
                            <div className="column0">
                                <h6>ABOUT</h6>
                                <button className="color">About Us</button>
                                <button className="color">Press Releases</button>
                            </div>
                            <div className="column0">
                                <h6>CAREERS</h6>
                                <button className="color">Working at Tempo</button>
                                <button className="color">Open Positions</button>
                            </div>
                        </div>
                        <div className="column0 numbers" id="last">
                            <div className="column0" id="partner">
                                <h6>GET STARTED</h6>
                                <button className="color">Find a partner</button>
                                <button className="color">Schedule a demo</button>
                                <button className="color">Try for free</button>
                                <button className="color">Welcome Center</button>
                            </div>
                            <hr id="small"/>
                            <div id="email">
                                <h4>SUBSCRIBE TO OUR MAILING LIST</h4>
                                <p className="color">Get the inside scoop, previews, news and other fun stuff.</p>
                                <h5 className="color">Email*</h5>
                                <div><input type="email" /></div>
                                <div className="btn">Submit</div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="addresssocials row0" id="socialaddress">
                    <div className="address row0">
                        <div className="column0 division">
                            <div>
                                <h6>ICELAND</h6>
                                <p>Borgartun 37</p>
                                <p>105 Reykjavik</p>
                            </div>
                            <div>
                                <button className="map color">Find on map</button>
                            </div>
                        </div>
                        <div className="column0 division">
                            <div>
                                <h6>USA</h6>
                                <p>67 South Bedford St.</p>
                                <p>Suite 400 West</p>
                                <p>Burlington, MA 01803</p>
                            </div>
                            <div>
                                <button className="map color">Find on map</button>
                            </div>
                        </div>
                        <div className="column0 division" id="canada">
                            <div>
                                <h6>CANADA</h6>
                                <p>1260 Rue Crescent, Suite 200</p>
                                <p>Montreal, Quebec H3G 2A9, Canada</p>
                            </div>
                            <div>
                                <button className="map color">Find on map</button>
                            </div>
                        </div>
                    </div>
                    <div className="socials">
                        <div>
                            <ul className="row0">
                                <li><i className="fa-brands fa-twitter"></i></li>
                                <li><i className="fa-brands fa-linkedin-in"></i></li>
                                <li><i className="fa-brands fa-youtube"></i></li>
                                <li><i className="fa-brands fa-instagram"></i></li>
                            </ul>
                        </div>
                        <div id="year">Tempo 2022</div>
                        <div className="color" id="policy">Legal | EULA | Privacy Policy</div>
                    </div>
                </div>
            </div>
        </section>
    )
}