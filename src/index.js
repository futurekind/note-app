import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import store from './store/';
import App from './container/App';

store.dispatch({
    type: 'NOTES__CREATE',
    payload: {
        id: 'note1',
        updatedAt: '2017-03-01T13:15:00',
        title: 'Some new Note',
        category_id: 'cat3'
    }
})

store.dispatch({
    type: 'NOTES__ACTIVE',
    id: 'note1'
})

render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root')
);
