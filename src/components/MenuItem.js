import React, {PropTypes} from 'react';
import styled from 'styled-components';

const View = styled.div``;

const Title = styled.div``;

const Subtitle = styled.div``;

const Meta = styled.div``;

const Flag = styled.span``

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