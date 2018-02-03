
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';
import { pageHomeData } from './fakeData';
import './semantic/dist/semantic.min.css';
import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <App fakeData={pageHomeData} />
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker(); // TODO: the service worker was added automatically with crfeate-react-app. learn about it and use it if needed


