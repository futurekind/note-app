import React from 'react';
import { render } from 'react-dom';
import './index.css';

import Test from './components/CategoryToggler';

render(
    <Test checkboxType="red" label="Some Label" />,
    document.getElementById('root')
);
