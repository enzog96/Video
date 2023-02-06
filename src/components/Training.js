import React from 'react';
import './TrainingStyles.css'
import neon from "neon-colors"

import {Link} from 'react-router-dom'

import Pod from '../asset/pod.jpg'
import Moon from '../asset/moon.jpg'
import Jelly from '../asset/jelly.jpg'
import Vibe from '../asset/vibe.jpg'

const Training = () => {
    return (
        <div className='training'>
            <div className='training-left'>
                <h1 style={{color: neon.purple}}>Training</h1>
                <p>Thorough training is a necessity when traveling to space. We offer all inclusive training for pre-flight and in-flight scenarios</p>
                <Link to='/contact'><button className='btn'>Contact</button></Link>
            </div>
            <div className='right'>
                <div className='img-container'>
                    <div className='image-stack top'>
                        <img src={Jelly} className='img' alt='' />
                    </div>
                    <div className='image-stack bottom'>
                        <img src={Vibe} className='img' alt='' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Training;