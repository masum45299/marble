import React from 'react';
import './Content.css';
import content1 from './content1.png';
import content2 from './content2.png';
import content3 from './content3.png';
import content4 from './content4.png';

const Content = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-4 text-center'>
                    <img className='mb-4' src={content1} alt=""></img>
                    <h4>Pellentesque</h4>
                </div>

            </div>
        </div>
    );
};

export default Content;