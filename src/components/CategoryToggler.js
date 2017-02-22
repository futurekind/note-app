import React, {PropTypes} from 'react'
import styled from 'styled-components';

import Cb from './Checkbox';
import Ic from './Icon';

const View = styled.div``;
const Checkbox = styled.div``;
const Label = styled.div``;
const Icon = styled.div``;
const Input = styled.input``

const CategoryToggler = ({
    checkboxType,
    checked,
    label,
    onCheck,
    editMode,
    onEdit,
    onEditDone
}) => {
    return (
        <View>
            
            <Checkbox onClick={ () => onCheck(checked) }>
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
    checked: PropTypes.bool,
    editMode: PropTypes.bool,
    label: PropTypes.string,
    onCheck: PropTypes.func,
    onEdit: PropTypes.func,
    onEditDone: PropTypes.func,
}

export default CategoryToggler