import React from 'react';
import portfolio from '../../Assets/Images/portfolio.png';

const Projects = () => {
    return (
        <section id="projects">
            <div className="projects-container">
                <div className="heading">
                    <h3 className="title">My Works</h3>
                    <p className="separator" />
                    <p className="subtitle">
                        I've been working on the following projects lately.
                    </p>
                </div>
                <div className="projects-wrapper">
                    <div className="project">
                        <a className="project-link" target="_blank" rel="noopener noreferrer">
                            <img className="project-image" src={portfolio} alt='Screenshot of portfolio.' />
                        </a>
                        <div className="project-details">
                            <div className="project-tile">
                                <p className="icons">
                                    <i className='react' />
                                </p>
                                "My portfolio"
                            </div>
                            <div className="buttons">
                                <a href="https://github.com/Rahul-Bagali/My-Portfolio" target="_blank" rel="noopener noreferrer">
                                    View source <i className="fas fa-external-link-alt" />
                                </a>
                                <a target="_blank" rel="noopener noreferrer">
                                    Try it Live <i className="fas fa-external-link-alt" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <small>
                        Built using React.JS, JavaScript, HTML, CSS.
                    </small>
                    <p>
                        I created this portfolio website with a simple, responsive design to showcase my work, abilities, and expertise.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Projects;