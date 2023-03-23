import React from 'react';
import './Section.css';
import section1 from './section1.png';
import section2 from './section2.png';
import section3 from './section3.png';

const Section = () => {
    return (
        <div className='container mb-5'>
            <h3 style={{fontSize:"18px",marginBottom:"25px"}}>OUR LATEST WORKS</h3>
        
            <div className='display-grid'>
                <div >
                    <img className='width mb-4' src={section1} alt=""></img>
                    <h4 style={{fontSize:"18px",fontWeight:"bold"}}>Nobis Business Card</h4>
                    <h5 className='font-weight' style={{fontSize:"13px",color:"#c8c8c8"}}>Business Card, Graphic</h5>
                    <p style={{color:"#5c5c5c"}}>Sed posuere consectetur est at lobortis. Porta sagittis lacus vel augue laoreet rutrum.</p>
                </div>
                <div >
                    <img className='width mb-4' src={section2} alt=""></img>
                    <h4 style={{fontSize:"18px",fontWeight:"bold"}}>New Fun Project</h4>
                    <h5 className='font-weight' style={{fontSize:"13px",color:"#c8c8c8"}}>Web Design, Application</h5>
                    <p style={{color:"#5c5c5c"}}>Nulla vitae elit libero, a pharetra augue. Donec sed odio dui. Vestibulum id ligula porta felis.</p>
                </div>
                <div >
                    <img className='width mb-4' src={section3} alt=""></img>
                    <h4 style={{fontSize:"18px",fontWeight:"bold"}}>Passionaries Branding Cover</h4>
                    <h5 className='font-weight' style={{fontSize:"13px",color:"#c8c8c8"}}>Branding, Graphic Design</h5>
                    <p style={{color:"#5c5c5c"}}>Curabitur blandit tempus porttitor. Donec id elit non mi porta gravida at eget metus.</p>
                </div>
            </div>
            
        </div>
    );
};

export default Section;