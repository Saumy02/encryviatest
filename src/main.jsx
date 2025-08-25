// src/main.jsx (or src/index.js)
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Make sure this path is correct
import './index.css'; // Your global styles

// The App component itself already contains the <Router> from react-router-dom
// So you just need to render App here.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);