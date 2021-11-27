import React from 'react'
import { logo } from '../../assets/data/Images'

import './Header.scss'


const Header = () => {
    return (
        <div className="header">
            <div className="header__inner container">
                <div className="header__logo">
                    <img src={logo} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Header
