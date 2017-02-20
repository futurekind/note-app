import React from 'react';
import styled from 'styled-components';

import { colors } from '../utils/styles'

const View = styled.hr`
    height: 1px;
    margin: 0;
    border: none;
    border-bottom: 1px solid #fff;
    background: ${props => props.bg};
`

const Divider = props => <View bg={ colors.darkAlpha } />

export default Divider