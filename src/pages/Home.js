import React from 'react'

import {
    Swiper,
    SwiperSlide
} from 'swiper/react'

import SwiperCore, {
    EffectFade,
    Mousewheel,
    Pagination
} from 'swiper'


import About from './../components/home-section/about/About';
import Intro from '../components/home-section/intro/Intro';
import Character from '../components/home-section/character/Character';
import CharacterDetail from '../components/home-section/character/CharacterDetail';
import { characterData } from '../assets/data/Data';
import GalleryCharacter from '../components/home-section/gallery/GalleryCharacter';
import HomePage from '../components/home-section/home-page/HomePage';

SwiperCore.use([Mousewheel, Pagination, EffectFade])

const swiperOptions = {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 0,
    mousewheel: true,
    pagination: { clickable: true },
    effect: 'fade',
    speed: 1000
}

const Home = () => {
    return (
        <>
            <Swiper {...swiperOptions}>
                <SwiperSlide>
                    {({ isActive }) => <HomePage isActive={isActive} /> }
                </SwiperSlide>
                <SwiperSlide>
                    {({ isActive }) => <About isActive={isActive} /> }
                </SwiperSlide>
                <SwiperSlide>
                    {({ isActive }) => <Character isActive={isActive} />}
                </SwiperSlide>
                <SwiperSlide>
                    {({ isActive }) => <GalleryCharacter isActive={isActive} />}
                </SwiperSlide>
                <SwiperSlide>
                    {({ isActive }) => <Intro isActive={isActive} />}
                </SwiperSlide>
            </Swiper>

            {
                characterData.map((item, index) => <CharacterDetail item={item} key={index} id={index} />)
            }
            <div className="scroll">
                <box-icon type='solid' name='mouse' color='white'></box-icon>
                <span>Scroll for detail</span>
            </div>
        </>
    )
}

export default Home
