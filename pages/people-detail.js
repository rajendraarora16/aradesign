import React from 'react'
import Header from '../components/header'

function PeopleDetail() {
    return (
        <div className="main-container">
            <div className="row">
                <div className="container">
                    <Header />
                </div>
            </div>
            <div className="super-container">
                <div className="row">
                    <div className="container">
                        <div className="grid">
                            <div className="column">
                                <div className="left-content">
                                    <h2>Our People</h2>
                                    <p></p>
                                </div>
                            </div>
                            <div className="column column-right">
                                <div className="slider-section">
                                    <img src="https://expertschoice.in/ara/ara-abt-slider.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    )
}

export default PeopleDetail