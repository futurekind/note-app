import React, { PropTypes } from 'react';
import styled from 'styled-components';

const getIcon = ({ id }) => {
    switch(id) {
        case 'add':
            return <path fillRule="nonzero" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6"/>;
        
        case 'check':
            return <path fillRule="nonzero" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41"/>
        
        case 'down':
            return <path fillRule="nonzero" d="M7.41 8.84L12 13.42l4.59-4.58L18 10.25l-6 6-6-6"/>

        case 'edit':
            return <path d="M6 15.5V18h2.5l7.373-7.373-2.5-2.5L6 15.5zm11.807-6.807c.26-.26.26-.68 0-.94l-1.56-1.56c-.26-.26-.68-.26-.94 0l-1.22 1.22 2.5 2.5 1.22-1.22z" fillRule="nonzero"/>

        default:
            return null;
    }
}

const View = styled.svg`
    fill: currentColor;
`

const Icon = ({
    size,
    className,
    ...props
}) => {
    return (
        <View width={ size } height={ size } className={ className } viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            { getIcon(props) }
        </View>
    )
}

Icon.defaultProps = {
    size: 24,
}

Icon.propTypes = {
    size: PropTypes.number,
    id: PropTypes.oneOf([
        'add', 'down', 'up', 'check', 'edit'
    ]),
}

export default Icon