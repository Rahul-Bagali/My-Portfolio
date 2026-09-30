import React, { memo } from 'react';

const NavMenu = ({ showMenu, toggleMenu, navBgActive }) => {
    return (
        <nav id="navbar" className={navBgActive ? 'bg-active' : ''}>
            <div className="nav-wrapper">
                <p className="brand">
                    <strong>Rahul Bagali</strong>
                </p>
                <button
                    onClick={toggleMenu}
                    className={showMenu ? 'menu-button active' : 'menu-button'}
                    aria-label="Toggle navigation menu"
                    aria-expanded={showMenu}
                >
                    <span />
                </button>
            </div>
        </nav>
    );
};

export default memo(NavMenu);
