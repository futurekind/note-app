export const types = {
    CAT__EDIT: 'CAT__EDIT',
    CAT__TOGGLE_ACTIVE: 'CAT__TOGGLE_ACTIVE',
    CAT__TOGGLE_OPEN: 'CAT__TOGGLE_OPEN' 
}

export const edit = (id, payload) => ({
    type: types.CAT__EDIT,
    id,
    payload
})

export const toggleActive = id => ({
    type: types.CAT__TOGGLE_ACTIVE,
    id
})

export const toggleOpen = () => ({
    type: types.CAT__TOGGLE_OPEN
})