import React from 'react'
import './Service.css'
import ServiceForm from '../ServiceForm/ServiceForm'
import Burger from '../Burger/Burger'
import Arrow from '../Service/Arrow'
import { BrowserRouter, Link } from 'react-router-dom'

const Service = () => {
    return (
        <BrowserRouter>
            <div className='servicebox'>
                <Burger />
                <Link to='/' exact><Arrow /></Link>
                <div className='wrap'>
                    <ServiceForm />
                </div>
            </div>
        </BrowserRouter>
    )
}

export default Service