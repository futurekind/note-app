import React from 'react';
import styled from 'styled-components';

const View = styled.h1`
    margin: 0;
    font-size: 36px;
    letter-spacing: 1.5px;
    text-align: right;
    text-transform: uppercase;
    text-shadow: 0 1px 0 #FFFFFF;
`

const Pagetitle = ({
    children
}) => {
    return (
        <View>{ children }</View>
    )
}

export default Pagetitle