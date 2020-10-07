import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <div className='footer'>

            <h1 className='contact'>See anything you like?</h1>
            <Link to='/Service'>  <button className='start'>Get Started Here</button></Link>
            <div className='profile'>
                <ul className='creds'>
                    <li>Christian Alston</li>
                    <li>full-stack developer</li>
                    <li>christianalstondev@gmail.com</li>
                    <a target='blank' href='https://github.com/ChristianAlston'><li>https://github.com/ChristianAlston</li></a>
                </ul>
            </div>
        </div>
    )
}

export default Footer