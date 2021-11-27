import React, { useRef } from 'react'

import './CharacterCard.scss'

const CharacterCard = props => {

    const cardRef = useRef(null)

    const item = props.item
    const onClick = () => {
        document.querySelector(`#champ-detail-${props.id}`).classList.add('active')
    }

    return (
        <div className="champion-card" ref={cardRef} onClick={onClick} >
            <div className="frame overlay__frame">
                <div className="bg-image bg" style={{backgroundImage: `url(${item.imgAvatar})`}}></div>
                <img className="lazyload blur-up" data-src={item.imgBody} src={item.imgBody} alt="" />
            </div>
            
            <div className="name">{item.fullName}</div>
        </div>
    )
}

export default CharacterCard
