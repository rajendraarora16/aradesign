import React, { Component, Fragment } from 'react'
import Slider from "react-slick"
import Scramble from 'react-scramble'
import Header from '../components/header'
import Pattern from '../components/screen-pattern'
import { triangleImage } from '../constants/variables'
import '../styles/index.less'

class Slider1 extends Component {
    constructor(props) {
        super(props);
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
    }

    play = () => {
        this.slider.slickPlay()
    }
    
    pause = () => {
        this.slider.slickPause()
    }

    render(){
        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            fade: true,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplaySpeed: 2000,
            arrows : false,
        }
        return (
            <div className="sliderWrapper" onMouseEnter={this.play} onMouseLeave={this.pause}>
                <Slider {...settings} ref={slider => (this.slider = slider)}>
                    <div>
                        <img src="https://expertschoice.in/ara/team/home1.jpg" alt="" />
                    </div>
                </Slider>
            </div>
        );
    }
}

class Slider2 extends Component {
    constructor(props) {
        super(props);
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
    }

    play = () => {
        this.slider.slickPlay()
    }
    
    pause = () => {
        this.slider.slickPause()
    }

    render(){
        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            fade: true,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplaySpeed: 2000,
            arrows : false,
        }
        return (
            <div className="sliderWrapper" onMouseEnter={this.play} onMouseLeave={this.pause}>
                <Slider {...settings} ref={slider => (this.slider = slider)}>
                    <div>
                        <img src="https://expertschoice.in/ara/team/home2.jpg" alt="" />
                    </div>
                </Slider>
            </div>
        );
    }
}

class Slider3 extends Component {
    constructor(props) {
        super(props);
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
    }

    play = () => {
        this.slider.slickPlay()
    }
    
    pause = () => {
        this.slider.slickPause()
    }

    render(){
        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            fade: true,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplaySpeed: 2000,
            arrows : false,
        }
        return (
            <div className="sliderWrapper" onMouseEnter={this.play} onMouseLeave={this.pause}>
                <Slider {...settings} ref={slider => (this.slider = slider)}>
                    <div>
                        <img src="https://expertschoice.in/ara/team/home3.jpg" alt="" />
                    </div>
                </Slider>
            </div>
        );
    }
}

class Home extends Component {
    renderSliderContent = (number) => {
        if (typeof window !== 'undefined') {
            document.querySelector('.slider-section').style["display"] = "none";
            document.querySelector(`.slider${number}`).style["display"] = "block";
        }
    }

    clearSliderContent = (number) => {
        if (typeof window !== 'undefined') {
            document.querySelector(`.slider${number}`).style["display"] = "none";
        }
    }

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
                                                    <div class="rw-words rw-words-1">
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
                                    <div className="column column-right">
                                        <div className="project-sliders">
                                            <div className="slider-section slider1" id="slider1">
                                                <Slider1 />
                                            </div>
                                            <div className="slider-section slider2" id="slider2">
                                                <Slider2 />
                                            </div>
                                            <div className="slider-section slider3" id="slider3">
                                                <Slider3 />
                                            </div>
                                        </div>
                                        <div className="bullets">
                                            <div className="list">
                                                <span
                                                    id="bullet1"
                                                    onMouseEnter={() => this.renderSliderContent(1)}
                                                    onMouseLeave={() => this.clearSliderContent(1)}
                                                >
                                                    <img src={triangleImage} />
                                                </span>
                                                <span
                                                    id="bullet2"
                                                    onMouseEnter={() => this.renderSliderContent(2)}
                                                    onMouseLeave={() => this.clearSliderContent(2)}
                                                >
                                                    <img src={triangleImage} />
                                                </span>
                                                <span
                                                    id="bullet3"
                                                    onMouseEnter={() => this.renderSliderContent(3)}
                                                    onMouseLeave={() => this.clearSliderContent(3)}
                                                >
                                                    <img src={triangleImage} />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Pattern />
            </Fragment>
        )
    }
}

export default Home
