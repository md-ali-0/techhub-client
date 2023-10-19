import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import ThemeProvider from './Context/ThemeContext';
import Router from './Router/Router';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider>
            <RouterProvider router={Router}></RouterProvider>
        </ThemeProvider>
    </React.StrictMode>,
);
