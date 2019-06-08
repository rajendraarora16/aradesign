import React, { Component, Fragment } from 'react'
import axios from 'axios'
import Link from 'next/link'
import Header from '../components/header'
import Pattern from '../components/screen-pattern'
import { triangleImage } from '../constants/variables'
import '../styles/contact.less'


class Contact extends Component {
    constructor(props) {
        super(props);
        this.ShowProjects = this.ShowProjects.bind(this);
        this.closeModal = this.closeModal.bind(this)
        this.state = {showModal: false, cityName: '', }
    }
    state = {
        data: []
    }

    componentDidMount() {
        axios
            .get('https://api.myjson.com/bins/160o11')
            .then(res => this.setState({ data: res.data }))
            .catch(error => console.log(`error => ${error}`))
        // axios
        //     .get('https://api.myjson.com/bins/1d2a9n')
        //     .then(res => this.setState({ data: res.data }))
        //     .catch(error => console.log(`error => ${error}`))
    }

    renderProjectList = (item, index) => (
        <div key={index}>
            <strong>{item.name}</strong>
        </div>
    )

    renderCityList = (item, index) => (
        <span key={index} onClick={this.ShowProjects} data-id={item.cityname}>
            {item.cityname}<span className="pipe">|</span>
        </span>
    )

    ShowProjects = (e) => {
       this.setState({ showModal: true, cityName: e.target.getAttribute('data-id') })
    }  

    closeModal = (e) => {
        this.setState({ showModal: false, cityName: '' })
    }

    render() {
        console.log('this.state.data', this.state.cityName)
        return (
            <Fragment>
                <div className="main-container contact-us">
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
                                            <p>
                                                {this.state.data && this.state.data.map((item, index) => (
                                                    <Fragment key={index}>
                                                        {this.renderCityList(item, index)}
                                                    </Fragment>
                                                ))}
                                            </p>
                                            <h4>
                                                ADDRESS: <a href="https://goo.gl/maps/9XAd2XqWz3mjJ9j17" target="_blank">1st Floor, Dwarka, 57 Tagore Road, Santacruz (W), Mumbai, Maharashtra 400054</a><br />
                                                TEL: <a href="tel:91-2226482236">91-2226482236</a>, <a href="tel:91-2226482237">91-2226482237</a>,&nbsp;&nbsp;&nbsp;  EMAIL: <a href="contact@aradesign.in ">contact@aradesign.in </a><br/>                                               
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {
                            this.state.showModal
                                ? (
                                    <div className="modal-wrapper">
                                        <div className="close-menu" ><div className="close cross active"  id="menu-close" onClick={this.closeModal}></div></div>
                                        <div className="modal-body">
                                            <div className="list">
                                                {this.state.data.map((item, index) => (
                                                    <Fragment key={index}>
                                                        {this.renderProjectList(item, index)}
                                                    </Fragment>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )
                                : null
                        }
                    </div>
                </div>
                <Pattern />
            </Fragment>
        )
    }
}

export default Contact
