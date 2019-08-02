
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './src/routers/AppRouter';
import configureStore from './src/store/configureStore';
import 'normalize.css/normalize.css';
import './src/styles/styles.scss';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <AppRouter />
    </Provider>,
    document.getElementById('app')
)