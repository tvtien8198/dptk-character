import React from 'react'
import './Footer.scss'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__inner container">
                <div className="social__left">
                    <box-icon type='logo' color='white' animation='tada-hover' size='26px' name='facebook'></box-icon>
                    <box-icon type='logo' color='white' animation='tada-hover' size='26px' name='twitter'></box-icon>
                    <box-icon type='logo' color='white' animation='tada-hover' size='26px' name='tiktok'></box-icon>
                    <box-icon type='logo' color='white' animation='tada-hover' size='26px' name='instagram'></box-icon>
                </div>
                <div className="social__right">
                    <box-icon type='solid' animation='tada-hover' color='white' size='26px' name='bell'></box-icon>
                    <box-icon color='white' animation='tada-hover' size='26px'name='search'></box-icon>
                </div>
            </div>
        </div>
    )
}

export default Footer
