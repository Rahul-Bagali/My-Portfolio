import React, { useState, useEffect, useCallback, useRef } from 'react';
import Menu from '../Components/Menu';
import NavMenu from '../Components/NavMenu';
import Header from '../Components/Header';
import About from '../Components/About';
import Projects from '../Components/Projects';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';

const LandingPage = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [navBgActive, setNavBgActive] = useState(false);
    const forestRef = useRef(null);
    const silhouetteRef = useRef(null);
    const headerRef = useRef(null);

    const handleScroll = useCallback(() => {
        const scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
        const windowHeight = window.innerHeight;

        // Parallax effect for forest and silhouette
        if (scrollPos <= windowHeight) {
            if (silhouetteRef.current) {
                silhouetteRef.current.style.bottom = `${parseInt(scrollPos / 6)}px`;
            }
            if (forestRef.current) {
                forestRef.current.style.bottom = `${parseInt(-300 + scrollPos / 6)}px`;
            }
        }

        // Hide header when scrolled past
        if (headerRef.current) {
            headerRef.current.style.visibility =
                scrollPos - 100 <= windowHeight ? 'visible' : 'hidden';
        }

        // Toggle navbar background
        setNavBgActive(scrollPos + 100 >= windowHeight);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    // Smooth scrolling for anchor links
    useEffect(() => {
        const handleAnchorClick = (e) => {
            const href = e.currentTarget.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ block: 'start', behavior: 'smooth' });
                }
            }
        };

        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => link.addEventListener('click', handleAnchorClick));

        return () => {
            links.forEach(link => link.removeEventListener('click', handleAnchorClick));
        };
    }, []);

    const toggleMenu = useCallback(() => {
        setShowMenu(prev => !prev);
    }, []);

    return (
        <>
            <Menu showMenu={showMenu} toggleMenu={toggleMenu} />
            <NavMenu showMenu={showMenu} toggleMenu={toggleMenu} navBgActive={navBgActive} />
            <Header headerRef={headerRef} forestRef={forestRef} silhouetteRef={silhouetteRef} />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </>
    );
};

export default LandingPage;
