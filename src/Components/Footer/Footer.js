import React from 'react';
import location from './location.png';
import mobile from './mobile.png';
import gmail from './gmail.png';
import twitter from './twitter.png'
import './Footer.css'

const Footer = () => {
    return (
<div>
    <footer style={{backgroundColor:"#1e1e1e"}}>
        <div className='container'>
            <div className='row'>
                <div className='col-md-3'>
                    <h4 className='footer-first'>Get In Touch</h4>
                    <p className='footer-second'>Fusce dapibus, tellus commodo, tortor mauris condimentum utellus fermentum, porta sem malesuada magna. </p>
                    <div className='icon-flex'>
                        <img src={location} alt=""></img>
                        <p className='text-color'>Moonshine Street No: 14/05 Light City, Jupiter</p>
                    </div>
                    <div className='icon-flex'>
                            <img src={mobile} alt=""></img>
                            <p className='text-color'>0247 541 65 87</p>
                    </div>
                    <div className='icon-flex'>
                        <img src={gmail} alt=""></img>
                    <p className='text-color'>support@longwave.com</p>
                    </div>
                        
                </div>
                <div className='col-md-3'>
                    <h4 className='footer-first'>Twitter</h4>
                    <div className='icon-flex'>
                        <img src={twitter} alt=""></img>
                        <p className='text-color extra-margin'>Aenean lacinia bibendum nulla sed leo posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
                    </div>
                    <div className='icon-flex'>
                        <img src={twitter} alt=""></img>
                        <p className='text-color '>Donec ullamcorper metus auctor fringilla. Nullam quis.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</div>
    );
};

export default Footer;