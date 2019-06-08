import React, { Component, Fragment, useState } from 'react'
import Slider from 'react-slick'
import Scramble from 'react-scramble'
import axios from 'axios'
import Header from '../components/header'
import Pattern from '../components/screen-pattern'
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
        console.log('images', images)
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
        data: [],
        projectID: ''
    }

    componentDidMount() {
        const projectID = window.location.search.split('=')[1]
        this.setState({ projectID: projectID - 1 })

        axios
            .get('https://api.myjson.com/bins/164rel')
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
                        {
                            data.name && (
                                <h2>
                                    <Scramble
                                        autoStart
                                        text={`${data.name}`}
                                        steps={[
                                        {
                                            roll: 5,
                                            action: '+',
                                            type: 'all',
                                        },
                                        {
                                            action: '-',
                                            type: 'forward',
                                        },
                                        ]}
                                    /> 
                                </h2>
                            )
                        }
                        <div className="tags">
                            {
                                data.location && (
                                    <span>
                                        {data.location.toUpperCase()} |
                                    </span>
                                )
                            }
                            {
                                data.type && (
                                    <span>
                                        {data.type.toUpperCase()} |
                                    </span>
                                )
                            }
                            {
                                data.status && (
                                    <span>
                                        {data.status.toUpperCase()} |
                                    </span>
                                )
                            }
                            {
                                data.size && (
                                    <span>
                                        {data.size.toUpperCase()} |
                                    </span>
                                )
                            }
                        </div>
                        {
                            data.details && (
                                <p>{data.details}</p>
                            )
                        }
                    </div>
                </div>
            </Fragment>
        )    
    }
    render() {
        const { data, isModalOpen, projectID } = this.state
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
                            <div className="container project-details">
                                <div className='grid'>
                                    <div className="column column-left">
                                        <div className="slider-section" onClick={this.handleClick}>
                                            {data && data.length > 0 && projectID && this.renderProjectDetailSlider(data[projectID])}
                                        </div>
                                    </div>
                                    {data && data.length > 0 && projectID && this.renderProjectDetail(data[projectID])}
                                </div>
                            </div>
                        </div>
                        {
                            isModalOpen 
                            && (
                                <div className="slider-popup" onClick={this.closeClick}>
                                    <div className="close-menu"><div className={isModalOpen ? 'close cross active' : 'close cross'}></div></div>
                                    <div className="slider-inner">
                                        <div className="column column-left">
                                            <div className="slider-section">
                                                {data.length > 0 && projectID  && this.renderProjectDetailSlider(data[projectID])}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
                <Pattern />
            </Fragment>
        )
    }
}

export default PeopleDetail
