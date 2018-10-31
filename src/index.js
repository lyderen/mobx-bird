import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'mobx-react';

import BirdStore from './stores/BirdStore';
import CitiesStore from './stores/CitiesStore'; 

const Root = (
    <Provider BirdStore={BirdStore} CitiesStore={CitiesStore}> 
        <App/>
       
    </Provider>
)
ReactDOM.render(Root, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
