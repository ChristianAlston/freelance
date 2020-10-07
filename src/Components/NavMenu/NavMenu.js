import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import './NavMenu.css'

const NavMenu = () => {
    return (
        <BrowserRouter>
            <div className='navmenu'>
                <ul className='navlist'>
                    <Link to='/' className='linkof'><li>Home</li></Link>
                    <Link to='#projects' className='linkof'><li>Projects</li></Link>
                    <Link to='/Service' className='linkof'><li>Service</li></Link>
                </ul>
            </div>
        </BrowserRouter>
    )
}

export default NavMenu