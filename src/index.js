import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import { robots } from "./Robohash";
import registerServiceWorker from './registerServiceWorker';
//import CardList from './CardList';

ReactDOM.render(
    <div>
        <App robots={robots} />
    </div>

    , document.getElementById('root'));
registerServiceWorker();
