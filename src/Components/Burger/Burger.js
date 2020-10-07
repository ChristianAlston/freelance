import React from 'react'
import NavMenu from '../NavMenu/NavMenu'
import './Burger.css'

const Burger = () => {
    return (
        <div>
            <NavMenu />

            <div className='burger'>
                <div className='line1'></div>
                <div className='line2'></div>
            </div>
        </div>
    )
}

export default Burger