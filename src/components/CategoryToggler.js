import React, {PropTypes} from 'react'
import styled from 'styled-components';

import Cb from './Checkbox';
import Ic from './Icon';

const View = styled.div`
    display: flex;
    align-items: center;
`;

const Checkbox = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`;

const Label = styled.div`
    padding: 0 10px;
    flex: 1;
    font-weight: 300;
    cursor: pointer;

    &:hover {
        & + * {
            opacity: 1;
        }
    }
`;

const Icon = styled.div`
    display: flex;
    align-items: center;
    opacity: 0;
`;

const Input = styled.input``

const CategoryToggler = ({
    checkboxType,
    checked,
    label,
    onCheck,
    editMode,
    onEdit,
    onEditDone,
    className,
    checkboxValue
}) => {
    return (
        <View className={ className }>
            
            <Checkbox onClick={ () => onCheck(checked, checkboxValue) }>
                <Cb 
                    type={ checkboxType }
                    checked={ checked }
                />
            </Checkbox>

            <Label onClick={ onEdit }>{ 
                editMode 
                    ? <Input type="text" defaultValue={ label } onBlur={ onEditDone } />
                    : label
            }</Label>

            <Icon>
                <Ic id="edit" size={ 16 } />
            </Icon>

        </View>
    )
}

CategoryToggler.defaultProps = {
    onCheck: () => {},
    onEdit: () => {},
    onEditDone: () => {},
    checked: false,
    editMode: false,
}

CategoryToggler.propTypes = {
    checkboxType: PropTypes.oneOf([
        'orange',
        'red',
        'green',
        'blue',
        'purple'
    ]).isRequired,
    checkboxValue: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    editMode: PropTypes.bool,
    label: PropTypes.string,
    onCheck: PropTypes.func,
    onEdit: PropTypes.func,
    onEditDone: PropTypes.func,
}

export default CategoryToggler