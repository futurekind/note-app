import React, { PropTypes } from 'react';
import styled from 'styled-components';

import { colors } from '../utils/styles';
import Icon from './Icon';

const View = styled.span`
    width: 24px;
    height: 24px;
    display: inline-block;
    background-color: ${ props => props.background };
    cursor: pointer;
`

const CheckboxIcon = styled(Icon)`
    fill: #fff;
`

const Checkbox = ({
    checked,
    type,
    onCheck
}) => {
    return (
        <View background={ colors[type] } onClick={ () => onCheck(checked) }>
            { checked && <CheckboxIcon id="check" /> }
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
        'orange',
        'red',
        'green',
        'blue',
        'purple'
    ]),
    onCheck: PropTypes.func,
}

export default Checkbox