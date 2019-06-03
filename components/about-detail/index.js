import React, { Fragment, Component } from 'react'
import './style.less'

function AboutDetail() {
    return (
        <div className="row people-row">
            <div className="container about-container">
                <div className="grid">
                    <div className="column text-content">
                        <div className="left-content">
                            <h2>About</h2>
                            <p>
                            ARA Design is a brainchild of Amey Dahanukar (MA Urban Design, UK) and also a partner
                            of Dahanukar Associates. Alongside his team, which he prefers to be called, ‘family’ form a
                            charismatic design firm excelling in Design, Architecture, Urbanism and Interiors. From
                            extensive urban plans to the littlest of furniture subtleties, our work consistently weaves
                            interior and exterior spaces.
                            </p>
                            <p>
                            ARA Designs characterizes architecture as an art and investigation of ensuring our urban
                            communities and structures fit with the manner in which we need to experience our lives.
                            Our varied clientele exhibits our diverse work exposure. Our forte is building relationships. At
                            ARA family, we aim at developing this organization that grows beyond a single entity. The
                            growth of our design family is the growth of our firm.

                            </p>
                        </div>
                    </div>
                    <div className="column column-right">
                        <div className="slider-section">
                            <img src="http://aradesign.in/content/people/amey.jpg" alt="" />
                            <p>
                            <strong>Amey Dahanukar</strong><br/>
                            Principal Architect
                            </p>
                        </div>
                    </div>
                </div>
                <div className="scroll-text">Scroll</div>
                <div class="container-arrow__arrow"></div>
            </div>
        </div>
    )
}

export default AboutDetail
