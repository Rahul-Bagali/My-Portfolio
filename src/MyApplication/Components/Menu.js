import React from 'react';
import SocialLinks from './SocialLinks';

const Menu = ({ showMenu, setShowMenu }) => {
    return (
        <div className={`menu-container ${showMenu ? 'active' : 'deactive'}`}>
            <div className="overlay" />
            <div className="menu-items">
                <ul>
                    <li>
                        <a href="#welcome-section" onClick={() => setShowMenu(!showMenu)}>
                            HOME
                        </a>
                    </li>
                    <li>
                        <a href="#about" onClick={() => setShowMenu(!showMenu)}>
                            ABOUT
                        </a>
                    </li>
                    <li>
                        <a href="#projects" onClick={() => setShowMenu(!showMenu)}>
                            PORTFOLIO
                        </a>
                    </li>
                    <li>
                        <a href="#contact" onClick={() => setShowMenu(!showMenu)}>
                            CONTACT
                        </a>
                    </li>
                </ul>
                <SocialLinks />
            </div>
        </div>
    );
};

export default Menu;