import React from 'react';
import { render } from 'react-dom';
import './index.css';

import Test from './components/Sectiontitle';

render(
    <Test iconId="edit">Hallo</Test>,
    document.getElementById('root')
);
