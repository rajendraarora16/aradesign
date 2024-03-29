import React, { Fragment, useState } from 'react'
import Link from 'next/link'
import { triangleImage } from '../../constants/variables'
import Scramble from 'react-scramble'
import './style.less'

const Menu = () => {
    const [active, setActive] = useState(false)
    const toggleActive = (e) => {
        setActive(!active)
        setTimeout(function(){
            !active && document.getElementById('menu-triangle') ? document.getElementById('menu-triangle').classList.add('none') : document.getElementById('menu-triangle').classList.remove('none')
            !active && document.getElementById('menu-close') ? document.getElementById('menu-close').classList.add('active') : document.getElementById('menu-close').classList.remove('active')
        }, 200);
        setTimeout(function(){
            !active && document.getElementById('menu-triangle') ? document.getElementById('menu-triangle').classList.add('none') : document.getElementById('menu-triangle').classList.remove('none')
        }, 300);
    }   
    const linkList = [
        {
            text: 'HOME',
            url: '/home'
        },{
            text: 'PROJECTS',
            url: '/projects'
        },{
            text: 'ABOUT',
            url: '/about'
        },{
            text: 'CONTACT',
            url: '/contact'
        }
    ]

    const listItem = () => {
        return (
            <Fragment>
                {linkList.map((item, index) => (
                    <div key={index} className="menu">
                        <span className="icon"><img src={triangleImage} /></span>
                        <Link href={item.url}>
                            <div className="name">
                                <Scramble
                                    autoStart
                                    text={item.text}
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
                            </div>
                        </Link>
                    </div>
                ))}
            </Fragment>
        )
    }

    return (
        <div>
            <a href="javascript:void(0);" className={active ? 'menu active' : 'menu'} id="menu-triangle" onClick={toggleActive}>
                <img src={triangleImage} />
            </a>
            <div className={`menu-wrapper ${active ? 'show' : 'hide'}`}>
                <div className="close-menu" ><div className="close cross" id="menu-close" onClick={toggleActive}></div></div>
                <div className="nav">
                    {listItem()}
                </div>
                <div className="close bottom">
                    <p>At ARA Design from extensive urban plans to the littlest of furniture subtleties, our work consistently weaves interior and exterior spaces.
                    </p>
                    <span><a href="https://www.instagram.com/ara.designs_firm/" target="_balnk" ><img src="http://aradesign.in/content/common/insta.png" alt="instagram aradesign" /></a></span>
                </div>
            </div>
        </div>
    )
}

export default Menu
