import React, { Component } from 'react';
import './HeroImageStyles.css'
import neon from "neon-colors"


class HeroImage extends Component {
    render() {
        const {heading, text} = this.props
        return (
            <div className='hero-img'>
                <div className='heading'>
                    <h1 style={{color: neon.purple}}>{heading}</h1>
                    <p >{text}</p>
                </div>
            </div>
        );
    }
}

export default HeroImage;