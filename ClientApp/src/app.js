
import React from 'react';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

export default 
    <Provider store={store}>
        <AppRouter />
    </Provider>