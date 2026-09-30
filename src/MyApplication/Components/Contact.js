import React, { useState, useCallback } from 'react';
import SocialLinks from './SocialLinks';
import emailjs from 'emailjs-com';
import PopUp from './PopUp';

const INITIAL_FORM_STATE = { name: '', email: '', message: '' };

const Contact = () => {
    const [popUp, setPopUp] = useState(false);
    const [popUpMsg, setPopUpMsg] = useState('');
    const [formData, setFormData] = useState(INITIAL_FORM_STATE);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }, []);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        if (isSubmitting) return;

        setIsSubmitting(true);

        emailjs.send('service_6ki9urk', 'template_5902rfb', {
            ...formData,
            to_email: 'rahulbagali218@gmail.com',
        }, 'bKi0Xsdwo4LQTNCo1')
            .then(() => {
                setFormData(INITIAL_FORM_STATE);
                setPopUpMsg('Successful');
                setPopUp(true);
            })
            .catch(() => {
                setPopUpMsg('Failed');
                setPopUp(true);
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    }, [formData, isSubmitting]);

    const closePopUp = useCallback(() => setPopUp(false), []);

    return (
        <>
            <section id="contact">
                <div className="container">
                    <div className="heading-wrapper">
                        <div className="heading">
                            <p className="title">
                                Wish to get in touch with me?
                            </p>
                            <p className="separator" />
                            <p className="subtitle">
                                Kindly contact&nbsp;
                                <a href="mailto:rahulbagali218@gmail.com" className="mail">
                                    rahulbagali218@gmail.com
                                </a>
                                &nbsp;via email or the form below:
                            </p>
                        </div>
                        <SocialLinks />
                    </div>
                    <form id="contact-form" onSubmit={handleSubmit}>
                        <input placeholder="Name" name="name" type="text" value={formData.name} onChange={handleChange} required />
                        <input placeholder="Email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                        <textarea placeholder="Message" name="message" value={formData.message} onChange={handleChange} required />
                        <input
                            className="buttons cta"
                            id="submit"
                            value={isSubmitting ? 'Sending...' : 'Submit'}
                            type="submit"
                            disabled={isSubmitting}
                        />
                    </form>
                </div>
            </section>
            {popUp && <PopUp closePopUp={closePopUp} popUpMsg={popUpMsg} />}
        </>
    );
};

export default Contact;
