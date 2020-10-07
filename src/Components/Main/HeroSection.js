import React from 'react'
import Box1 from './Box1'
import './HeroSection.css'
import Tag from './Tag'



const HeroSection = () => {
    return (
        <div className='herosection'>
            <Tag />
            <Box1 />
            <h1 className='visions'>Bring Your Visions To <span>Life</span></h1>
            <p className='help'>I can help with that.</p>
        </div>
    )
}

export default HeroSection