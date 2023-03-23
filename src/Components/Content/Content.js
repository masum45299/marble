import React from 'react';
import './Content.css';
import content1 from './content1.png';
import content2 from './content2.png';
import content3 from './content3.png';
import content4 from './content4.png';

const Content = () => {
    return (
        <div className='container mb-5'>
            <div className='row'>
                <div className='col-md-3 text-center px-3'>
                    <img className='mb-4' src={content1} alt=""></img>
                    <h4>Pellentesque</h4>
                    <p style={{color:"#616161"}}>Nulla vitae  libero, a pharetra augue. Integer posuere erat a ante venenatis condimentum velit dapibus. </p>
                </div>
                <div className='col-md-3 text-center px-3'>
                    <img className='mb-4' src={content2} alt=""></img>
                    <h4>Consectetur</h4>
                    <p style={{color:"#616161"}}>Vestibulum id ligula porta  euismod semper. Aenean lacinia bibendum nulla sed consectetur dui. </p>
                </div>
                <div className='col-md-3 text-center px-3'>
                    <img className='mb-4' src={content3} alt=""></img>
                    <h4>Tristiquet</h4>
                    <p style={{color:"#616161"}}>Fusce dapibus, cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo risus. </p>
                </div>
                <div className='col-md-3 text-center px-3'>
                    <img className='mb-4' src={content4} alt=""></img>
                    <h4>Fermentum</h4>
                    <p style={{color:"#616161"}}>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum sagittis lacus mollis. </p>
                </div>
            </div>
            <hr style={{height:"2px"}}></hr>
        </div>
    );
};

export default Content;