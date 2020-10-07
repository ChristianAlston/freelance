import React from 'react'
import './Content1.css'
import Shape1 from './Shape1'
import Shape2 from './Shape2'

const Content1 = () => {
    return (
        <div className='content1'>
            <h1 className='title'>I believe in great UI/UX</h1>
            <p className='text'>My mission is to create the best products possible for whomever, whenever. I have incredible range when it comes to UI/UX design and I specialize with Front-End Web Development. I'm also pretty decent on the backend of things as well.</p>
            <Shape1 />
            <Shape2 />
        </div>
    )
}

export default Content1