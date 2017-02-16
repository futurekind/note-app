import React from 'react';
import { render } from 'react-dom';
import './index.css';

import Checkbox from './components/Checkbox'

render(
    <Checkbox type="orange" />,
    document.getElementById('root')
);
