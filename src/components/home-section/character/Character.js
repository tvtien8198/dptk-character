import React from 'react'

import './Character.scss'
import HomeSection from './../HomeSection';

import {
    Swiper,
    SwiperSlide
} from 'swiper/react'
import { characterData } from '../../../assets/data/Data';
import CharacterCard from './CharacterCard';
import { bgCharacter } from '../../../assets/data/Images';

const Character = props => {
    return (
        <HomeSection
            className={`champion ${props.isActive ? 'active' : ''}`}
            contentClassName="overlay"
            bgImage={bgCharacter}
        >
            <div className="container relative">
                <div className="champion-list">
                    <Swiper
                        slidesPerView={'auto'}
                        spaceBetween={0}
                        grabCursor={true}
                        nested={true}
                    >
                        {
                            characterData.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <CharacterCard item={item} id={index} />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </HomeSection>
    )
}

export default Character
