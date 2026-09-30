import React, { memo, useEffect } from 'react';
import Success from '../../Assets/Images/Success.svg';
import Error from '../../Assets/Images/Error.svg';

const PopUp = ({ closePopUp, popUpMsg }) => {
    const isSuccess = popUpMsg === 'Successful';

    // Close popup on Escape key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') closePopUp();
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [closePopUp]);

    return (
        <div
            className="overlay"
            style={{ zIndex: 100, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            onClick={closePopUp}
            role="dialog"
            aria-modal="true"
            aria-label={isSuccess ? 'Email sent successfully' : 'Failed to send email'}
        >
            <div className="popup" onClick={(e) => e.stopPropagation()}>
                <button className="close" onClick={closePopUp} aria-label="Close">&times;</button>
                <div className="content">
                    <img className="ImageWrap" src={isSuccess ? Success : Error} alt={isSuccess ? 'Success' : 'Error'} />
                    <h1>{isSuccess ? 'Email sent successfully.' : 'Failed to send email!'}</h1>
                </div>
            </div>
        </div>
    );
};

export default memo(PopUp);
