import React from 'react';
import backgroundImage from '../../Assets/Images/Background.jpg'

const About = () => {
    return (
        <section id="about" style={{ background: `url(${backgroundImage}) center right no-repeat`, backgroundSize: 'cover' }}>
            <div className="wrapper">
                <article>
                    <div className="title">
                        <h3>Who's this?</h3>
                        <p className="separator" />
                    </div>
                    <div className="desc full">
                        <h4 className="subtitle">You can call me Rahul Bagali.</h4>
                        <p>
                            I work as a web developer out of Bengaluru, India's stunning green city.
                        </p>
                        <p>
                            In addition to solving problems, I truly enjoy creating visually appealing and
                            user-friendly products. I'm constantly picking up fresh expertise; the more, the better.
                            Nothing compares to the excitement I get when I get on my bike and go on an adventure,
                            racing through the air as I discover new trails and undiscovered routes. I enjoy going to
                            new locations because it gives me a sense of freedom, especially when those trips take me
                            to beautiful mountains and verdant forests.
                        </p>
                    </div>
                    <div className="title">
                        <h3>What's his job?</h3>
                        <p className="separator" />
                    </div>
                    <div className="desc">
                        <h4 className="subtitle">I'm a programmer.</h4>
                        <p>
                            I have a bachelor's degree in electronics and communication engineering and am an enthusiastic
                            front-end developer. I combine technical expertise with a strong sense of design, having a strong
                            background in electrical systems and communication technologies.
                        </p>
                        <p>
                            I love finding creative solutions to challenging problems, and I'm always looking for ways to
                            improve user experiences on the web. I am flexible and prepared to work with a variety of teams to
                            accomplish shared objectives. I speak Hindi, Kannada, and English comfortably.
                        </p>
                    </div>
                    <div className="desc">
                        <p>
                            My area of expertise is developing high-performing online apps that put user happiness and operational
                            effectiveness first. Having worked with Golang for a year and JavaScript for three, my areas of expertise
                            are improving data retrieval procedures, creating scalable structures, and maximizing system performance.
                        </p>
                        <p>
                            Developing interactive prototypes, putting automated testing into practice, and incorporating analytics
                            tools to track application performance are all part of my job. In order to expedite project delivery and
                            improve product quality, I am committed to improving user interfaces and guaranteeing high code quality
                            while promoting cross-functional team communication.
                        </p>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default About;