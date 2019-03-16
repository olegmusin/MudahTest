import React from 'react';
import ReactDOM from 'react-dom';
import Store from 'redux-store-init';
import { Provider } from 'react-use-store';
import * as reducers from './reducers';
import * as serviceWorker from './serviceWorker';
import App from './App';
import './index.css';

const store = Store({ reducers });

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
