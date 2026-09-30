import React, { memo } from 'react';
import SocialLinks from './SocialLinks';

const Menu = ({ showMenu, toggleMenu }) => {
    return (
        <div className={`menu-container ${showMenu ? 'active' : 'deactive'}`}>
            <div className="overlay" />
            <div className="menu-items">
                <ul>
                    <li>
                        <a href="#welcome-section" onClick={toggleMenu}>
                            HOME
                        </a>
                    </li>
                    <li>
                        <a href="#about" onClick={toggleMenu}>
                            ABOUT
                        </a>
                    </li>
                    <li>
                        <a href="#projects" onClick={toggleMenu}>
                            PORTFOLIO
                        </a>
                    </li>
                    <li>
                        <a href="#contact" onClick={toggleMenu}>
                            CONTACT
                        </a>
                    </li>
                </ul>
                <SocialLinks />
            </div>
        </div>
    );
};

export default memo(Menu);
