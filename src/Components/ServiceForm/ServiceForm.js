import React from 'react'
import './ServiceForm.css'

const ServiceForm = () => {
    return (
        <form className='form'>
            <input className='input' placeholder='Hi, my name is' type='text' name='name'></input>
            <input className='input' placeholder='My email address is' type='email' name='email'></input>
            <textarea placeholder='Let me tell you about my vision' name='vision' className='textarea'></textarea>
            <button className='submit'>Submit</button>
        </form>
    )
}

export default ServiceForm