import React, { PropTypes } from 'react';
import styled, { css } from 'styled-components';

import { colors } from '../utils/styles';
import Icon from './Icon';

const View = styled.span`
    width: 24px;
    height: 24px;
    display: inline-block;
    background-color: ${ props => props.background };
    cursor: pointer;

    ${props => {
        if(props.background === 'transparent') {
            return css`
                width: 23px;
                height: 23px;
                border: 1px solid #ccc;
            `
        }
    }}

`

const CheckboxIcon = styled(Icon)`
    fill: ${props => props.fill};
`

const Checkbox = ({
    checked,
    type,
    onCheck
}) => {
    return (
        <View background={ colors[type] || 'transparent' } onClick={ () => onCheck(checked) }>
            { checked && <CheckboxIcon id="check" fill={
                colors[type] ? '#fff' : colors.dark
            } /> }
        </View>
    )
}

Checkbox.defaultProps = {
    onCheck: () => {},
    checked: false
}

Checkbox.propTypes = {
    checked: PropTypes.bool,
    type: PropTypes.oneOf([
        'none',
        'orange',
        'red',
        'green',
        'blue',
        'purple'
    ]),
    onCheck: PropTypes.func,
}

export default Checkbox