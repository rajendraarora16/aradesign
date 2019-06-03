import React, { Component, Fragment, useState } from 'react'
import Slider from 'react-slick'
import Scramble from 'react-scramble'
import axios from 'axios'
import Header from '../components/header'
import '../styles/project-detail.less'

class SimpleSlider extends Component {
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
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            autoplay: false,
            slidesToScroll: 1,
            arrows: false,
            autoplaySpeed: 2000
        }
        const { images } = this.props
        return (
            <div className="sliderWrapper" onMouseEnter={this.play} onMouseLeave={this.pause}>
                <Slider {...settings} ref={slider => (this.slider = slider)}>
                    {images && images.map((item, index) => (
                        <div key={index}>
                            <img src={item} alt="" />
                        </div>
                    ))}
                </Slider>
            </div>
        );
    }
}

class PeopleDetail extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.closeClick = this.closeClick.bind(this)
        this.state = {isModalOpen: false }
    }
    state = {
        data: []
    }

    componentDidMount() {
        axios
            .get('https://api.myjson.com/bins/160sf3')
            .then(res => this.setState({ data: res.data }))
            .catch(error => console.log('Err: ', error))
    }


    renderProjectDetailSlider = (data) => {
        return (
            <SimpleSlider images={data.projectImages} />
        )
    }

    handleClick = (e) => {
        const { isModalOpen } = this.state
        this.setState({ isModalOpen: true })
    }  

    closeClick = (e) => {
        this.setState({ isModalOpen: false })
    }

    renderProjectDetail = (data) => {
        return (
            <Fragment>
                <div className="column column-right">
                    <div className="detail-content">
                        <h2>{data.name}</h2>
                        <div className="tags">
                            <span>
                            <Scramble
                                autoStart
                                text={`JAIPUR, ${data.location.toUpperCase()} |`}
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
                            </span>
                            <span>
                                <Scramble
                                    autoStart
                                    text={`${data.type.toUpperCase()} |`}
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
                            </span>
                            <span>
                                <Scramble
                                    autoStart
                                    text={`${data.status.toUpperCase()} |`}
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
                            </span>
                            <span>
                                <Scramble
                                    autoStart
                                    text={`${data.size.toUpperCase()} |`}
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
                            </span>
                        </div>
                        <p>{data.details}</p>
                    </div>
                </div>
            </Fragment>
        )
    }
    render() {
        const { data, isModalOpen } = this.state
        return (
            <div className="main-container">
                <div className="row">
                    <div className="container">
                        <Header />
                    </div>
                </div>
                <div className="super-container">
                    <div className="row">
                        <div className="container project-details">
                            <div className='grid'>
                                <div className="column column-left">
                                    <div className="slider-section" onClick={this.handleClick}>
                                        {data && data.length > 0 && this.renderProjectDetailSlider(data[0])}
                                    </div>
                                </div>
                                {data && data.length > 0 && this.renderProjectDetail(data[0])}
                            </div>
                        </div>
                    </div>
                    {
                        isModalOpen 
                        && (
                            <div className="slider-popup" onClick={this.closeClick}>
                                <div class="close-menu"><div class={isModalOpen ? 'close cross active' : 'close cross'}></div></div>
                                <div className="slider-inner">
                                    <div className="column column-left">
                                        <div className="slider-section">
                                            {data.length > 0 && this.renderProjectDetailSlider(data[0])}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default PeopleDetail
