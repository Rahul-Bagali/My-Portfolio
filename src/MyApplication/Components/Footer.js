import React from 'react';
import SocialLinks from './SocialLinks';

const Footer = () => {
    return (
        <footer>
            <div className="wrapper">
                <p style={{ marginBottom: '0' }}>Rahul Bagali® | {new Date().getFullYear()} </p>
                <SocialLinks />
            </div>
        </footer>
    );
};

export default Footer;