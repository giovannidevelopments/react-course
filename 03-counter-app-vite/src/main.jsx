import React from 'react';
import ReactDOM from 'react-dom/client';
// import { FirstApp } from './FirstApp';
// import { App } from './HelloWorldApp';
import { CounterApp } from './CounterApp';

import './styles.css';



ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value={3} />
    </React.StrictMode>
);