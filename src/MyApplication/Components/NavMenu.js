import React from 'react';

const NavMenu = ({ showMenu, setShowMenu }) => {
    return (
        <nav id="navbar">
            <div className="nav-wrapper">
                <p className="brand">
                    <strong>Rahul Bagali</strong>
                </p>
                <a onClick={() => setShowMenu(!showMenu)} className={showMenu ? 'menu-button active' : 'menu-button'} role='button'>
                    <span />
                </a>
            </div>
        </nav>
    );
};

export default NavMenu;