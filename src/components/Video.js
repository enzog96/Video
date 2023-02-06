import React from 'react';
import { Link } from 'react-router-dom';
import "./VideoStyles.css"
import spaceVideo from '../asset/space.mp4'
import skyVideo from '../asset/sky.mp4';
import popopoVideo from '../asset/popopo.mp4';
import neon from "neon-colors"

const Video = () => {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={popopoVideo} type='video/mp4' />
            </video>
            <div className='content'>
                <h1>Galaxy-Travel</h1>
                <p style={{color: neon.purple}}>World's first civilian space travel.</p>
            
            <div>
                <Link  to='/training' className='btn'>Training</Link>
                <Link  to='/contact' className='btn'>Launch</Link>
            </div>
        </div>
        </div>
    ); 
};

export default Video;