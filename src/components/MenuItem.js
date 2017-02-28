import React, {PropTypes} from 'react';
import styled from 'styled-components';

import Divider from './Divider';

const View = styled.div`
    font-size: 14px;
    cursor: pointer;
    background-color: ${props => props.active ? '#E4E4E4' : 'transparent'};

    &.menu-item-enter {
        opacity: 0;
        transform: translateY(-10%);
    }

    &.menu-item-enter-active {
        opacity: 1;
        transform: none;
        transition: opacity .5s ease-out,
                    transform .5s ease-out;
    }
`;

const Title = styled.div`
    padding: 10px 10px 5px;
    font-weight: 600;
`;

const Subtitle = styled.div`
    flex: 1
`;

const Meta = styled.div`
    padding: 0 10px 10px;
    display: flex;
    align-items: center;
`;

const Flag = styled.span`
    width: 25px;
    height: 7px;
    border-radius: 3px;
    display: block;
    background-color: ${props => props.bgColor || 'transparent'};
`

const MenuItem = ({
    onClick,
    title,
    subtitle,
    flagColor,
    active,
    index
}) => {
    return (
        <View onClick={ () => onClick(index) } active={ active }>
            <Title>{ title }</Title>
            <Meta>
                <Subtitle>{ subtitle }</Subtitle>
                <Flag bgColor={ flagColor } />
            </Meta>
            <Divider />
        </View>
    )
}

MenuItem.defaultProps = {
    onClick: () => {}
}

MenuItem.propTypes = {
    index: PropTypes.number.isRequired,
    active: PropTypes.bool,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    flagColor: PropTypes.string,
    onClick: PropTypes.func,
}

export default MenuItem