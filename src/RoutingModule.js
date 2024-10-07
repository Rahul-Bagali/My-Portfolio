import React from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LandingPage from './MyApplication/Containers/LandingPage';

const RoutingModule = () => {
    return (
        <Router basename='/'>
            <Routes>
                <Route path='/' element={<Navigate to='/Home' replace />} />
                <Route path='/Home' element={<LandingPage />} />
            </Routes>
        </Router>
    );
}

export default RoutingModule;
