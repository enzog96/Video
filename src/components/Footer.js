import React from 'react';
import "./FooterStyles.css"
import {FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter} from "react-icons/fa"
import neon from "neon-colors"

const Footer = () => {

        let style1 = {color: '#F000FF', marginRight: '2rem'}
        let style2 = {color: '#F000FF', marginRight: '1rem'}
    return (
        
        

        <div className="footer">
            <div className='footer-container'>
                <div className='left'>
                    <div className="location">
                        <FaSearchLocation size={20} style={style1}/>
                    
                        <div>
                            <p>123 Acme St.</p>
                            <h4>Houston, Tx</h4>
                        </div>
                    </div>
                    <div className='phone'>
                        <h4><FaPhone size={20} style={style1}/> 1-800-123-1234</h4>
                    </div>
                    <div className='email'>
                        <h4><FaMailBulk size={20} style={style1}/> trips@galaxy.com</h4>
                    </div>

                </div>
            <div className='right'>
                <h4 style={{color: neon.purple}}>About the company</h4>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elt, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"</p>
                <div className='social'>
                    <FaFacebook size={30} style={style2}/>
                    <FaTwitter size={30} style={style2}/>
                    <FaLinkedin size={30} style={style2}/>
                </div>
            </div>    

            </div>
            
        </div>
    );
};

export default Footer;