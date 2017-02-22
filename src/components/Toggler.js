import React, {PropTypes} from 'react';
import styled, { css } from 'styled-components';

import SectionTitle from './Sectiontitle';

const Header = styled.header`
    cursor: pointer;
`;

const Body = styled.main`
    height: 0;
    overflow: hidden;
    transform: translateY(-100px);
    opacity: 0;
    transition: transform .25s, 
                opacity .25s .1s;

    ${props => {
        if(props.open) {
            return css`
                height: auto;
                padding: 20px 0;
                transform: none;
                opacity: 1;
            `
        }
    }}
`;

const Toggler = ({
    title,
    open,
    children,
    onToggle
}) => {
    return (
        <aside>
            <Header onClick={ () => onToggle(open) }>
                <SectionTitle iconId={ open ? 'up' : 'down' }>{ title }</SectionTitle>
            </Header>

            <Body open={ open }>
                { children }
            </Body>
        </aside>
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