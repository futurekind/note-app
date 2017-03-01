import React, { PropTypes } from 'react'
import styled from 'styled-components';

import Icon from './Icon';

const View = styled.div``

const Label = styled.div``

const LabelNoEntries = styled.div``

const LabelCategories = styled.ul``

const LabelCategoriesItem = styled.li``

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
                    <LabelNoEntries>Keine Kategorie</LabelNoEntries>
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