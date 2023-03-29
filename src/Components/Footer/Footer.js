import React from 'react';
import location from './location.png';
import mobile from './mobile.png';
import gmail from './gmail.png';
import twitter from './twitter.png'
import './Footer.css'

const Footer = () => {
    return (
<div>
    <footer style={{backgroundColor:"#1e1e1e", padding:"50px 0px 50px 0px"}}>
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
                    <div className='icon-flex mb-3'>
                        <img src={twitter} alt=""></img>
                        <p className='text-color '>Donec ullamcorper metus auctor fringilla. Nullam quis.</p>
                    </div>
                    <div className='icon-flex'>
                        <img src={twitter} alt=""></img>
                        <p className='text-color '>Vestibulum id ligula porta  euismod semper. Maecenas faucibus mollis.</p>
                    </div>
                </div>
                <div className='col-md-3'>
                    <h4 className='footer-first'>Popular Posts</h4>
                    <p className='text-color2'>Vivamus sagittis lacus vel augue laoreet rutrum dolor auctor.<br></br>14 Nov, 2012 </p>
                    <p className='text-color2 mt-5'>Scelerisque nisl consectetur et. <br></br>22 May, 2012  </p>
                    <p className='text-color2'>Pellentesque ornare sem lacinia quam venenatis vestibulum. <br></br>15 July, 2012 </p>
                </div>
                <div className='col-md-3'>
                    <h4 className='footer-first'>About Us</h4>
                    <p className='text-color2'>Vestibulum id ligula porta felis euismod semper. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
                    <p className='text-color2'>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus curabitur blandit tempus.</p>
                </div>
            </div>
            <hr style={{border:"2px solid #383838"}}></hr>
            <p className='footer-text'><small >&copy;2013 Marble. All rights reserved. Theme by elemis.</small></p>
        </div>
    </footer>
</div>
    );
};

export default Footer;