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
        updatedAt: '2017-03-01T15:46:09.752Z',
        title: 'Some new Note',
        category_id: 'cat3',
        content: '# This is a header\n\nAnd this is a paragraph\n\nAnother paragraph\n\n>Foo some'
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
