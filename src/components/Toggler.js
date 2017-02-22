import React, {PropTypes} from 'react';
import styled from 'styled-components';

import SectionTitle from './Sectiontitle';

const View = styled.aside``;

const Header = styled.header``;

const Body = styled.main``;

const Toggler = ({
    title,
    open,
    children,
    onToggle
}) => {
    return (
        <View>
            
            <Header onClick={ () => onToggle(open) }>
                <SectionTitle iconId={ open ? 'up' : 'down' }>{ title }</SectionTitle>
            </Header>

            <Body open={ open }>
                { children }
            </Body>
        </View>
    )
}

Toggler.defaultProps = {
    open: false,
    onToggle: () => {}
}

Toggler.propTypes = {
    title: PropTypes.string.isRequired,
    open: PropTypes.bool,
    onToggle: PropTypes.func,
    children: PropTypes.any,
}

export default Toggler