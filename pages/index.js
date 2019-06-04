import React, { Component, Fragment } from 'react'
import Scramble from 'react-scramble'
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
                                                    <span>We are -</span>
                                                    <div className="rw-words rw-words-1">
                                                        <span>Wholistic</span>
                                                        <span>Miesian</span>
                                                        <span>Gestalt</span>
                                                        <span>Pragmatic</span>
                                                    </div>
                                                </h2>
                                            </div>
                                            <p>ARA Designs characterizes architecture as an art and investigation of ensuring our urban
                                            communities and structures fit with our varied clientele exhibits our diverse work exposure. 
                                            </p>
                                            <h4>
                                                <Scramble
                                                    autoStart
                                                    text="HOME"
                                                    steps={[
                                                    {
                                                        roll: 10,
                                                        action: '+',
                                                        type: 'all',
                                                    },
                                                    {
                                                        action: '-',
                                                        type: 'forward',
                                                    },
                                                    ]}
                                                />
                                                </h4>
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
                    </video>
                </div>
                <Pattern />
            </Fragment>
        )
    }
}

export default Home
