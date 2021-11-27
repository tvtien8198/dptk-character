import React from 'react'

import './CharacterDetail.scss'

const CharacterDetail = props => {
    const item = props.item

    const onClose = () => {
        document.querySelector(`#champ-detail-${props.id}`).classList.remove('active')
    }

    return (
        <div
            id={`champ-detail-${props.id}`}
            className={`champion-detail bg-image overlay ${props.active ? 'active' : ''}`}
            style={{backgroundImage: `url(${item.baner})`}}
        >
            <div className="champion-detail__content">
                <div className="content__left">
                    <img className="lazyload blur-up" data-src={item.imgBody} src={item.imgBody} alt="item.fullName" />
                </div>
                <div className="content__right">
                    <span className="another__name">{item.anotherName && item.anotherName.join(', ')}</span>
                    <h2 className="name main-color">{item.fullName}</h2>
                    <span className="main-color size-md">Tu vi: <span className="white-color">{item.power && item.power.join(', ')}</span></span>
                    <br />
                    <span className="main-color size-md">Ngoại hình: <span className="white-color">{item.characterAppearance}</span></span>
                    <div className="story">
                        <h2 className="main-color">Quan hệ</h2>
                        <ul>
                            {
                                item.relationship && item.relationship.map((item,index) => 
                                    <li key={index}>{item}</li>
                                )
                            }
                        </ul>
                        <h2 className="main-color">Tiểu sử</h2>
                        <p>{item.description}</p>
                    </div>
                    <span>{item.fullName}</span>
                </div>
                
            </div>
            
            <div className="champion-detail__close" onClick={onClose}>
                <box-icon color='white' size='40px' name='x'></box-icon>
            </div>          
        </div>
    )
}

export default CharacterDetail
