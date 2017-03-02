import React, { PropTypes } from 'react'
import styled from 'styled-components';

import Icon from './Icon';
import Checkbox from './Checkbox'

const View = styled.div`
    width: 200px;
    display: inline-block;
    position: relative;
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

const Body = styled.ul`
    width: 100%;
    margin: 0;
    padding: 5px 0;
    border-radius: 3px;
    position: absolute;
    top: 95%;
    right: 0;
    background: #fff;
    box-shadow: rgba(0, 0, 0, .3) 0 3px 7px;
    text-align: left;
    list-style: none;
    transform: ${props => props.open 
        ? 'scale(1)'
        : 'scale(0)'
    };
`

const CategoryBtn = styled.li`
    padding: 5px 10px;
    display: flex;
    cursor: pointer;
    align-items: center;
`

const CategoryBtnLabel = styled.div`
    padding: 0 10px;
    font-size: 14px;
    font-weight: 300;
`

const CategoryChooser = ({
    categories,
    open,
    onClickLabel,
    onClickCategory
}) => {
    
    const activeCategories = categories.filter(cat => cat.active)

    return (
        <View>
            <Label onClick={ onClickLabel }>
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
                <Icon id="down" size={18} />
            </Label>
            { open && 
                <Body open={ open }>
                    { categories.map(cat => {
                        return (
                            <CategoryBtn key={ cat.id } onClick={ () => onClickCategory(cat.id) }>
                                <Checkbox type={ cat.colorCode } checked={ cat.active } />
                                <CategoryBtnLabel>{ cat.label }</CategoryBtnLabel>
                            </CategoryBtn>
                        )
                    }) }
                </Body>
            }
        </View>
    )
}

CategoryChooser.defaultProps = {
    categories: [],
    open: false,
    onClickLabel: () => {},
    onClickCategory: () => {},
}

CategoryChooser.propTypes = {
    categories: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            color: PropTypes.string,
            colorCode: PropTypes.string,
            label: PropTypes.string,
            active: PropTypes.bool,
        }),
    ),
    open: PropTypes.bool,
    onClickLabel: PropTypes.func,
    onClickCategory: PropTypes.func,
}

export default CategoryChooser