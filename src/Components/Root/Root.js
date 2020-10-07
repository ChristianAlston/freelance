import React from 'react'
import Burger from '../Burger/Burger'
import HeroSection from '../Main/HeroSection'
import Content1 from '../Content1/Content1'
import Content2 from '../Content2/Content2'
import Content3 from '../Content3/Content3'
import Footer from '../Footer/Footer'

const Root = () => {
    return (
        <div className='root'>
            <Burger />
            <HeroSection />
            <Content1 />
            <Content2 />
            <Content3 />
            <Footer />
        </div>
    )
}

export default Root