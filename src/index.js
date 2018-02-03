import './semantic/dist/semantic.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import {pageHomeData} from './FakeData';

ReactDOM.render(
<BrowserRouter>
    <App fakeData={pageHomeData}/>
</BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();


