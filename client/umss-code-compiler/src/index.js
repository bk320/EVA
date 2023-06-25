import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const reactRoot = ReactDOM.createRoot(document.getElementById('root'));
reactRoot.render(<App/>)
registerServiceWorker();
