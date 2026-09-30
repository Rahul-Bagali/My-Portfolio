import React, { memo } from 'react';

const Header = ({ headerRef, forestRef, silhouetteRef }) => {
    return (
        <header id="welcome-section" ref={headerRef}>
            <div className="forest" ref={forestRef} />
            <div className="silhouette" ref={silhouetteRef} />
            <div className="moon" />
            <div className="container">
                <h1>
                    <span className="line">I do</span>
                    <span className="line">
                        <span className="color">Full-Stack</span> Development.
                    </span>
                </h1>
                <div className="buttons">
                    <a href="#projects">my portfolio</a>
                    <a href="#contact" className="cta">get in touch</a>
                </div>
            </div>
        </header>
    );
};

export default memo(Header);
