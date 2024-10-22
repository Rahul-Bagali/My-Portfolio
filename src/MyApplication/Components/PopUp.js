import React from 'react';
import Success from '../../Assets/Images/Success.svg';
import Error from '../../Assets/Images/Error.svg';

const PopUp = ({ setpopUp, PopUpMsg }) => {
    const handleClose = () => {
        setpopUp(false);
    };

    return (
        <div className="overlay" style={{ zIndex: '100', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="popup">
                {PopUpMsg === 'Successful' ?
                    <React.Fragment>
                        <button className="close" onClick={handleClose}>&times;</button>
                        <div className="content">
                            <img className='ImageWrap' src={Success} alt='Success' />
                            <h1>Email sent successfully.</h1>
                        </div>
                    </React.Fragment> :
                    <React.Fragment>
                        <button className="close" onClick={handleClose}>&times;</button>
                        <div className="content">
                            <img className='ImageWrap' src={Error} alt='Error' />
                            <h1>Failed to send email!</h1>
                        </div>
                    </React.Fragment>
                }
            </div >
        </div >
    );
};

export default PopUp;
