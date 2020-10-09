import React from 'react'
import { useState } from 'react'
import NavMenu from '../NavMenu/NavMenu'
import './Burger.css'

const Burger = () => {
    const [show, setShow] = useState(false)

    return (
        <div>
            <div className='burger' onClick={() => setShow(!show)} >
                <div className='line1'></div>
                <div className='line2'></div>
            </div>
            {show && <NavMenu />}
        </div>
    )
}


export default Burger