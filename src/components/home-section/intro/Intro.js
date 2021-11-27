import React, { useEffect, useRef } from 'react'
import { bgVideo } from '../../../assets/data/Images'
import ComingSoon from './ComingSoon'

import './Intro.scss'

const Intro = props => {

    const videoRef = useRef(null)

    useEffect(() => {
        videoRef.current.play()
        const pauseVideo = () => {
            if (!document.hidden) {
                videoRef.current.play()
            } else {
                videoRef.current.pause()
            }
        }
        document.addEventListener('webkitvisibilitychange', pauseVideo)

        return() => {
            document.removeEventListener('webkitvisibilitychange', pauseVideo)
        }
    }, [])

    return (
        <div className={`credit overlay ${props.isActive ? 'active' : ''}`}>
            <video
                ref={videoRef}
                loop={true}
                muted={true}
                className="overlay"
            >
                <source src={bgVideo} type="video/mp4"/>
            </video>
            <div className="credit__content">
                <div className="title">
                    <span>Coming Soon</span>
                </div>
                <ComingSoon />
            </div>
        </div>
    )
}

export default Intro
