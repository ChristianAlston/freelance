import React from 'react'
import Box1 from './Box1'
import './HeroSection.css'
import Tag from './Tag'
import Vr from './vr.jpg'


const HeroSection = () => {
    return (
        <div className='herosection'>
            <Tag />
            <Box1 />
            <h1 className='visions'>Bring Your Visions To <span>Life.</span></h1>
            <p className='help'>I can help with that.</p>
            <img src={Vr} className='vr'></img>
        </div>
    )
}

export default HeroSection