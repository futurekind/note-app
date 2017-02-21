import React, {PropTypes} from 'react'
import styled from 'styled-components';

import Icon from './Icon';
import Divider from './Divider';

const View =  styled.h2`
    margin: 0;
`

const Body = styled.div`
    display: flex;
    align-items: center;
`

const Label = styled.div`
    padding: 20px 0;
    flex: 1;
`

const ViewIcon = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    align-items: center;
`

const Sectiontitle = ({
    iconId,
    children
}) => {
    return (
        <View>
            <Body>
                <Label>{ children }</Label>
                { iconId && <ViewIcon>
                    <Icon id={ iconId } />   
                </ViewIcon> }
            </Body>
            <Divider />
        </View>
    )
}

Sectiontitle.propTypes = {
    iconId: PropTypes.string,
}

export default Sectiontitle