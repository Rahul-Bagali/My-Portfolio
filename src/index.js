import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Creating a root element to manage the React application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the App component inside the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);