import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import './NavMenu.css'
import Burger from '../Burger/Burger'
// import X from '../X/X'

const NavMenu = () => {
    return (
        <BrowserRouter>
            <div className='show'>
                <Burger />
                {/* <X /> */}
                <div className='wrapthis'>
                    <ul className='navlist'>
                        <Link to='/' className='linkof'><li>Home</li></Link>
                        <Link to='#projects' className='linkof'><li>Projects</li></Link>
                        <Link to='/Service' className='linkof'><li>Service</li></Link>
                    </ul>
                    <div className='support'>
                        <div className='yes'>
                            <h2 className='my'>Support my work?</h2>
                            <p className='below'>Contact me with your vision below.</p>
                            <ul className='cred'>
                                <li className='stuff'>240-280-6617</li>
                                <li className='stuff'>christianalstondev@gmail.com</li>
                                <ul className='innerlist'>
                                    <li className='inneritem'><i class="fab fa-linkedin-in"></i></li>
                                    <li className='inneritem'><i class="fab fa-github"></i></li>
                                </ul>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default NavMenu