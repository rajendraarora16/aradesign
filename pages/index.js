import React, { Component, Fragment } from 'react'
import Header from '../components/header'
import Pattern from '../components/screen-pattern'
import { triangleImage } from '../constants/variables'
import '../styles/index.less'

class Home extends Component {
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
                            <div className="container home-container">
                                <div className="grid">
                                    <div className="column">
                                        <div className="left-content">
                                            <div className="title-text">
                                                <h2 className="rw-sentence">
                                                    <span>We are</span>
                                                    <div className="rw-words rw-words-1">
                                                        <span>geometry from memories</span>
                                                        <span>nuances of native</span>
                                                        <span>creators of current</span>
                                                        <span>life in layers</span>
                                                    </div>
                                                </h2>
                                            </div>
                                            <p>ARA Designs characterizes architecture as an art and investigation of ensuring our urban
                                            communities and structures fit with our varied clientele exhibits our diverse work exposure. 
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="screen__video">
                    <video  autoPlay="autoplay" loop playsInline="" muted="">
                        <source src="http://aradesign.in/content/common/vid.mp4" type="video/mp4" />
                        <source src="http://aradesign.in/content/common/vid.webm" type="video/webm" />
                        <source src="http://aradesign.in/content/common/vid.ogg" type="video/ogg" />
                    </video>
                </div>
                <Pattern animate />
            </Fragment>
        )
    }
}

export default Home
