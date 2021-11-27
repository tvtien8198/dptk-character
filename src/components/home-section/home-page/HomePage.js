import React, { useState } from 'react'
import { bgHomePage } from '../../../assets/data/Images'
import HomeSection from '../HomeSection'

import './HomePage.scss'

const HomePage = props => {

    const [active, setActive] = useState(false)

    const ToggleModal = () => setActive(!active)

    return (
        <HomeSection
            className={`welcome ${props.isActive ? 'active' : ''}`}
            contentClassName="overlay__totop"
            bgImage={bgHomePage}
        >   
        <div className="trailer-content" >
            <div className="trailer-content__title">
                <span className={`${props.isActive ? 'active' : ''}`}>斗破苍穹</span>
                <h2 className={`${props.isActive ? 'active' : ''}`}>Đấu Phá Thương Khung</h2>
            </div>
            <div className={`trailer-content__button ${props.isActive ? 'active' : ''}`}>
                <a href='/#' onClick={ToggleModal} className="animated__btn">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    {
                        !active 
                        ? <box-icon size='lg' color='white' name='play'></box-icon>
                        : <box-icon size='lg' color='white' name='pause' ></box-icon>
                    }
                    
                </a>
                <p>Watch the trailer</p>
            </div>
            <div className={`trailer-content__video ${active === true ? 'active' : ''}`}>
                <iframe className="lazyload blur-up" data-src={`https://www.youtube.com/embed/KzUACwPvjt0`} src='https://www.youtube.com/embed/KzUACwPvjt0'
                        frameBorder='0'
                        allowFullScreen
                        title='trailer'
                        
                />
            </div>
            
        </div>
            
        </HomeSection>
    )
}

export default HomePage
