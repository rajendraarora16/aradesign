import React, { Component, Fragment } from 'react'
import ReactTooltip from 'react-tooltip'
import Header from '../components/header'
import { triangleImage } from '../constants/variables'
import '../styles/contact.less'


class Contact extends Component {
    render() {
        return (
            <Fragment>
                <div className="main-container">
                    <div className="row">
                        <div className="container">
                            <Header />
                        </div>
                    </div>
                    <div className="super-container">
                        <div className="row">
                            <div className="container contact-container">
                                <div className="map-section">
                                    <img src="https://expertschoice.in/ara/team/ara-map.png" alt="" usemap="#planetmap"/>
                                    <map name="planetmap">
                                        <area shape="circle" alt="red" title="" coords="847,308,7" href="javascript:void(0);" target="" />
                                        <area shape="circle" alt="red" title="" coords="847,302,7" href="javascript:void(1);" target="" />
                                        <area shape="circle" alt="red" title="" coords="847,299,7" href="javascript:void(2);" target="" />
                                        <area shape="circle" alt="red" title="" coords="847,269,7" href="javascript:void(3);" target="" />
                                    </map>
                                 </div>
                                <div className="grid">
                                    <div className="column">
                                        <div className="left-content">
                                            <div className="title-text">
                                                <h2 className="rw-sentence">
                                                    <span>A part of us everywhere</span>
                                                </h2>
                                            </div>
                                            <p><span data-tip data-for='georgia' data-event='click focus'>Georgia</span> | <span>Dubai</span> | <span>Abu Dhabi</span> |   <span>UK</span>  | <span>Qatar</span> |
                                            <span>Mumbai</span> |  <span>Delhi</span> | <span>Bengaluru</span> | <span>Chennai</span> | <span>Hyderabad</span> |   <span>Kolkata</span> | </p>
                                            <h4>
                                                CONTACT FOR MORE INFORMATION TEL: <a href="tel:91-2226482236">91-2226482236</a>, <a href="tel:91-2226482237">91-2226482237</a>, MOBILE: <a href="91-9820143289">91-9820143289</a>, EMAIL: <a href="contact@aradesign.in ">contact@aradesign.in </a><br/>
                                                ADDRESS: <a href="https://goo.gl/maps/9XAd2XqWz3mjJ9j17" target="_blank">1st Floor, Dwarka, 57 Tagore Road, Santacruz (W), Mumbai, Maharashtra 400054</a>
                                            </h4>
                                            <ReactTooltip id='georgia' globalEventOff='click'>
                                                <div className="project-lst">
                                                    <div className="list">
                                                        <div className="image">
                                                            <img src="http://aradesign.in/content/project/thumbnail/hermosa_1.jpg" />
                                                        </div>
                                                        <div className="name">
                                                            <span>Hermosa Studio</span>
                                                        </div>
                                                    </div>
                                                    <div className="list">
                                                        <div className="image">
                                                            <img src="http://aradesign.in/content/project/thumbnail/hermosa_1.jpg" />
                                                        </div>
                                                        <div className="name">
                                                            <span>Hermosa Studio</span>
                                                        </div>
                                                    </div>
                                                    <div className="list">
                                                        <div className="image">
                                                            <img src="http://aradesign.in/content/project/thumbnail/hermosa_1.jpg" />
                                                        </div>
                                                        <div className="name">
                                                            <span>Hermosa Studio</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </ReactTooltip>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Contact
