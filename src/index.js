import React from 'react';
import { render } from 'react-dom';
import './index.css';

import MenuItem from './components/MenuItem';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            open: false
        }
    }

    render() {
        return (
            <MenuItem
                title="Titel 1"
                subtitle="Subtitel 1"
                flagColor="red"
            />
        )
    }
}

render(
    <App />,
    document.getElementById('root')
);
