import React from 'react';

const SocialLinks = () => {
    return (
        <div className="social">
            <a
                href="https://www.instagram.com/ig._.raahul?igsh=MWE0MnVlMTJpYXB1ZA%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                title="Link to author's Instagram profile"
            >
                <i className="fab fa-instagram" />
            </a>
            <a
                id="profile-link"
                href="https://github.com/Rahul-Bagali"
                target="_blank"
                rel="noopener noreferrer"
                title="Link to author's GitHub Profile"
            >
                <i className="fab fa-github" />
            </a>
            <a
                href="https://linkedin.com/in/rahul-bagali"
                target="_blank"
                rel="noopener noreferrer"
                title="Link to author's LinkedIn Profile"
            >
                <i className="fab fa-linkedin" />
            </a>
        </div>
    );
};

export default SocialLinks;