import React, { useState } from 'react';
import SocialLinks from './SocialLinks';
import emailjs from 'emailjs-com';
import PopUp from './PopUp';

const Contact = () => {
    const [popUp, setpopUp] = useState(false);
    const [PopUpMsg, setPopUpMsg] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    console.log(formData)
    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send('service_6ki9urk', 'template_5902rfb', {
            ...formData,
            to_email: 'rahulbagali218@gmail.com',
        }, 'bKi0Xsdwo4LQTNCo1')
            .then((response) => {
                setFormData({ name: '', email: '', message: '' });
                setPopUpMsg('Successful')
                setpopUp(true);
            })
            .catch((error) => {
                setPopUpMsg('Failed')
                setpopUp(true);
            });
    };
    return (
        <React.Fragment>
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
                    <form id="contact-form" action="#" onSubmit={handleSubmit}>
                        <input placeholder="Name" name="name" type="text" value={formData.name} onChange={handleChange} required />
                        <input placeholder="Email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                        <textarea placeholder="Message" type="text" name="message" value={formData.message} onChange={handleChange} required />
                        <input className="buttons cta" id="submit" value="Submit" type="submit" />
                    </form>
                </div>
            </section>
            {popUp && <PopUp setpopUp={setpopUp} PopUpMsg={PopUpMsg} />}
        </React.Fragment>
    );
};

export default Contact;