import React from 'react'

import './GalleryCharacter.scss'
import { VideoCharacter } from '../../../assets/data/Data';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import HomeSection from '../HomeSection';
import { bgCharacter } from '../../../assets/data/Images';


const GalleryCharacter = props => {


    const tabListItem = VideoCharacter.map((item, index) => {
        return (
            <Tab key={index} className="gallery-character__tab"> 
                <div className="img__thumbs">
                    <img className="lazyload blur-up" data-src={item.imgThumb} src={item.imgThumb} alt={item.fullName} />
                </div>
            </Tab>
        )
    })

    const tabPanelItem = VideoCharacter.map((item, index) => {
        return (
            <TabPanel key={index} className="gallery-character__panel"> 
                <span>{item.fullName}</span>
                <video 
                    id={`video-${index}`}
                    loop={true}
                    muted={true}
                    autoPlay={item.video && true}
                    className="overlay"
                >
                    <source src={item.video} type="video/mp4"/>
                </video>
            </TabPanel>
        )
    })

    return (
            <HomeSection
                className={`champion ${props.isActive ? 'active' : ''}`}
                contentClassName="overlay"
                bgImage={bgCharacter}
            >
               <Tabs className="gallery-character">
                    <TabList className="gallery-character__tablist">
                        {tabListItem}
                    </TabList>
                    {tabPanelItem}
                </Tabs>
            </HomeSection>
    )
}

export default GalleryCharacter
