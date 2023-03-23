import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <header className='mb-5'>
                <div className='header-text'>
                    <h1>We are a digital & branding agency based in London.</h1>
                    <h2>We love to turn great ideas into beautiful products.</h2>
                    <button className='button'>SEE PORTFOLIO</button>
                </div>
        </header>
    );
};

export default Header;
