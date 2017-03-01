import React, { PropTypes } from 'react'
import styled from 'styled-components';

import Icon from './Icon';

const View = styled.div`
    width: 200px;
    display: inline-block;
`

const Label = styled.div`
    padding: 5px 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    cursor: pointer;
`

const LabelNoEntries = styled.div`
    padding-right: 5px;
    flex: 1;
    text-align: right;
    font-weight: 300;
    font-size: 14px;
`

const LabelCategories = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`

const LabelCategoriesItem = styled.li`
    width: 28px;
    height: 10px;
    margin-right: 5px;
    border-radius: 3px;
    display: inline-block;
    background-color: ${props => props.color};
`

const LabelIcon = styled(Icon)``

const CategoryChooser = ({
    categories,
    open
}) => {
    
    const activeCategories = categories.filter(cat => cat.active)

    return (
        <View>
            <Label>
                { activeCategories.length === 0 &&
                    <LabelNoEntries>Kategorie</LabelNoEntries>
                }
                { activeCategories.length !== 0 &&
                    <LabelCategories>
                        { activeCategories.map( cat => {
                            return (
                                <LabelCategoriesItem 
                                    key={ cat.id } 
                                    color={ cat.color }
                                />
                            )
                        }) }
                    </LabelCategories>
                }
                <LabelIcon id="down" size={18} />
            </Label>
        </View>
    )
}

CategoryChooser.defaultProps = {
    categories: [],
    open: false
}

CategoryChooser.propTypes = {
    categories: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            color: PropTypes.string,
            label: PropTypes.string,
            active: PropTypes.bool,
        }),
    ),
    open: PropTypes.bool,
}

export default CategoryChooser