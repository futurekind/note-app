import React from 'react'
import styled, { css } from 'styled-components';

import { colors } from '../utils/styles';

const H1 = () => `
    margin-top: 0;
    margin-bottom: 1.25em;
    font-weight: 600;
    text-align: center;
    font-size: 28px;
    letter-spacing: 1.17px;
`

const H2 = () => `
    margin: 1em 0;
    padding-left: 20px;
    position: relative;
    font-size: 24px;
    font-weight: 600;
    letter-spacing: 1px;

    &::before {
        content: '#';
        position: absolute;
        left: 4px;
    }
`

const H3 = () => `
    margin: 1em 0;
    padding-left: 20px;
    position: relative;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: .67px;

    &::before {
        content: '##';
        position: absolute;
        left: 0;
    }
`

const Paragraph = () => `
    margin: 1.2em 0;
    padding-left: 20px;
    letter-spacing: .67px;
`

const List = () => `
    margin: 1.2em 0;
    padding-left: 20px;
`

const Link = () => `
    color: ${colors.blueDark};
    
    &:hover {
        color: ${colors.blue};
    }
`

const View = styled.div`
    font-weight: 300;
    font-size: 16px;

    h1 { ${() => H1()} }
    h2 { ${() => H2()} }
    h3 { ${() => H3()} }

    p { ${() => Paragraph()} }

    ul, ol { ${() => List()} }

    a { ${() => Link()} }
`

const Note = ({
    children
}) => {
    return (
        <View>
            { children }
        </View>
    )
}

export default Note