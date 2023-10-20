import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import AuthProvider from './Context/AuthContext';
import ThemeProvider from './Context/ThemeContext';
import Router from './Router/Router';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider>
            <AuthProvider>
                <RouterProvider router={Router}></RouterProvider>
            </AuthProvider>
        </ThemeProvider>
    </React.StrictMode>,
);
