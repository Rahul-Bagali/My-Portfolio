import React, { useState, useEffect } from 'react';
import Menu from '../Components/Menu';
import NavMenu from '../Components/NavMenu';
import Header from '../Components/Header';
import About from '../Components/About';
import Projects from '../Components/Projects';
import Contact from '../Components/Contact';

const LandingPage = () => {
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        const navbar = document.querySelector('#navbar');
        const header = document.querySelector('#welcome-section');
        const forest = document.querySelector('.forest');
        const silhouette = document.querySelector('.silhouette');
        let forestInitPos = -300;

        const handleScroll = () => {
            let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

            if (scrollPos <= window.innerHeight) {
                silhouette.style.bottom = `${parseInt(scrollPos / 6)}px`;
                forest.style.bottom = `${parseInt(forestInitPos + scrollPos / 6)}px`;
            }

            if (scrollPos - 100 <= window.innerHeight) {
                header.style.visibility = header.style.visibility === 'hidden' ? 'visible' : header.style.visibility;
            } else {
                header.style.visibility = 'hidden';
            }

            if (scrollPos + 100 >= window.innerHeight) {
                navbar.classList.add('bg-active');
            } else {
                navbar.classList.remove('bg-active');
            }
        };

        const internalLinks = document.querySelectorAll('a[href^="#"]');
        const navSmoothScrolling = () => {
            internalLinks.forEach(link => {
                link.addEventListener('click', e => {
                    e.preventDefault();
                    document.querySelector(link.hash).scrollIntoView({
                        block: 'start',
                        behavior: 'smooth'
                    });
                });
            });
        };

        window.addEventListener('scroll', handleScroll);
        navSmoothScrolling();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            internalLinks.forEach(link => {
                link.removeEventListener('click', e => { });
            });
        };
    }, []);

    return (
        <React.Fragment>
            <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
            <NavMenu showMenu={showMenu} setShowMenu={setShowMenu} />
            <Header />
            <About />
            <Projects />
            <Contact />
        </React.Fragment>
    );
};

export default LandingPage;
