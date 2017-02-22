import React from 'react';
import { render } from 'react-dom';
import './index.css';

import Toggler from './components/Toggler';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            open: false
        }
    }

    render() {
        return (
            <Toggler 
                title="Some Title" 
                open={ this.state.open }
                onToggle={ isToggled => this.setState({
                    open: !isToggled
                })}
            >
                <p>One</p>
                <p>Two</p>
                <p>Three</p>
            </Toggler>
        )
    }
}

render(
    <App />,
    document.getElementById('root')
);
