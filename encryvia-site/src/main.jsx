// src/main.jsx
// 🚀 Yahan se pura React app start hota hai (React Router + CSS setup)
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // BrowserRouter ko import kiya
import App from './App';
import './index.css'; // Global CSS ko import kiya

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 🌐 BrowserRouter poore app ko routing functionality deta hai */}
    <BrowserRouter>
      <App /> {/* App component yahan render hota hai, jahan sari routing aur layout hai */}
    </BrowserRouter>
  </React.StrictMode>
);